/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tr/about.html",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
