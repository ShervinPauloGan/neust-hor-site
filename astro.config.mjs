import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    starlight({
      title: 'NEUST House of Representatives',
      logo: {
        src: './src/assets/HOUSE-LOGO.png',
      },
      social: {
        github: 'https://github.com/your-org/your-repo',
        facebook: 'https://facebook.com/your-page',
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Resolutions',
          items: [
            {
              label: 'Introduction',
              link: '/resolutions',
            },
            {
              label: 'Series 2025',
              collapsed: false,
              items: [
                { label: 'Resolution 1', link: '/resolutions/2025/resolution-1' },
                { label: 'Resolution 2', link: '/resolutions/2025/resolution-2' },
              ]
            },
            {
              label: 'Series 2024',
              collapsed: false,
              items: [
                { label: 'Resolution 1', link: '/resolutions/2024/resolution-1' },
                { label: 'Resolution 2', link: '/resolutions/2024/resolution-2' },
              ]
            }
          ]
        },
        {
          label: 'Officers',
          link: '/officers',
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