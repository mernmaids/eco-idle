import { Menu } from './menu/Menu';
import { ContentView } from './ContentView';
import Backend from './logic/Logic';

export default function Main({routes, saveData, updateSaveData, userOrganisms, organisms, shroomShopItems, enviroShopItems}) {
    return (
        <div className="h-screen main">
                {<Backend saveData={saveData} updateSaveData={updateSaveData} userOrganisms={userOrganisms} organisms={organisms} />}
                <Menu options={routes}/>
                <ContentView saveData={saveData} userOrganisms={userOrganisms} organisms={organisms} shroomShopItems={shroomShopItems} enviroShopItems={enviroShopItems}  />
        </div>
    );

}