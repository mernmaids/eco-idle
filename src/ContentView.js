import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Sector } from '/src/Sector.js';

export function ContentView({ option }) {
    if(option === "sector") {
        console.log('rendering sector');
        return html`<${Sector}/>`;
    }
}