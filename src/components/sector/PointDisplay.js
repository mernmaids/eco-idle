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
    <div class="w-full text-center text-5xl p-5">
        <div class="p-5 organism-point-meter" title="Organism Points">
            <${OrganismPointSVG}/>
            <div class="organism-point-readout">${points}${unitAbbreviations[unit]}</div>
        </div>
    </div>
    `;
}