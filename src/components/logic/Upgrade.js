export function calculateOrganismCost(organism, userOrganism, userOrganismUpgrades) {
    let costMultiplier = 1.0;
    userOrganismUpgrades.forEach(upgrade => { // loops through every upgrade lol
        //console.log("upgrade: ", upgrade);
        if (upgrade.get("upgrade").get("effectStat") == "pc" && upgrade.get("upgrade").get("newTarget") && upgrade.get("upgrade").get("newTarget").some((target) => organism.equals(target))){ // may need to change; waits until it can find newTarget, something odd with loading
            costMultiplier *= (100 - parseInt(upgrade.get("upgrade").get("effectValue").slice(1, -1)))/100;
        }
    });

    return userOrganism ? Math.ceil(organism.get("cost")*(organism.get("rate")**userOrganism.get("nOwned"))*costMultiplier) : Math.ceil(organism.get("cost")*costMultiplier); // base cost * rate multiplier * upgrade multiplier
}

export function calculateUpgradeCost(upgrade, organism, userOrganismUpgrades) {
    let costMultiplier = 1.0;
    userOrganismUpgrades.forEach(upgrade => { // loops through every upgrade lol
        //console.log("upgrade: ", upgrade);
        if (upgrade.get("upgrade").get("effectStat") == "uc" && upgrade.get("upgrade").get("newTarget") && upgrade.get("upgrade").get("newTarget").some((target) => organism.equals(target))){ // may need to change; waits until it can find newTarget, something odd with loading
            costMultiplier *= (100 - parseInt(upgrade.get("upgrade").get("effectValue").slice(1, -1)))/100;
        }
    });

    return Math.ceil(upgrade.get("cost")*costMultiplier);    
}

export function calculatePointsPerCycle(organism, userOrganismUpgrades) {
    let pointMultiplier = 1.0;
    userOrganismUpgrades.forEach(upgrade => { // loops through every upgrade lol
        if (upgrade.get("upgrade").get("effectStat") == "ppc" && upgrade.get("upgrade").get("newTarget") && upgrade.get("upgrade").get("newTarget").some((target) => organism.get("organism").equals(target))){ // may need to change; waits until it can find newTarget, something odd with loading
            pointMultiplier += (parseInt(upgrade.get("upgrade").get("effectValue").slice(0, -1)))/100.0;
        }
    });

    return Math.ceil(organism.get("organism").get("points") * organism.get("nOwned") * pointMultiplier);
}