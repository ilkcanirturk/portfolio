/** @type {import('next').NextConfig} */
const nextConfig = {
    // swcMinify seçeneği artık varsayılan olarak true
    webpack: (config) => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
    }
  };
  
  export default nextConfig;