import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { EcoPyramidDetail } from "./EcoPyramidDetail.js";
import { EcoPyramidView } from "./EcoPyramidView.js";

export function EcoPyramid() {
    const selected_data = {
        "name" : "Tree Moss",
        "description" : " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "details" : [
        ]

    };
    return html`
        <div class="float-left w-full lg:w-2/3 overflow-x-scroll lg:overflow-x-hidden">
            <${EcoPyramidView}/>
        </div>
        <div class="float-left w-full lg:w-1/3 max-h-full px-5 ">
            <${EcoPyramidDetail} orgodata=${selected_data}/>
        </div>
    `;
}