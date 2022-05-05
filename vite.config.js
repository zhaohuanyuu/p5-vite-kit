import path from 'path';
import solidPlugin from 'vite-plugin-solid';
import p5Mpa from './build/plugins/vite-plugin-p5-mpa';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [
	  p5Mpa(),
    solidPlugin(),
	  splitVendorChunkPlugin()
  ],
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, './src/styles'),
			'@addons': path.resolve(__dirname, './src/addons')
		}
	},
	build: {
		// because of p5js minified file is 800+kb
		// so don't need to show bundle size warning
		chunkSizeWarningLimit: 850
	}
})
