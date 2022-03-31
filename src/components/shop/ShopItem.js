import { PurchaseItem } from "../logic/Purchase.js";

export function ShopItem({itemdata, saveData, updateSaveData, userItems, updateUserItems}) {
    const points = saveData.get('organismPoints');
    const cost = itemdata.get('cost');

    const resp = (
        <div className="w-full bg-dark-green p-5 detail-inner">
            <h2 className="text-center text-2xl mb-3">{itemdata.get("name")}</h2>
            <p>{itemdata.get("description")}</p>
            <br/>
            <p><i>{itemdata.get("effectValue")} to {itemdata.get("effectStat")}</i></p>
            <br/>
            <div className="text-center">
                {(function() {
                    if (userItems.some((i) => i.get("item").equals(itemdata))) { // already purchased
                        return (<button className="bg-disabled p-3 border-2 border-black rounded">Purchased!</button>);
                    } else if (points >= cost) { // can purchase
                        return (<button onClick={(e) => PurchaseItem(itemdata, updateUserItems, updateSaveData, itemdata.get("cost"))} className="bg-light-blue-darken-hover p-3 border-2 border-black rounded">Buy ({itemdata.get("cost").toLocaleString()} points)</button>);
                    } else { // cannot purchase
                        return (<button className="bg-disabled p-3 border-2 border-black rounded">Buy ({itemdata.get("cost").toLocaleString()} points)</button>);
                    }   
                })()}

            </div>
        </div>
    );

    return resp;
}