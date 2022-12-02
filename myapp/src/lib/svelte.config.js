import adapter from 'sveltejs/adapter-node';

/** @type { import ('@svelteks/kit').Config} */

const config={
    kit:{
        adapter: adapter()
    }
};

export default config;