
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';
import { Shop } from './shop/Shop.js';
import { Prestige } from './prestige/Prestige.js';

export function ContentView({ saveData, userOrganisms, organisms, shroomShopItems, enviroShopItems }) {
  // choose which view to render based on the selected option
  return (
    <Switch>
      <Route exact path="/play/sector">
        <Sector savedata={saveData} userOrganisms={userOrganisms} organisms={organisms}/>
      </Route>
      <Route exact path="/play/shrooms">
        <Shop shopName="Shroom Shop" shopdata={shroomShopItems}/>
      </Route>
      <Route exact path="/play/prestige">
        <Prestige/>
      </Route>
      <Route exact path="/play/enviro">
        <Shop shopName="Enviro Shop" shopdata={enviroShopItems}/>
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