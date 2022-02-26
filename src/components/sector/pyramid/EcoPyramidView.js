import { useReducer } from "react";

import { EcoPyramidOrganism } from "./EcoPyramidOrganism.js";

export function EcoPyramidView({ organisms, selectedOrganism }) {
    // since we're modifying a given value, reducer is appropriate to use here
    // set up our categories
    const defaultDisplayData = {
        "tertiary_consumer": [],
        "secondary_consumer": [],
        "primary_consumer": [],
        "producer" : [],
    };
    const [displayData, shiftRow] = useReducer(executeShift, defaultDisplayData);

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
    // "visible" shows how many on each row to render
    const visible = {
        "producer": 4,
        "primary_consumer": 3,
        "secondary_consumer": 2,
        "tertiary_consumer": 1,
    }

    return (
        <div className="flex flex-col text-center items-center overflow-y-hidden overflow-x-hidden pyramid">
            {Object.keys(displayData).map( (category) => {
                return (
                    <div className="pyramid-level flex flex-row w-full justify-center">
                        <div key="left" className="select-arrow arrow-left shrink-0" onClick={() => shiftRow({'direction':'left', 'category':category})}>
                            <img alt="arrow to scroll visible organisms left" className="inner-arrow-left" src="/svg/left.svg"/>
                        </div>
                        {/* get the first "visible" organisms and render those */}
                        {displayData[category].slice(0,visible[category]).map( 
                            (organismName) => {
                                const org = organisms.find(o => o.name === organismName);
                                return (
                                    <EcoPyramidOrganism 
                                        key={org.name}
                                        name={org.name} 
                                        onClick={() => selectedOrganism(org.name)}
                                        delay={org.delay}
                                    />);
                            }
                        )}
                        <div key="right" className="select-arrow arrow-right shrink-0" onClick={() => shiftRow({'direction':'right', 'category':category})}>
                            <img alt="arrow to scroll visible organisms right" className="inner-arrow-right" src="/svg/right.svg"/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}