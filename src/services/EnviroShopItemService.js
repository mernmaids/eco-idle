import Parse from "parse";

// gets all enviroShopItems
export const getAllEnviroShopItems = () => {
    const EnviroShopItem = Parse.Object.extend("EnviroShopItem");
    const query = new Parse.Query(EnviroShopItem);
    return query.find().then((results) => {
        return results;
    });
}