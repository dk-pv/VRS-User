import { MetadataRoute } from "next";

const BASE_URL = "https://vrsrealinvest.com.au";
const API = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Blog {
  slug: string;
  createdAt: string;
  updatedAt?: string;
}

interface SecuredProperty {
  createdAt: string;
  updatedAt?: string;
}

// Same fetch pattern used in blog/page.tsx for server-side data fetching.
async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API}/api/blog`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

// Same endpoint SecuredProperties.tsx reads from (`/api/secured-properties`).
async function getSecuredProperties(): Promise<SecuredProperty[]> {
  try {
    const res = await fetch(`${API}/api/secured-properties`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
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
    getBlogs(),
    getSecuredProperties(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      // Properties render on a single listing page (no per-property routes),
      // so its lastModified tracks the most recently updated property.
      url: `${BASE_URL}/properties`,
      lastModified: latestTimestamp(properties),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: latestTimestamp(blogs),
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

  // Dynamically pulled blog slugs with their real lastModified timestamps.
  const blogPages: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.createdAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
