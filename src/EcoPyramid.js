import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { EcoPyramidDetail } from "/src/EcoPyramidDetail.js";
import { EcoPyramidView } from "/src/EcoPyramidView.js";

export function EcoPyramid() {
    return html`
        <div class="float-left w-full lg:w-2/3 overflow-x-scroll lg:overflow-x-hidden">
            <${EcoPyramidView}/>
        </div>
        <div class="float-left w-full lg:w-1/3 max-h-full px-5 ">
            <${EcoPyramidDetail}/>
        </div>
    `;
}