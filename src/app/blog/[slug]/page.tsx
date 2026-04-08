import { Metadata } from "next";
import Link from "next/link";
import React from "react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ✅ FORMAT FUNCTION (IMPROVED)
function formatBlogContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const formatInline = (text: string) => {
    // 🔗 Convert links
    let formatted = text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // ⭐ Bold (**text**)
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    return formatted;
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    // 👉 Bullet list
    if (trimmed.startsWith("•") || trimmed.startsWith("-")) {
      listItems.push(trimmed.replace(/^[-•]\s*/, ""));
      return;
    }

    // 👉 Flush list
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-5 my-4">
          {listItems.map((item, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{
                __html: formatInline(item),
              }}
            />
          ))}
        </ul>
      );
      listItems = [];
    }

    // 👉 Empty line → spacing
    if (!trimmed) {
      elements.push(<div key={i} className="h-4" />);
      return;
    }

    // 👉 Heading (## Title)
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-semibold mt-8 mb-3">
          {trimmed.replace("## ", "")}
        </h2>
      );
      return;
    }

    // 👉 Normal paragraph
    elements.push(
      <p
        key={i}
        dangerouslySetInnerHTML={{
          __html: formatInline(trimmed),
        }}
      />
    );
  });

  // 👉 Final list flush
  if (listItems.length > 0) {
    elements.push(
      <ul key="last-ul" className="list-disc pl-5 my-4">
        {listItems.map((item, idx) => (
          <li
            key={idx}
            dangerouslySetInnerHTML={{
              __html: formatInline(item),
            }}
          />
        ))}
      </ul>
    );
  }

  return elements;
}

// ✅ METADATA
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return { title: "Blog Not Found" };

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: "article",
    },
  };
}

// ✅ PAGE
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className="bg-[var(--background)] text-white min-h-screen flex items-center justify-center">
        <h1>Blog not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-[var(--background)] text-white min-h-screen">
      {/* HERO */}
      <section className="pt-28 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,200,156,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-[var(--primary-gold)] text-sm mb-6 inline-block hover:underline"
          >
            ← Back to Articles
          </Link>

          <h1 className="text-3xl md:text-5xl font-medium leading-tight">
            {blog.title}
          </h1>

          <p className="text-gray-500 text-sm mt-4">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose prose-invert max-w-none
            prose-headings:text-white 
            prose-p:text-gray-300 
            prose-strong:text-white 
            prose-a:text-[var(--primary-gold)] 
            prose-li:text-gray-300"
          >
            {formatBlogContent(blog.content)}
          </article>
        </div>
      </section>
    </main>
  );
}