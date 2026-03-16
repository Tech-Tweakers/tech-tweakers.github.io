import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/tech-tweakers-page',
    assetPrefix: '/tech-tweakers-page/',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
