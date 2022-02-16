import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { MenuItem } from "./MenuItem.js";
import { MenuLogo } from "./MenuLogo.js";

export function Menu({ onMenuSelect, info }) {
    const options = [
        'sector',
        'shroom shop',
        'prestige',
        'enviro shop',
        'settings'
    ];
    return html`
        <div class="float-left m-0 w-full xl:w-1/6 xl:h-full text-center bg-dark-green sidebar">
            <${MenuLogo}/>
            ${options.map( (opt) =>
                html`<${MenuItem} onClick=${() => onMenuSelect(opt)}>${opt}</${MenuItem}>`
            )}
        </div>
    `;
}