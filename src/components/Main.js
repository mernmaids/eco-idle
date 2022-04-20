import { Menu } from './menu/Menu';
import { ContentView } from './ContentView';

export default function Main({routes, saveData, userOrganisms, organisms, shroomShopItems, enviroShopItems}) {
    return (
        <div className="h-screen main">
                <Menu options={routes}/>
                <ContentView saveData={saveData} userOrganisms={userOrganisms} organisms={organisms} shroomShopItems={shroomShopItems} enviroShopItems={enviroShopItems}  />
        </div>
    );

}