/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Export static files
    basePath: '/YourRepoName', // Replace with your GitHub repo name
    assetPrefix: '/YourRepoName/', // Same as basePath
    images: {
      unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    },
  };
  
export default nextConfig;
