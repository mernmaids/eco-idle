
// Styles
import './css/fonts.css';
import './css/default.css';

// React
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// App Data
import { getSaveDataById } from './services/SaveDataService.js';
import { getAllOrganisms } from './services/OrganismService.js';
import { getAllShroomShopItems, getAllEnviroShopItems } from './services/ShopItemService.js';
import * as Env from './services/Environments';
import Parse from 'parse';

// App Components
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Menu } from './components/menu/Menu';
import { ContentView } from './components/ContentView';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
    const [saveData, setSaveData] = useState();
    const [organisms, setOrganisms] = useState();
    const [shroomShopItems, setShroomShopItems] = useState();
    const [enviroShopItems, setEnviroShopItems] = useState();

    const routes = [
        ["/sector", "Sector"],
        ["/shrooms", "Shroom Shop"],
        ["/prestige", "Prestige"],
        ["/enviro", "Enviro Shop"],
        ["/settings", "Settings"]
    ];

    // only gets save data at first render
    useEffect(() => {
        getSaveDataById("2RyzVpHdxr").then((d) => {
            setSaveData(d);
        });
        getAllOrganisms().then((d) => {
            setOrganisms(d);
        });
        getAllShroomShopItems().then((d) => {
            setShroomShopItems(d);
        });
        getAllEnviroShopItems().then((d) => {
            setEnviroShopItems(d);
        });
    }, []);

    if(saveData && organisms && shroomShopItems && enviroShopItems) {
        return (
            <div className="h-screen main">
                <BrowserRouter>
                    <Menu options={routes}/>
                    <ContentView saveData={saveData} organisms={organisms} shroomShopItems={shroomShopItems} enviroShopItems={enviroShopItems}  />
                </BrowserRouter>
            </div>
        );
    } else {
        return (
            <LoadingScreen/>
        )
    }
}

export default App;