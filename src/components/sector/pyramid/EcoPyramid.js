import { EcoPyramidDetail } from "./EcoPyramidDetail.js";
import { EcoPyramidView } from "./EcoPyramidView.js";
import { getUpgradesByOrganism } from "../../../services/UpgradeService.js";

import { useState, useEffect } from "react";

export function EcoPyramid({ organisms, userOrganisms, updateUserOrganisms, updateSaveData }) {
    const [selectedOrganism, selectOrganism] = useState(organisms[0]);
    const [upgrades, setUpgrades] = useState([]);

    // used at the beginning to show upgrades
    useEffect(() => {
        getUpgradesByOrganism(organisms[0]).then((d) => setUpgrades(d));
    }, []);

    function onSelectOrganism(organism) {
        selectOrganism(organism);
        getUpgradesByOrganism(organism).then((d) => setUpgrades(d));
    }

    return (
        <div>
            <div className="float-left w-full xl:w-2/3 overflow-x-scroll md:overflow-x-hidden">
                <EcoPyramidView organisms={organisms} selectedOrganism={onSelectOrganism} userOrganisms={userOrganisms}/>
            </div>
            <div className="float-left w-full xl:w-1/3 xl:h-5/6 p-5 xl:py-0 ">
                <EcoPyramidDetail 
                    organism={selectedOrganism} 
                    userOrganism={userOrganisms.find(o => o.get("organism").equals(selectedOrganism))}
                    updateUserOrganisms={updateUserOrganisms}
                    updateSaveData={updateSaveData}
                    upgrades={upgrades}
                />
            </div>
        </div>
    );
}