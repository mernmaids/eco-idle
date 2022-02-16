import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function EcoPyramidOrganism({name, onClick}) {
    return html`
        <div class="h-32 w-32 m-4 bg-light-blue-darken-hover shrink-0 icon-outer" onClick=${onClick}>
            <img class="icon" src="/static/svg/${name}.svg"/>
        </div>
    `;
}