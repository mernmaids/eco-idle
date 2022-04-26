import { createUserOrganism } from "../../services/OrganismService";
import {createUserOrganismUpgrade } from "../../services/UpgradeService";

export function PurchaseOrganism(organism, userOrganism, updateUserOrganisms, updateSaveData, cost) {
    if(userOrganism) { // just add one to the organism
        userOrganism.increment('nOwned', 1); // how does this force a rerender? Is it the button? I do not understand
        //userOrganism.save(); Should probably not save automatically
    } else { // create a new user organism
        updateUserOrganisms(createUserOrganism(organism));
    }

    updateSaveData("organismPoints", -cost);
};

export function PurchaseOrganismUpgrade(upgrade, updateUserOrganismUpgrades, updateSaveData, cost) {
    updateUserOrganismUpgrades(createUserOrganismUpgrade(upgrade));
    updateSaveData("organismPoints", -cost);
}