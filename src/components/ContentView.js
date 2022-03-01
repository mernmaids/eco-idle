
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';
import { Shop } from './shop/Shop.js';
import { Prestige } from './prestige/Prestige.js';

export function ContentView({ data }) {
  // choose which view to render based on the selected option
  return (
    <Switch>
      <Route exact path="/sector">
        <Sector savedata={data.saveData}/>
      </Route>
      <Route exact path="/shrooms">
        <Shop shopdata={data.saveData.shroomShopData}/>
      </Route>
      <Route exact path="/prestige">
        <Prestige/>
      </Route>
      <Route exact path="/enviro">
        <Shop shopdata={data.saveData.enviroShopData}/>
      </Route>
      <Route exact path="/settings">
        <SettingsMenu/>
      </Route>
      <Route exact path="/">
        <Redirect to="/sector"/>
      </Route>
    </Switch>
  );
}