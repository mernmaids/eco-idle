import Parse from "parse";

// gets all shroomShopItems
export const getAllShroomShopItems = () => {
    const ShopItem = Parse.Object.extend("ShopItem");
    const query = new Parse.Query(ShopItem);
    query.equalTo("shop", "shroom");
    return query.find().then((results) => {
        return results;
    });
}

// gets all enviroShopItems
export const getAllEnviroShopItems = () => {
    const ShopItem = Parse.Object.extend("ShopItem");
    const query = new Parse.Query(ShopItem);
    query.equalTo("shop", "enviro");
    return query.find().then((results) => {
        return results;
    });
}