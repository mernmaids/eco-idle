import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { ContentBox } from "../ui/ContentBox.js";

export function Prestige() {
    return html`
        <${ContentBox}>
            <h1 class="text-center text-5xl mb-5">prestige</h1>
        </${ContentBox}>
    `;
}
