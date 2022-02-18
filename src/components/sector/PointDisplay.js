import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { OrganismPointSVG } from "./OrganismPointSVG.js";

export function PointDisplay({points, unit}) {
    const unitAbbreviations = {
        "million" : "m",
        "billion" : "b"
    }
    return html`
    <div class="w-full text-center text-5xl p-5 h-1/6">
        <div class="p-5 organism-point-meter" title="Organism Points">
            <!-- we use the raw SVG XML here so we can animate it -->
            <${OrganismPointSVG}/> <div class="organism-point-readout">${points}${unitAbbreviations[unit]}</div>
        </div>
    </div>
    `;
}