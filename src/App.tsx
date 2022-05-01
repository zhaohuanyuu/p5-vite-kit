import type { Component } from 'solid-js';
import { createSignal, For } from "solid-js";

const App: Component = () => {
  const pages = import.meta.glob('../pages/**/*.html');
  const [list, setList] = createSignal(Object.keys(pages).map(key => {
    const [url, name] = key.match(/\/pages\/(.+)\//);
    return {
      url,
      name
    }
  }))

  return (
    <div class="container min-h-screen mx-auto">
      <img src="/assets/p5js.svg" class="p5-logo mb-7" alt="p5js"/>
      <ul class="list-wrapper">
        <For each={list()}>
          {
            item => <li class="list-item p-5 text-lg"><a href={item.url}>{ item.name }</a></li>
          }
        </For>
      </ul>
      <aside class="aside-logo">
        <svg width="15rem" height="15rem" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 28 28" enable-background="new 0 0 28 28">
        <path fill="#ED225D" stroke="#ED225D" stroke-miterlimit="10" d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48  l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"/>
      </svg>
      </aside>
    </div>
  )
}

export default App;
