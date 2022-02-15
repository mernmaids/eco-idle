import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function OrganismBox({organism}) {
    return html`<div class="h-32 w-32 m-4 bg-light-blue shrink-0"><img src="/static/svg/${producer}.svg"/></div>`;

}