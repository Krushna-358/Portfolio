/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Export static files
    basePath: '/Portfolio/', // Replace with your GitHub repo name
    assetPrefix: '/Portfolio/', // Same as basePath
    images: {
      unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    },
  };
  
export default nextConfig;
