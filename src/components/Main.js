import { Menu } from './menu/Menu';
import { ContentView } from './ContentView';

export default function Main({routes, saveData, organisms, shroomShopItems, enviroShopItems}) {
    return (
        <div className="h-screen main">
                <Menu options={routes}/>
                <ContentView saveData={saveData} organisms={organisms} shroomShopItems={shroomShopItems} enviroShopItems={enviroShopItems}  />
        </div>
    );

}