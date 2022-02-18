import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

/*
Reusable, centered generic content "box".
*/
export function ContentBox({children}) {
    return html`
        <div class="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green flex">
            <div class="w-0 xl:w-1/4"></div>
            <div class="w-full xl:w-1/2">
                <div class="bg-dark-green p-5 mt-10 detail-inner">
                    ${children}
                </div>
            </div>
            <div class="w-0 xl:w-1/4"></div>
        </div>
    `;
}