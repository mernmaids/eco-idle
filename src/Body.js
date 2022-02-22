import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

// prints list of organisms
// TODO: merge with frontend to make it look nice
export function Body({ sector, organisms, children }) {
    console.log(organisms[sector]);
    console.log(sector);
    return html`
        <ul>
        ${Object.keys(organisms[sector]).map((key, index) => html`<li key=${key}>${key}</li>`)}
        </ul>
    `
}