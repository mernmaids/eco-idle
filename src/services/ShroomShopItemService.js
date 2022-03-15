import Parse from "parse";

// gets all shroomShopItems
export const getAllShroomShopItems = () => {
    const ShroomShopItem = Parse.Object.extend("ShroomShopItem");
    const query = new Parse.Query(ShroomShopItem);
    return query.find().then((results) => {
        return results;
    });
}