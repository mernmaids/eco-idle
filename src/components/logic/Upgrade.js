export function calculateOrganismCost(organism, userOrganism, userOrganismUpgrades, userItems) {
    let costMultiplier = 1.0;
    userOrganismUpgrades.forEach(upgrade => { // loops through every upgrade lol
        //console.log("upgrade: ", upgrade);
        if (upgrade.get("upgrade").get("effectStat") === "pc" && upgrade.get("upgrade").get("newTarget") && upgrade.get("upgrade").get("newTarget").some((target) => organism.equals(target))){ // may need to change; waits until it can find newTarget, something odd with loading
            costMultiplier *= (100 - parseInt(upgrade.get("upgrade").get("effectValue").slice(1, -1)))/100;
        }
    });

    userItems.forEach(item => { // loops through every upgrade lol
        if (item.get("item").get("effectStat") === "pc"){
            costMultiplier *= (100 - parseInt(item.get("item").get("effectValue").slice(1, -1)))/100.0;
        }
    });

    return userOrganism ? Math.ceil(organism.get("cost")*(organism.get("rate")**userOrganism.get("nOwned"))*costMultiplier) : Math.ceil(organism.get("cost")*costMultiplier); // base cost * rate multiplier * upgrade multiplier
}

export function calculateUpgradeCost(upgrade, organism, userOrganismUpgrades, userItems) {
    let costMultiplier = 1.0;
    userOrganismUpgrades.forEach(upgrade => { // loops through every upgrade lol
        if (upgrade.get("upgrade").get("effectStat") === "uc" && upgrade.get("upgrade").get("newTarget") && upgrade.get("upgrade").get("newTarget").some((target) => organism.equals(target))){ // may need to change; waits until it can find newTarget, something odd with loading
            costMultiplier *= (100 - parseInt(upgrade.get("upgrade").get("effectValue").slice(1, -1)))/100;
        }
    });

    userItems.forEach(item => {
        if (item.get("item").get("effectStat") === "uc"){
            costMultiplier *= (100 - parseInt(item.get("item").get("effectValue").slice(1, -1)))/100.0;
        }
    });

    return Math.ceil(upgrade.get("cost")*costMultiplier);    
}

export function calculatePointsPerCycle(organism, userOrganismUpgrades, userItems, x) {
    let pointMultiplier = 1.0;
    let cccSum = 0; // critical cycle chance
    let ccmSum = 0; // critical cycle multiplier
    userOrganismUpgrades.forEach(upgrade => { // loops through every upgrade lol
        if (upgrade.get("upgrade").get("newTarget") && upgrade.get("upgrade").get("newTarget").some((target) => organism.get("organism").equals(target))){ // may need to change; waits until it can find newTarget, something odd with loading
            if (upgrade.get("upgrade").get("effectStat") === "ppc") {
                pointMultiplier += (parseInt(upgrade.get("upgrade").get("effectValue").slice(0, -1)))/100.0;
            }
            else if (upgrade.get("upgrade").get("effectStat") === "ccc") {
                cccSum += (parseInt(upgrade.get("upgrade").get("effectValue").slice(0, -1)));
            }
            else if (upgrade.get("upgrade").get("effectStat") === "ccm") {
                ccmSum += (parseInt(upgrade.get("upgrade").get("effectValue").slice(0, -1)));
            }
        }
    });

    userItems.forEach(item => {
        if (item.get("item").get("effectStat") === "ppc") {
            pointMultiplier += (parseInt(item.get("item").get("effectValue").slice(0, -1)))/100.0;
        }
        else if (item.get("item").get("effectStat") === "ccc") {
            cccSum += (parseInt(item.get("item").get("item").slice(0, -1)));
        }
        else if (item.get("item").get("effectStat") === "ccm") {
            ccmSum += (parseInt(item.get("item").get("effectValue").slice(0, -1)));
        }
    })



    // console.log("ccc: ", organism.get("organism").get("ccc")*(1000 + cccSum)/1000);
    // console.log("ccm: ", Math.ceil(organism.get("organism").get("ccm")*(100 + ccmSum)/100));
    // console.log("x: ", x);
    if (x < organism.get("organism").get("ccc")*(1000 + cccSum)/1000){
        console.log("Critical cycle!");
        return Math.ceil(organism.get("organism").get("points") * organism.get("nOwned") * pointMultiplier) * Math.ceil(organism.get("organism").get("ccm")*(100 + ccmSum)/100);

    } else {
        return Math.ceil(organism.get("organism").get("points") * organism.get("nOwned") * pointMultiplier);
    }
}

export function calculateDelay(organism, userOrganismUpgrades, userItems) {
    let delayMultiplier = 1.0;
    userOrganismUpgrades.forEach(upgrade => {
        if (upgrade.get("upgrade").get("effectStat") === "cil" && upgrade.get("upgrade").get("newTarget") && upgrade.get("upgrade").get("newTarget").some((target) => organism.get("organism").equals(target))){ // may need to change; waits until it can find newTarget, something odd with loading
            delayMultiplier *= (100 - parseInt(upgrade.get("upgrade").get("effectValue").slice(1, -1)))/100.0;
        }
    });
    userItems.forEach(item => {
        if (item.get("item").get("effectStat") === "cil"){
            delayMultiplier *= (100 - parseInt(item.get("item").get("effectValue").slice(1, -1)))/100.0;
        }
    });

    return organism.get("organism").get("delay") * 1000 * delayMultiplier;

}