import { createUserOrganism } from "../../services/OrganismService";
import {createUserOrganismUpgrade } from "../../services/UpgradeService";
import { createUserItem } from "../../services/ShopItemService";

export function PurchaseOrganism(organism, userOrganism, updateUserOrganisms, updateSaveData, cost) {
    if(userOrganism) { // just add one to the organism
        userOrganism.increment('nOwned', 1);
    } else { // create a new user organism
        updateUserOrganisms(createUserOrganism(organism));
    }

    updateSaveData("organismPoints", -cost);
};

export async function PurchaseOrganismUpgrade(upgrade, updateUserOrganismUpgrades, updateSaveData, cost) {
    let x = await createUserOrganismUpgrade(upgrade);
    updateUserOrganismUpgrades(x);
    updateSaveData("organismPoints", -cost);
}

export function PurchaseItem(item, updateUserItems, updateSaveData, cost) {
    let x = createUserItem(item);
    updateUserItems(x);
    updateSaveData("organismPoints", -cost);
}