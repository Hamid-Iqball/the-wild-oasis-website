/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vgsfnabpxjclsbxtblzd.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/cabin-images/**',
            search: '',
          },
        ],
      },
      eslint:{
        ignoreDuringBuilds:true 
      }
      // output:"export"
};

export default nextConfig;
