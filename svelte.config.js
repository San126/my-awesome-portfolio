import adapter from '@sveltejs/adapter-netlify';
import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: '#svelte',
    adapter: adapter()
  }
};

export default config;