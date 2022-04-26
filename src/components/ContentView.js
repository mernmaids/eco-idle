
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';
import { Shop } from './shop/Shop.js';
import { Prestige } from './prestige/Prestige.js';

export function ContentView({ saveData, updateSaveData, userOrganisms, updateUserOrganisms, userOrganismUpgrades, updateUserOrganismUpgrades, organisms, shroomShopItems, enviroShopItems }) {
  // choose which view to render based on the selected option
  return (
    <Switch>
      <Route exact path="/play/sector">
        <Sector savedata={saveData} updateSaveData={updateSaveData} userOrganisms={userOrganisms} updateUserOrganisms={updateUserOrganisms} userOrganismUpgrades={userOrganismUpgrades} updateUserOrganismUpgrades={updateUserOrganismUpgrades} organisms={organisms}/>
      </Route>
      <Route exact path="/play/shrooms">
        <Shop shopName="Shroom Shop" shopdata={shroomShopItems} savedata={saveData} />
      </Route>
      <Route exact path="/play/prestige">
        <Prestige/>
      </Route>
      <Route exact path="/play/enviro">
        <Shop shopName="Enviro Shop" shopdata={enviroShopItems} savedata={saveData} />
      </Route>
      <Route exact path="/play/settings">
        <SettingsMenu/>
      </Route>
      <Route exact path="/play">
        <Redirect to="/play/sector"/>
      </Route>
    </Switch>
  );
}