import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: { plugins: [tailwindcss()] },
  image: {
    service: { entrypoint: './src/services/portfolio-image-service.ts' },
    remotePatterns: [{
      protocol: 'https',
      hostname: 'pub-e185fd1db9bf4dd59d2b99be455217bd.r2.dev',
      pathname: '/smart-city/**',
    }],
  },
});
