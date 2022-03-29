
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
import { checkCurrentUser } from './services/AuthService';
import * as Env from './services/Environments';
import Parse from 'parse';

// App Components
import { LoadingScreen } from './components/ui/LoadingScreen';
import Main from './components/Main';
import { Redirect, Switch, Route } from 'react-router-dom';
import Landing from './components/auth/Landing';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
    const [saveData, setSaveData] = useState();
    const [organisms, setOrganisms] = useState();
    const [shroomShopItems, setShroomShopItems] = useState();
    const [enviroShopItems, setEnviroShopItems] = useState();

    const routes = [
        ["/play/sector", "Sector"],
        ["/play/shrooms", "Shroom Shop"],
        ["/play/prestige", "Prestige"],
        ["/play/enviro", "Enviro Shop"],
        ["/play/settings", "Settings"]
    ];

    // only gets save data at first render
    useEffect(() => {
        getSaveDataById("nypWfKd5jq").then((d) => {
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
            <BrowserRouter>
                <Switch>
                    {
                        checkCurrentUser() ? (
                            /* Redirect to logged-in view if user logged in*/
                            <>
                            <Route path="/play">
                                <Main 
                                    routes={routes} 
                                    saveData={saveData} 
                                    organisms={organisms} 
                                    shroomShopItems={shroomShopItems} 
                                    enviroShopItems={enviroShopItems}  
                                />
                            </Route>
                            <Route path="/">
                                <Redirect to="/play/sector"/>
                            </Route>
                            <Route path="/login">
                                <Redirect to="/play/sector"/>
                            </Route>
                            </>
                        ) : (
                            /* Redirect to auth view if user logged out */
                            <Landing/>
                        )
                    }
                </Switch>
            </BrowserRouter>
        );
    } else {
        return (
            <LoadingScreen/>
        )
    }
}

export default App;