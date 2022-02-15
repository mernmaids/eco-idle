import {
  html,
  render,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Menu } from './components/menu/Menu.js';
import { ContentView } from './components/ContentView.js';

function App() {

  const [view, setView] = useState('sector');

  function handleMenuSelect(e) {
    if(view !== setView )
      setView(e);
  }

  return html`
    <div class="h-screen">
      <${Menu} onMenuSelect=${handleMenuSelect}/>
      <${ContentView} option=${view}/>
    </div>
  `;
}

render(html` <${App}/> `, document.getElementById("app"));
