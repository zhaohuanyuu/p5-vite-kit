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
			'@addons': path.resolve(__dirname, './src/addons')
		}
	}
})
