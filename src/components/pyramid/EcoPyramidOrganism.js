import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function EcoPyramidOrganism({name}) {
    return html`
        <div class="h-32 w-32 m-4 bg-light-blue shrink-0 icon-outer">
            <img class="icon" src="/static/svg/${name}.svg"/>
        </div>
    `;
}