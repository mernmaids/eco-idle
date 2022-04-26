import { cloneElement } from "react";
import { PurchaseOrganism, PurchaseOrganismUpgrade } from "../../logic/Purchase";
import { calculateOrganismCost, calculateUpgradeCost } from "../../logic/Upgrade";

export function EcoPyramidDetail({organism, userOrganism, updateUserOrganisms, updateSaveData, userOrganismUpgrades, updateUserOrganismUpgrades, upgrades, savedata}) {
    console.log("inside EcoPyramidDetail");
    const points = savedata.get("organismPoints");
    let owned = 0;
    if(userOrganism)
        owned = userOrganism.get("nOwned");
    const resp = (
        <div className="bg-dark-green p-3 pt-5 detail-inner">
            <div className="text-3xl text-center">{organism.get("name")}</div>
            <div className="text-base text-left mt-5 px-5">
                <div className="orgo-description">
                    <p>
                        {organism.get("description")}
                    </p>
                    <br/>
                    <ul className="list-disc px-5">
                        {
                        upgrades.map((upgrade, i) => {
                            let cost = calculateUpgradeCost(upgrade, organism, userOrganismUpgrades);
                            if (userOrganismUpgrades.some((u) => u.get("upgrade").equals(upgrade))) {
                                return <li key={i}>
                                <b>Upgrade {i + 1}: {upgrade.get("name")}</b>
                                <button className="border-solid border-2 bg-disabled border-slate-900 p-1 m-1 rounded">
                                    Purchased!
                                </button>
                            </li>;
                            }
                            else if(points > cost && owned > 0) {
                                return <li key={i}>
                                    <b>Upgrade {i + 1}: {upgrade.get("name")}</b>
                                    <button onClick={(e) => PurchaseOrganismUpgrade(upgrade, updateUserOrganismUpgrades, updateSaveData, cost)} className="border-solid border-2 bg-light-blue-darken-hover border-slate-900 p-1 m-1 rounded">
                                        Purchase: {cost.toLocaleString()} O-Points
                                    </button>
                                </li>;
                            } else {
                                return <li key={i}>
                                    <b>Upgrade {i + 1}: {upgrade.get("name")}</b>
                                    <button className="border-solid border-2 bg-disabled border-slate-900 p-1 m-1 rounded">
                                        Purchase: {cost.toLocaleString()} O-Points
                                    </button>
                                </li>;
                            }
                        }
                        )}
                    </ul>
                </div>
                <br/>
                <div>
                    Number Owned: {userOrganism ? userOrganism.get('nOwned') : 0}
                </div>
                {(function() {
                    let cost = calculateOrganismCost(organism, userOrganism, userOrganismUpgrades);
                    if(points > cost) {
                        return (<button onClick={(e) => PurchaseOrganism(organism, userOrganism, updateUserOrganisms, updateSaveData, cost)} className="border-solid rounded border-slate-900 border-2 bg-light-blue-darken-hover p-2 m-2">
                            Buy One ({cost.toLocaleString()} O-Points)
                        </button>);
                    } else {
                        return (<button className="border-solid rounded border-slate-900 border-2 bg-disabled p-2 m-2">
                            Buy One ({cost.toLocaleString()} O-Points)
                        </button>);
                    }
                })()}
            </div>
        </div>
    );
    return resp;
}