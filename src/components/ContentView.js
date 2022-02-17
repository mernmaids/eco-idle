import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';

export function ContentView({ option }) {
  if(option === "sector") {
    return html`<${Sector}/>`;
  } else if(option === "shroom shop") {
    return html`shroom shop`;
  } else if(option === "prestige" ) {
    return html`prestige`;
  } else if(option === "enviro shop") {
    return html`enviro shop`;
  } else if(option === "settings") {
    return html`<${SettingsMenu}/>`;
  }
}

