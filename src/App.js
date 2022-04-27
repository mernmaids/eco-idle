
// Styles
import './css/fonts.css';
import './css/default.css';

// React
import { useEffect, useState, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';

// App Data
import { getAllOrganisms, getUserOrganisms } from './services/OrganismService.js';
import { getAllShroomShopItems, getAllEnviroShopItems, getUserItems } from './services/ShopItemService.js';
import { checkCurrentUser, getCurrentUser } from './services/AuthService.js';
import { getUserOrganismUpgrades } from './services/UpgradeService.js';
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
    const [userOrganisms, setUserOrganisms] = useState();
    const [userOrganismUpgrades, setUserOrganismUpgrades] = useState();
    const [userItems, setUserItems] = useState();

    const routes = [
        ["/play/sector", "Sector"],
        ["/play/shrooms", "Shroom Shop"],
        ["/play/prestige", "Prestige"],
        ["/play/enviro", "Enviro Shop"],
        ["/play/settings", "Settings"]
    ];

    // used to force rerender
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    // only gets save data at first render
    useEffect(() => {
        if (checkCurrentUser()) {
            setSaveData(getCurrentUser());
            getUserOrganisms(getCurrentUser()).then((d) => {
                setUserOrganisms(d);
            });
            getUserOrganismUpgrades(getCurrentUser()).then((d) => {
                setUserOrganismUpgrades(d);
            })
            getUserItems(getCurrentUser()).then((d) => {
                setUserItems(d);
            })
            
        }
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

    // Update functions
    function updateSaveData(key, value) {
        saveData.increment(key, value);
        //setSaveData(saveData);
        forceUpdate();
        //console.log("save data being updated: ", saveData);
    }

    let updateUserOrganisms = (newOrganism) => {
        setUserOrganisms([...userOrganisms, newOrganism]); 
    }

    let updateUserOrganismUpgrades = (newUpgrade) => {
        setUserOrganismUpgrades([...userOrganismUpgrades, newUpgrade]);
        // console.log('right after update: ', userOrganismUpgrades);
    }

    let updateUserItems = (newItem) => {
        setUserItems([...userItems, newItem]);
    }


    let saveToServer = () => {
        //console.log('right before saving to server: ', userOrganisms);
        //console.log("save data being saved: ", saveData);
        saveData.save();
        userOrganisms.map((organism) => organism.save()); // Could make more efficient by checking if each organism is dirty
        userOrganismUpgrades.map((upgrade) => upgrade.save(null, {cascadeSave: false}));
        console.log("just autosaved");
    }


    return (
        <BrowserRouter>
            <Switch>
                {
                    checkCurrentUser() ? (
                        /* Redirect to logged-in view if user logged in*/
                        (saveData && organisms && shroomShopItems && enviroShopItems && userOrganisms && userOrganismUpgrades && userItems) ? (
                            <>
                            <Route path="/play">
                                <Main 
                                    routes={routes} 
                                    saveData={saveData}
                                    updateSaveData={updateSaveData}
                                    updateUserOrganisms={updateUserOrganisms}
                                    updateUserOrganismUpgrades={updateUserOrganismUpgrades}
                                    saveToServer={saveToServer}
                                    userOrganisms={userOrganisms} 
                                    organisms={organisms}
                                    userOrganismUpgrades={userOrganismUpgrades}
                                    shroomShopItems={shroomShopItems} 
                                    enviroShopItems={enviroShopItems}
                                    userItems={userItems}
                                    updateUserItems={updateUserItems}  
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
                            <LoadingScreen/>
                            )
                        
                    ) : (
                        /* Redirect to auth view if user logged out */
                        <Landing/>
                    )
                }
            </Switch>
        </BrowserRouter>
    );
}

export default App;