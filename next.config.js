/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    redirects() {
        return [
            { source: '/index.php', destination: '/', permanent: true },
            { source: '/index.html', destination: '/', permanent: true }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            }
        ]
    }
}

module.exports = nextConfig
