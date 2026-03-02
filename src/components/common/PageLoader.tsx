"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl animate-pulse"></div>

        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}