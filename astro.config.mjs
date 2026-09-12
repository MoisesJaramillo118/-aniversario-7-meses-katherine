import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://aniversario-7-meses-katherine.example.com',
  integrations: [
    react()
  ],
  build: {
    format: 'file'
  }
});