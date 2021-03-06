
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';
import { Shop } from './shop/Shop.js';
import { Prestige } from './prestige/Prestige.js';

export function ContentView({saveToServer, saveData, updateSaveData, userOrganisms, updateUserOrganisms, userOrganismUpgrades, updateUserOrganismUpgrades, organisms, shroomShopItems, enviroShopItems, userItems, updateUserItems }) {
  // choose which view to render based on the selected option
  return (
    <Switch>
      <Route exact path="/play/sector">
        <Sector savedata={saveData} updateSaveData={updateSaveData} userOrganisms={userOrganisms} updateUserOrganisms={updateUserOrganisms} userOrganismUpgrades={userOrganismUpgrades} updateUserOrganismUpgrades={updateUserOrganismUpgrades} organisms={organisms} userItems={userItems}/>
      </Route>
      <Route exact path="/play/shrooms">
        <Shop shopName="Shroom Shop" shopdata={shroomShopItems} savedata={saveData} updateSaveData={updateSaveData} userItems={userItems} updateUserItems={updateUserItems}/>
      </Route>
      <Route exact path="/play/prestige">
        <Prestige/>
      </Route>
      <Route exact path="/play/enviro">
        <Shop shopName="Enviro Shop" shopdata={enviroShopItems} savedata={saveData} updateSaveData={updateSaveData} userItems={userItems} updateUserItems={updateUserItems}/>
      </Route>
      <Route exact path="/play/settings">
        <SettingsMenu saveToServer={saveToServer}/>
      </Route>
      <Route exact path="/play">
        <Redirect to="/play/sector"/>
      </Route>
    </Switch>
  );
}