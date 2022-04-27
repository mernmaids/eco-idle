import { Menu } from './menu/Menu';
import { ContentView } from './ContentView';
import PointCollectionLogic from './logic/Logic';

export default function Main({routes, saveData, updateSaveData, updateUserOrganisms, updateUserOrganismUpgrades, saveToServer, userOrganisms, organisms, userOrganismUpgrades, shroomShopItems, enviroShopItems, userItems, updateUserItems}) {
    return (
        <div className="h-screen main">
                {<PointCollectionLogic saveToServer={saveToServer} saveData={saveData} updateSaveData={updateSaveData} userOrganisms={userOrganisms} userOrganismUpgrades={userOrganismUpgrades} organisms={organisms} userItems={userItems}/>}
                <Menu options={routes}/>
                <ContentView saveData={saveData} updateSaveData={updateSaveData} userOrganisms={userOrganisms} updateUserOrganisms={updateUserOrganisms} userOrganismUpgrades={userOrganismUpgrades} updateUserOrganismUpgrades={updateUserOrganismUpgrades} organisms={organisms} shroomShopItems={shroomShopItems} enviroShopItems={enviroShopItems} userItems={userItems} updateUserItems={updateUserItems} />
        </div>
    );

}