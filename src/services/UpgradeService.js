import Parse from "parse";

export const getUpgradesByOrganism = (organism) => {
    const Upgrade = Parse.Object.extend("OrganismUpgradeType");
    const query = new Parse.Query(Upgrade);
    query.equalTo("organism", organism).ascending("cost");
    return query.find().then((results) => {
        return results;
    });
}