import { useEffect, useState } from 'react';

export default function PointCollectionLogic({saveToServer, saveData, updateSaveData, userOrganisms, organisms, shroomShopItems, enviroShopItems}) {

    const [organismIntervals, setOrganismIntervals] = useState({});
    const [autosaveInterval, setAutosaveInterval] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

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
    }, [userOrganisms])

    // sets autosave timer
    // TODO: Make it change based on user options
    // TODO: Make it show quick alert when autosave occurs
    useEffect(() => {
        setAutosaveInterval(setInterval(() => {
            saveToServer();
            setShowAlert(true);
            console.log("showing alert");
            setTimeout(() => {
                setShowAlert(false);
                console.log("stop showing alert");
            }, 3000);
        }, 10 * 1000));

    }, []);

    return (null);
}