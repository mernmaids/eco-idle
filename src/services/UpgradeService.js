import Parse from "parse";
import { getCurrentUser } from "./AuthService";

export const getUpgradesByOrganism = (organism) => {
    const Upgrade = Parse.Object.extend("OrganismUpgradeType");
    const query = new Parse.Query(Upgrade);
    query.equalTo("organism", organism).ascending("cost");
    return query.find().then((results) => {
        return results;
    });
}

export function getUserOrganismUpgrades(user) {
    const Upgrade = Parse.Object.extend("OrganismUpgrade");
    const query = new Parse.Query(Upgrade);
    query.equalTo("user", user);
    query.include("upgrade");
    query.include("upgrade.organism"); // makes sure this is included
    query.include("upgrade.effectTarget");
    return query.find().then((results) => { // creates a temp array of the targets, attaches it to each upgrade
         results.forEach(async (result) => {
            let x = await result.get("upgrade").get("effectTarget").query().find();
                result.get("upgrade").set("newTarget", x);
            });
            return results;
    }).then((r) => {
        console.log(r);
        return r;
    });
}

export function createUserOrganismUpgrade(upgrade) {
    const user = getCurrentUser();
    let newUpgrade = new Parse.Object("OrganismUpgrade");
    newUpgrade.set('user', user);
    newUpgrade.set('upgrade', upgrade);
    return upgrade.get("effectTarget").query().find().then((t) => {
        upgrade.set("newTarget", t);
        return newUpgrade;
    });
}