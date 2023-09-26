import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GabGabGurus',
    short_name: 'GabGabGurus',
    description: 'Find your Language Partner and improve your Language Skills by sharing with others just like you',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32 16x16',
        type: 'image/x-icon',
      },
    ],
  };
}
