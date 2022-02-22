import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';
import { Shop } from './shop/Shop.js';
import { Prestige } from './prestige/Prestige.js';

export function ContentView({ data, view }) {
  // choose which view to render based on the selected option
  if(view === "sector") {
    return html`<${Sector} savedata=${data.saveData}/>`;
  } else if(view === "shroom shop") {
    return html`<${Shop} shopdata=${data.saveData.shroomShopData}/>`;
  } else if(view === "prestige" ) {
    return html`<${Prestige}/>`;
  } else if(view === "enviro shop") {
    return html`<${Shop} shopdata=${data.saveData.enviroShopData}/>`;
  } else if(view === "settings") {
    return html`<${SettingsMenu}/>`;
  }
}
