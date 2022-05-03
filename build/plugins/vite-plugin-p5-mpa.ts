import path from 'path';
import shell from 'shelljs';
import { getMultiInput } from "../utils";
import type { Plugin, ResolvedConfig, UserConfig } from 'vite'

export default function vitePluginP5Mpa(): Plugin {
	let resolvedConfig;
	const options = {
		dir: 'src/pages',
		filename: 'index.html',
	};

	return {
		enforce: 'pre',
		name: 'vite-plugin-p5-mpa',
		config: (conf: UserConfig): UserConfig => ({
			build: {
				rollupOptions: {
					input: getMultiInput({
						...options,
						...conf
					})
				}
			}
		}),
		configResolved(resolvedConf: ResolvedConfig) {
			resolvedConfig = resolvedConf;
		},
		closeBundle() {
			const root = resolvedConfig.root || process.cwd()
			const resolve = (p: string) => path.resolve(root, p)
			const dest = (resolvedConfig.build && resolvedConfig.build.outDir) || 'dist'

			// 1. rename all xxx.html to index.html if needed
			// if (resolvedConfig.filename !== 'index.html') {
			// 	shell.ls(resolve(`${dest}/${options.dir}/**/*.html`)).forEach(html => {
			// 		shell.mv(html, html.replace(options.filename, 'index.html'))
			// 	})
			// }
			// 2. remove all *.html at dest root
			shell.rm('-rf', resolve(`${dest}/*.html`))
				// 3. move src/pages/* to dest root
			shell.mv(resolve(`${dest}/${options.dir}/*`), resolve(dest))
			// 4. remove empty src dir
			shell.rm('-rf', resolve(`${dest}/src`))
		}
	}
}