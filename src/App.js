import {
  html,
  render,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getData } from "./Api.js";
import { Menu } from './components/menu/Menu.js';
import { ContentView } from './components/ContentView.js';

// Parent component
function App() {
    const [data, setData] = useState();
    const [view, setView] = useState('sector');
    function handleMenuSelect(selection) {
        if(view !== setView) {
            setView(selection);
        }
    }

    // only gets save data at first render
    useEffect(() => {
        getData().then((d) => {
            setData(d);
        });
    }, []);

    // if data is still loading
    if(!data) {
        return html`<div>Loading...</div>`;
    }

    // if data is loaded
    return html`
        <div class="h-screen">
            <${Menu} onMenuSelect=${handleMenuSelect} options=${data.menuOptions}/>
            <${ContentView} data=${data} view=${view}/>
        </div>
    `;
}

render(html` <${App}/> `, document.getElementById("app"));
