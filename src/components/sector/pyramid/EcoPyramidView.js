import {
  html,
  useReducer,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { EcoPyramidOrganism } from "./EcoPyramidOrganism.js";

export function EcoPyramidView({ organisms, selectedOrganism }) {
    // set up our categories
    const defaultDisplayData = {
        "tertiary_consumer": [],
        "secondary_consumer": [],
        "primary_consumer": [],
        "producer" : [],
    };
    for(let name of Object.keys(organisms)) {
        let organism = organisms[name];
        defaultDisplayData[organism.category].push(organism.name);
    }
    // "shift" the row left or right by moving an element on the end to the other end
    function executeShift(displayData, details) {  
        // kind of hacky, but we need to deep-copy the organism data
        let orgData = JSON.parse(JSON.stringify(displayData));
        if(details.direction === 'right') {
            orgData[details.category].unshift(orgData[details.category].pop());
        } else if(details.direction === 'left') {
            orgData[details.category].push(orgData[details.category].shift());
        }       
        return orgData;
    }
    // since we're modifying a given value, reducer is appropriate to use here
    const [displayData, shiftRow] = useReducer(executeShift, defaultDisplayData);
    // "visible" shows how many on each row to render
    const visible = {
        "producer": 4,
        "primary_consumer": 3,
        "secondary_consumer": 2,
        "tertiary_consumer": 1,
    }

    return html`
        <div class="flex flex-col text-center items-center overflow-y-hidden overflow-x-hidden pyramid">
            ${Object.keys(displayData).map( (category) => {
                return html`
                    <div class="pyramid-level flex flex-row w-full justify-center">
                        <div class="select-arrow arrow-left shrink-0" onClick=${() => shiftRow({'direction':'left', 'category':category})}>
                            <img class="inner-arrow-left" src="/static/svg/left.svg"/>
                        </div>
                        <!-- get the first "visible" organisms and render those -->
                        ${displayData[category].slice(0,visible[category]).map( 
                            (organismName) => {
                                return html`
                                    <${EcoPyramidOrganism} 
                                        name=${organismName} 
                                        onClick=${() => selectedOrganism(organismName)}
                                        delay=${organisms[organismName].delay}
                                    />`;
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