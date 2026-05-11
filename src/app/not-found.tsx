import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-7xl md:text-9xl font-bold tracking-wide">
          404
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white text-black px-6 py-3 text-sm md:text-base font-medium transition hover:bg-white/90"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}