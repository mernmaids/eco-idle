import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Sector } from '/src/Sector.js';

export function ContentView({ option }) {
  if(option === "sector") {
    return html`<${Sector}/>`;
  } else if(option === "shroom_shop") {
    return html`shroom shop`;
  } else if(option === "prestige" ) {
    return html`prestige`;
  } else if(option === "enviro shop") {
    return html`enviro shop`;
  } else if(option === "settings") {
    return html`settings`;
  }
}

