import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { EcoPyramid } from '/src/EcoPyramid.js';
import { OrganismPointSVG } from '/src/OrganismPointSVG.js';

export function Sector() {
    return html`
        <div class="float-left m-0 w-full lg:w-5/6 md:h-full bg-light-green sector-view">
            <div class="w-full text-center text-5xl p-5">
                <div class="p-5 organism-point-meter" title="Organism Points">
                    <${OrganismPointSVG}/>
                    <div class="organism-point-readout">413.82k</div>
                </div>
            </div>
            <${EcoPyramid}/>
        </div>
    `;
}