import { resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import p5Mpa from './build/plugins/vite-plugin-p5-mpa';

export default defineConfig({
  plugins: [
	  p5Mpa(),
    solidPlugin(),
  ],
  build: {
    // target: 'esnext',
    // polyfillModulePreload: false,
	  rollupOptions: {
		  /*input: {
			  demo01: resolve(__dirname, 'src/pages/demo01/index.html')
		  }*/
	  }
  }
})
