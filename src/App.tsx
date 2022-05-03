import './styles/app.css';
import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';

import Corner from "./components/corner";

const App: Component = () => {
  const pages = import.meta.glob('/src/pages/**/*.html');
  const [list, setList] = createSignal(Object.keys(pages).map(key => {
    const [url, name] = key.match(/\/src\/pages\/(.+)\//);
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
            (item, index) => <li class="list-item p-5 text-3xl"><span class='text-slate-900'>{ index()+1 }.</span><a href={ item.url }>{ item.name }</a></li>
          }
        </For>
      </ul>
      <aside class="aside-logo">
        <Corner width="37.5rem" height="37.5rem" />
      </aside>
    </div>
  )
}

export default App;
