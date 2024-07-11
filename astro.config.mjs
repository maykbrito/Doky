import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Doky',
    social: {
      github: 'https://github.com/maykbrito/doky'
    }
    // sidebar: [
    // 	{
    // 		label: 'Guides',
    // 		items: [
    // 			// Each item here is one entry in the navigation menu.
    // 			{ label: 'Example Guide', slug: 'guides/example' },
    // 		],
    // 	},
    // 	{
    // 		label: 'Reference',
    // 		autogenerate: { directory: 'reference' },
    // 	},
    // ],
  })],
  output: "server",
  adapter: netlify()
});