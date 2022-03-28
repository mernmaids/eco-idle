
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Sector } from './sector/Sector.js';
import { SettingsMenu } from './settings/SettingsMenu.js';
import { Shop } from './shop/Shop.js';
import { Prestige } from './prestige/Prestige.js';
import Login from './auth/Login.js';
import Register from './auth/Register.js';

export function ContentView({ saveData, organisms, shroomShopItems, enviroShopItems }) {
  // choose which view to render based on the selected option
  return (
    <Switch>
      <Route exact path="/sector">
        <Sector savedata={saveData} organisms={organisms}/>
      </Route>
      <Route exact path="/shrooms">
        <Shop shopName="Shroom Shop" shopdata={shroomShopItems}/>
      </Route>
      <Route exact path="/prestige">
        <Prestige/>
      </Route>
      <Route exact path="/enviro">
        <Shop shopName="Enviro Shop" shopdata={enviroShopItems}/>
      </Route>
      <Route exact path="/settings">
        <SettingsMenu/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
      <Route exact path="/">
        <Redirect to="/sector"/>
      </Route>
    </Switch>
  );
}