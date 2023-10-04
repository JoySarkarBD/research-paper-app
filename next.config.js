/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
			ignoreDuringBuilds: true,
		},
  images: {
    domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
  },
  experimental: {
    serverComponentsExternalPackages: ['@tremor/react']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;