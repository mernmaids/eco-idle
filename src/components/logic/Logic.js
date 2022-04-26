import { useEffect, useState } from 'react';
import { calculatePointsPerCycle } from "./Upgrade";

export default function PointCollectionLogic({saveToServer, saveData, updateSaveData, userOrganisms, userOrganismUpgrades, organisms, shroomShopItems, enviroShopItems}) {

    const [organismIntervals, setOrganismIntervals] = useState({});

    //console.log("inside logic: ", userOrganisms);

    // add timer for organisms and newly purchased organism
    useEffect(() => {
        const keys = Object.keys(organismIntervals);
        userOrganisms.forEach(organism => {
            if (keys.includes(organism.get("organism").get("name"))) {
                clearInterval(organismIntervals[organism.get("organism").get("name")]);
            }

            organismIntervals[organism.get("organism").get("name")] = setInterval(() => {
                updateSaveData("organismPoints", calculatePointsPerCycle(organism, userOrganismUpgrades));
            }, organism.get("organism").get("delay") * 1000); // VERY NOT GOOD! RESETS ALL INTERVALS EVERYTIME AND IDK HOW TO FIX IT
            // IMMA JUST CALL THIS A LIMITATION OF BUILDING A GAME IN REACT

        });
        setOrganismIntervals(organismIntervals);
    }, [userOrganisms, userOrganismUpgrades]);

    // sets autosave timer
    // TODO: Make it change based on user options
    // TODO: Make it show quick alert when autosave occurs
    useEffect(() => {
        //console.log("in autosave setup: ", userOrganisms);
        const interval = setInterval(() => {
            //console.log("about to autosave: ", userOrganisms);
            saveToServer();
        }, 10 * 1000);
        return () => {
            clearInterval(interval);
            console.log("just cleared interval");
        };
    }, [userOrganisms, userOrganismUpgrades]);

    return (null);
}