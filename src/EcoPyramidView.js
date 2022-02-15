import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function EcoPyramidView() {
    const organisms = {
        "producers" : [
            "grass",
            "tree",
            "moss",
            "lichen"
        ],
        "primary_consumers" : [
            "elk",
            "rabbit",
            "mouse"
        ],
        "secondary_consumers" : [
            "snake",
            "husky"
        ],
        "tertiary_consumers": [
            "tiger"
        ]
    };
    //return html`<div>hey</div>`;
    //return html(['<div class="asdfasdfasdf" ><p>asdf</p><p>jkl;</p></div>']);

    let response = "";
    response += '<div class="flex flex-col text-center items-center overflow-y-hidden overflow-x-hidden pyramid">';
        for(const category of ['tertiary_consumers', 'secondary_consumers', 'primary_consumers', 'producers']) {
            response += '<div class="pyramid-level flex flex-row w-full justify-center">';
                response += '<div class="select-arrow arrow-left shrink-0"><img src="/static/svg/left.svg"/></div>';
                for(const producer of organisms[category]) {
                    response += '<div class="h-32 w-32 m-4 bg-light-blue shrink-0 icon-outer"><img class="icon" src="/static/svg/' + producer + '.svg"/></div>';
                }
                response += '<div class="select-arrow arrow-right shrink-0"><img src="/static/svg/right.svg"/></div>';
            response += '</div>';
        }
    response += '</div>';
    return html([response]);
}