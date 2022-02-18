import {
  html,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { EcoPyramidDetail } from "./EcoPyramidDetail.js";
import { EcoPyramidView } from "./EcoPyramidView.js";

export function EcoPyramid() {
    const [organism, setOrganism] = useState('tiger');

    function onSelectOrganism(organismName) {
        setOrganism(organismName);
    }

    return html`
        <div class="float-left w-full xl:w-2/3 overflow-x-scroll md:overflow-x-hidden">
            <${EcoPyramidView} selectedOrganism=${onSelectOrganism}/>
        </div>
        <div class="float-left w-full xl:w-1/3 xl:h-5/6 p-5 xl:py-0 ">
            <${EcoPyramidDetail} name=${organism}/>
        </div>
    `;
}