import { useEffect, useState } from 'react';

export default function PointCollectionLogic({saveData, updateSaveData, userOrganisms, organisms, shroomShopItems, enviroShopItems}) {
    // setup and use intervals to add to score
    // setup at beginning of login
    const [organismIntervals, setOrganismIntervals] = useState({});
    useEffect(() => {
        userOrganisms.map((organism) => organismIntervals[organism.get("organism").get("name")] = setInterval(() => {
            updateSaveData("organismPoints", saveData.get("organismPoints") + organism.get("organism").get("points") * organism.get("nOwned"));
        }, organism.get("organism").get("delay") * 1000));
        setOrganismIntervals(organismIntervals);
    }, []);

    return (null);
}