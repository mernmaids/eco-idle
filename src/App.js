import {
  html,
  render,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Menu } from './components/menu/Menu.js';
import { ContentView } from './components/ContentView.js';

function App() {
  // the selected menu option
  const [view, setView] = useState('sector');

  function handleMenuSelect(e) {
    // only re-render if we selected a different option
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
