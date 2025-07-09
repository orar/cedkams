/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io'
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {key: 'X-Frame-Options', value: 'ALLOW FROM https://maps.google.com'}
                ]
            }
        ]
    }
    
};

export default nextConfig;
