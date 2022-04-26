import { useEffect, useState } from 'react';

export default function PointCollectionLogic({saveToServer, saveData, updateSaveData, userOrganisms, userOrganismUpgrades, organisms, shroomShopItems, enviroShopItems}) {

    const [organismIntervals, setOrganismIntervals] = useState({});
    const [autosaveInterval, setAutosaveInterval] = useState([]);

    //console.log("inside logic: ", userOrganisms);

    // add timer for organisms and newly purchased organism
    useEffect(() => {
        const keys = Object.keys(organismIntervals);
        userOrganisms.forEach(organism => {
            if (!keys.includes(organism.get("organism").get("name"))) {
                organismIntervals[organism.get("organism").get("name")] = setInterval(() => {
                    updateSaveData("organismPoints", organism.get("organism").get("points") * organism.get("nOwned"));
                }, organism.get("organism").get("delay") * 1000);
                setOrganismIntervals(organismIntervals);
            }
        })
    }, [userOrganisms]);

    // sets autosave timer
    // TODO: Make it change based on user options
    // TODO: Make it show quick alert when autosave occurs
    useEffect(() => {
        //console.log("in autosave setup: ", userOrganisms);
        setAutosaveInterval(setInterval(() => {
            //console.log("about to autosave: ", userOrganisms);
            saveToServer();
        }, 10 * 1000));
        return clearInterval(autosaveInterval);
    }, [userOrganisms, userOrganismUpgrades]);

    return (null);
}