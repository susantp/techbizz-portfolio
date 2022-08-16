/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['via.placeholder.com']
    },
    env: {
        APP_URL: "http://localhost:3000"
    }
}

module.exports = nextConfig
