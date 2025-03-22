import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: [
          './src/assets/'
        ]
      }
    }
  },
  integrations: [
    starlight({

      title: 'NEUST House of Representatives',
       logo: {
         src: './src/assets/neust-hor.PNG',
       },
      social: {
        email: 'mailto: usg.hor@ineust.ph.education',
        facebook: 'https://www.facebook.com/USGLegislativeBranch',
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Officers',
          link: '/officers',
        },
        {
          label: 'Bills & Resolutions',
          items: [
            {
              label: 'Introduction',
              link: '/resolutions',
            },
            {
              label: 'Series 2025',
              collapsed: false,
              autogenerate: { directory: 'resolutions/2025' },
            },
            {
              label: 'Series 2024',
              collapsed: false,
              autogenerate: { directory: 'resolutions/2024' },
            }
          ]
        },
        {
          label: 'About',
          link: '/about',
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
    tailwind(),
  ],
});