/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost'
            },
            {
                hostname: 'api.ketyla-e-milton.portalctech.com.br'
            }
        ]
    }
};

export default nextConfig;
