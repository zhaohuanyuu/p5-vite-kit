import path from 'path'
import fg from 'fast-glob'

interface userOptions {
	dir?: string
	filename?: string
}

/**
 * @method getPageInfo
 * @param path
 */
function getPathSegment(path: string) {
	return path.match(/.+\/(.+)\/index.html/);
}

export function getMultiInput(options: userOptions = {}) {
	const { dir, filename } = options;
	console.log(path.resolve(process.cwd(), dir));
	const entries = fg.sync(`${dir}/**/*${filename}`);
	const inputMap = entries.reduce((acc, cur) => {
		const [path, name] = getPathSegment(cur);
		// return { [name]: path }
		acc[name] = path
		return acc;
	}, {})

	return inputMap;
}
