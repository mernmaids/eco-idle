import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function MenuItem({children, onClick}) {
    return html`
        <div class="text-2xl py-3 menu-select" onClick=${onClick}>
            ${children}
        </div>
    `
}