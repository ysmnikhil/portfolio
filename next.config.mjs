const debug = process.env.NODE_ENV !== "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig   = {
  basePath: !debug ? "/portfolio" : "",
  images: {
    loader: 'akamai',
    path: '/',
  },
};

export default nextConfig;
