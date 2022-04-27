import Parse from "parse";
import { getCurrentUser } from "./AuthService";

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

// get all items purchased by user
export function getUserItems(user) {
    const Item = Parse.Object.extend("ShopPurchase");
    const query = new Parse.Query(Item);
    query.equalTo("user", user);
    query.include("item");
    return query.find().then((results) => {
        return results;
    });
}

// create a new user item
export function createUserItem(item) {
    const user = getCurrentUser();
    let newItem = new Parse.Object("ShopPurchase");
    newItem.set('user', user);
    newItem.set('item', item);
    return newItem;
}