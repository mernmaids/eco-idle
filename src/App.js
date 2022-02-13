import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Menu } from '/src/Menu.js';
import { ContentView } from '/src/ContentView.js';

function App() {
  return html`
    <div class="h-screen">
      <${Menu}/>
      <${ContentView} option="sector"/>
    </div>
  `;
}

render(html` <${App}/> `, document.getElementById("app"));
