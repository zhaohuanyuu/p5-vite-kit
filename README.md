# p5-vite-kit

multi page mode and framework starter kit tool base on vite.


## Quick Start

```shell
$ npx degit zhaohuanyuu/p5-vite-kit my-p5-app

$ cd my-p5-app

$ npm install
$ npm start
```

## usage

Add custom pages in the pages directory to dynamically generate multiple entries.

The multi-page configuration refers to [vite-plugin-mpa](https://github.com/IndexXuan/vite-plugin-mpa)

```
src/pages
  |- start
    |- index.html
    |- main.js
  |- so on...
```

The writing of p5 in esmodule refers to [p5-wrapper](https://github.com/makinteract/p5js-wrapper) the p5-wrapper is located at src/common/p5Wrapper

```js
import { sketch } from "@addons/p5Wrapper";

sketch.setup = function () {
	createCanvas(800, 600);
};

sketch.draw = function () {
	background(100);
	fill(255, 0, 0);
	noStroke();
	rectMode(CENTER);
	rect(mouseX, mouseY, 50, 50);
};

sketch.mousePressed = function () {
	console.log('here');
};
```


It is then accessible in the local server.
Example: localhost:3000 will show the multiple page list named as their folder name, click href to or manually typed in browser.

<p>
  <img width="100%" src="https://zhaohuanyuu.github.io/resource/repository/p5-kit.png" alt="p5-vite-kit">
</p>

## Bundle

After bundling, the pages in the corresponding pages directory will be promoted to the dist first-level directory, and you can use the preview command to preview it.

```shell
$ npm run build
$ npm run preview
```

```
dist
 |- assets
   |- corresponding js
   |- corresponding image...
   |- etc
 |- start
   |- index.html
```

## License

This project is open source and available under the [MIT License](LICENSE).
