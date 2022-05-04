// source: https://github.com/makinteract/p5js-wrapper/
import p5 from 'p5';

const sketch = window;

// @ts-ignore
window.p5 = p5;

export { sketch, p5 }