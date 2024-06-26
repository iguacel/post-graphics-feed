import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter(),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/post-graphics-feed' : '',
        }
    }
};

export default config;