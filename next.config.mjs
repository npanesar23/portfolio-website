// Defensive shim: if `localStorage` is missing or broken (common in SSR),
// provide a no-op implementation so accessors never crash server code.
if (typeof globalThis !== 'undefined') {
  const ls = globalThis.localStorage;
  if (!ls || typeof ls.getItem !== 'function') {
    globalThis.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      get length() {
        return 0;
      },
    };
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;
