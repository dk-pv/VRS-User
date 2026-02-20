import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  createdAt: string;
}

export const metadata: Metadata = {
  title: "Real Estate Blog | VRS Real Invest",
  description:
    "Explore premium real estate insights, luxury investment strategies, and expert market analysis from VRS Real Invest.",
};

async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog`,
      { cache: "no-store" }
    );

    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    
    <main className="bg-black text-white min-h-screen pt-28">
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
          <div className="text-center mb-20">
            <div className="w-14 h-[2px] bg-yellow-500 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-light tracking-wide leading-tight">
              Market Insights & Investment Intelligence
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Expert perspectives, strategic investment insights, and
              premium real estate analysis tailored for sophisticated investors.
            </p>
          </div>

          {/* Blog Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-12">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group block border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-yellow-500/40 transition duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>

                    <h2 className="text-2xl font-light mb-4 group-hover:text-yellow-500 transition">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <span className="text-yellow-500 text-sm font-medium tracking-wide">
                      Continue Reading →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-20">
              No blog articles available.
            </div>
          )}

        </div>
      </section>
      <Footer/>
    </main>
  );
}