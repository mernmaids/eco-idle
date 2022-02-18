import {
  html,
  useReducer,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { EcoPyramidOrganism } from "./EcoPyramidOrganism.js";

export function EcoPyramidView({selectedOrganism}) {
    // "visible" shows how many on each row to render
    const defaultOrganismData = {
        "tertiary_consumers": {
            "visible" : 1,
            "names" : [
                "tiger"
            ]
        },
        "secondary_consumers" : {
            "visible" : 2,
            "names" : [
                "snake",
                "husky"
            ]
        },
        "primary_consumers" : {
            "visible" : 3,
            "names" : [
                "elk",
                "rabbit",
                "mouse"
            ]
        },
        "producers" : {
            "visible" : 4,
            "names" : [
                "grass",
                "tree",
                "bush",
                "flower",
                "blank"
            ]
        },
    };
    // "shift" the row left or right by moving an element on the end to the other end
    function executeShift(oldOrgData, details) {  
        // kind of hacky, but we need to deep-copy the organism data
        let orgData = JSON.parse(JSON.stringify(oldOrgData));
        if(details.direction === 'right') {
            orgData[details.category].names.unshift(orgData[details.category].names.pop());
        } else if(details.direction === 'left') {
            orgData[details.category].names.push(orgData[details.category].names.shift());
        }
        return orgData;
    }
    // since we're modifying a given value, reducer is appropriate to use here
    const [organismData, shiftRow] = useReducer(executeShift, defaultOrganismData);

    return html`
        <div class="flex flex-col text-center items-center overflow-y-hidden overflow-x-hidden pyramid">
            ${Object.keys(organismData).map( (category) => {
                return html`
                    <div class="pyramid-level flex flex-row w-full justify-center">
                        <div class="select-arrow arrow-left shrink-0" onClick=${() => shiftRow({'direction':'left', 'category':category})}>
                            <img class="inner-arrow-left" src="/static/svg/left.svg"/>
                        </div>
                        <!-- get the first "visible" organisms and render those -->
                        ${organismData[category].names.slice(0,organismData[category].visible).map( 
                            (organism) => {
                                return html`<${EcoPyramidOrganism} name=${organism} onClick=${() => selectedOrganism(organism)}/>`;
                            }
                        )}
                        <div class="select-arrow arrow-right shrink-0" onClick=${() => shiftRow({'direction':'right', 'category':category})}>
                            <img class="inner-arrow-right" src="/static/svg/right.svg"/>
                        </div>
                    </div>
                `;
            })}
        </div>
    `;
}