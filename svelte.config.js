import preprocess from 'svelte-preprocess';
import awsAdapter from 'sveltekit-adapter-aws';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: awsAdapter.default,
		target: '#svelte'
	}
};

export default config;
