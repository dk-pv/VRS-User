import { MetadataRoute } from "next";

const BASE_URL = "https://vrsrealinvest.com.au";
const API = process.env.NEXT_PUBLIC_API_BASE_URL;

// Regenerate hourly so newly published blogs appear without a redeploy, and so a
// sitemap generated while the API was unreachable repairs itself on the next pass.
export const revalidate = 3600;

interface Blog {
  slug: string;
  createdAt: string;
  updatedAt?: string;
}

interface SecuredProperty {
  createdAt: string;
  updatedAt?: string;
}

// Returns `null` on failure — deliberately distinct from an empty list — so a
// dead API is reported loudly instead of silently shipping a truncated sitemap.
async function fetchJson<T>(path: string): Promise<T[] | null> {
  if (!API) {
    console.error(
      `[sitemap] NEXT_PUBLIC_API_BASE_URL is not set — ${path} URLs omitted.`,
    );
    return null;
  }

  try {
    const res = await fetch(`${API}${path}`, { next: { revalidate } });

    if (!res.ok) {
      console.error(
        `[sitemap] ${path} responded ${res.status} — URLs omitted.`,
      );
      return null;
    }

    return (await res.json()) as T[];
  } catch (err) {
    console.error(`[sitemap] ${path} fetch failed — URLs omitted.`, err);
    return null;
  }
}

// Most recent updatedAt (falling back to createdAt) across a set of documents.
function latestTimestamp(
  items: Array<{ createdAt: string; updatedAt?: string }>,
): Date {
  if (!items.length) return new Date();
  const newest = Math.max(
    ...items.map((item) =>
      new Date(item.updatedAt ?? item.createdAt).getTime(),
    ),
  );
  return Number.isFinite(newest) ? new Date(newest) : new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, properties] = await Promise.all([
    fetchJson<Blog>("/api/blog"),
    fetchJson<SecuredProperty>("/api/secured-properties"),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      // Trailing slash to match the homepage canonical exactly.
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      // Properties render on a single listing page (no per-property routes),
      // so its lastModified tracks the most recently updated property.
      url: `${BASE_URL}/properties`,
      lastModified: latestTimestamp(properties ?? []),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: latestTimestamp(blogs ?? []),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/webinar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/review`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  if (blogs === null) {
    console.error(
      "[sitemap] Serving static pages only — blog URLs are MISSING. Check the " +
        "API; the sitemap self-repairs on the next revalidation.",
    );
  }

  // `/api/blog` returns published posts only, so drafts never reach the sitemap.
  const blogPages: MetadataRoute.Sitemap = (blogs ?? [])
    .filter((post) => Boolean(post.slug))
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.createdAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticPages, ...blogPages];
}
