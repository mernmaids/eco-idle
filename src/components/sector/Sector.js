import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { EcoPyramid } from '../pyramid/EcoPyramid.js';
import { PointDisplay } from './PointDisplay.js';

export function Sector() {
    return html`
        <div class="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green sector-view">
            <${PointDisplay} points="812.3" unit="billion"/>
            <${EcoPyramid}/>
        </div>
    `;
}