import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function Body({ sector, organisms, children }) {
    console.log(organisms[sector]);
    console.log(sector);
    return html`
        <ul>
        ${organisms[sector].forEach((organism) => html`<li key=${organism.name}>${organism.name}</li>`)}
    
        </ul>
    `
}