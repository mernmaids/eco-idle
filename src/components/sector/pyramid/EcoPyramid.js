import { EcoPyramidDetail } from "./EcoPyramidDetail.js";
import { EcoPyramidView } from "./EcoPyramidView.js";

import { useState } from "react";

export function EcoPyramid({ organisms }) {
    const [selectedOrganism, selectOrganism] = useState('tiger');

    function onSelectOrganism(organismName) {
        selectOrganism(organismName);
    }

    return (
        <div>
            <div className="float-left w-full xl:w-2/3 overflow-x-scroll md:overflow-x-hidden">
                <EcoPyramidView organisms={organisms} selectedOrganism={onSelectOrganism}/>
            </div>
            <div className="float-left w-full xl:w-1/3 xl:h-5/6 p-5 xl:py-0 ">
                <EcoPyramidDetail name={selectedOrganism}/>
            </div>
        </div>
    );
}