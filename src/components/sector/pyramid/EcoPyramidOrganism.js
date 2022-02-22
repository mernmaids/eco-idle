import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function EcoPyramidOrganism({name, onClick}) {
    return html`
        <div class="h-36 w-36 relative icon-container">
            <div class="icon-progress w-32 h-32">
                <!-- placeholder for actually adjusting the organism refresh rate animation -->
                <div class="progress-wrapper" style="animation-duration: ${(Math.random()*3+3).toString()}s">
                    <div class="progress spinner"></div>
                    <div class="progress filler"></div>
                    <div class="progress-mask"></div>
                </div>
            </div>
            <div class="h-28 w-28 bg-light-blue-darken-hover shrink-0 icon-outer" onClick=${onClick}>
                <img class="icon" src="/static/svg/${name}.svg"/>
            </div>
        </div>
    `;
}