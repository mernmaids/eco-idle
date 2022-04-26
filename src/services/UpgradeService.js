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

export const getUserOrganismUpgrades = (user) => {
    const Upgrade = Parse.Object.extend("OrganismUpgrade");
    const query = new Parse.Query(Upgrade);
    query.equalTo("user", user);
    query.include("upgrade");
    query.include("upgrade.organism"); // makes sure this is included
    query.include("upgrade.effectTarget");
    return query.find().then((results) => { // creates a temp array of the targets, attaches it to each upgrade
        results.forEach((result) => {
            result.get("upgrade").get("effectTarget").query().find().then((t) => {
                result.set("newTarget", t);
            })
        })
        return results;
    });
}