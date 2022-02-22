import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';
import { Shop } from './shop/Shop.js';
import { Prestige } from './prestige/Prestige.js';

export function ContentView({ option }) {
  // Define shop data here so we can reuse the Shop component
  const shroomShopData = {
    "name" : "Shroom Shop",
    "items" : [
      {
        "id" : 1,
        "cost": 75,
        "name" : "Decomposer Fungi",
        "description" : "Decomposes dead organisms, releasing their nutrients back into the environment.",
        "effect" : {
          "stat": "organismPointRate",
          "value": "+10%"
        },
        "purchased" : false
      },
      {
        "id" : 2,
        "cost": 25,
        "name" : "Mycorrhizal Fungi",
        "description" : "Colonizes plant tissue and root systems, improving growth.",
        "effect" : {
          "stat": "producerGrowthRate",
          "value": "+15%"
        },
        "purchased" : false
      },
      {
        "id" : 3,
        "cost": 10,
        "name" : "Edible Fungi",
        "description" : "Acts as additional food source, feeding herbivorous creatures.",
        "effect" : {
          "stat": "primaryConsumerGrowthRate",
          "value": "+5%"
        },
        "purchased" : false
      },
      {
        "id" : 4,
        "cost": 15,
        "name" : "Edible Fungi 2",
        "description" : "Acts as additional food source, feeding herbivorous creatures.",
        "effect" : {
          "stat": "primaryConsumerGrowthRate",
          "value": "+5%"
        },
        "purchased" : false
      },
      {
        "id" : 5,
        "cost": 20,
        "name" : "Edible Fungi 3",
        "description" : "Acts as additional food source, feeding herbivorous creatures.",
        "effect" : {
          "stat": "primaryConsumerGrowthRate",
          "value": "+5%"
        },
        "purchased" : false
      }
    ]
  };
  const enviroShopData = {};
  // choose which view to render based on the selected option
  if(option === "sector") {
    return html`<${Sector}/>`;
  } else if(option === "shroom shop") {
    return html`<${Shop} shopdata=${shroomShopData}/>`;
  } else if(option === "prestige" ) {
    return html`<${Prestige}/>`;
  } else if(option === "enviro shop") {
    return html`<${Shop} shopdata=${enviroShopData}/>`;
  } else if(option === "settings") {
    return html`<${SettingsMenu}/>`;
  }
}
