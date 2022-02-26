import Parse from "parse";
// gets data from data file
// right now it just puts it into json form to be compatible with rest of code
// however, we will change it to be used more efficiently
export async function getData() {
  let data = {};
  const menuOptions = Parse.Object.extend("menuOptions");
  const query1 = new Parse.Query(menuOptions);
  try {
  let tempOptions = await query1.find();

  data['menuOptions'] = tempOptions.map((query) => query.get("option"));

  } catch(e) {
    console.error(e);
  }

  data['saveData'] = {};
  const saveData = Parse.Object.extend("saveData");
  const query2 = new Parse.Query(saveData);
  let tempSaveData = await query2.get("REcY8a2lEt");
  data['saveData']['organismPoints'] = {};
  data['saveData']['organismPoints']['magnitude'] = tempSaveData.get('organismPoints');
  data['saveData']['organismPoints']['unit'] = tempSaveData.get('unit');

  data['saveData']['enviroPoints'] = tempSaveData.get('enviroPoints');
  data['saveData']['solarCapacity'] = tempSaveData.get('solarCapacity');

  data['saveData']['enviroShopData'] = {};
  data['saveData']['enviroShopData']['name'] = "Environmental Shop";
  const enviroShopItems = Parse.Object.extend("enviroShopItems");
  const query3 = new Parse.Query(enviroShopItems);
  let tempEnviroData = await query3.find();
  data['saveData']['enviroShopData']['items'] = tempEnviroData.map(query => query['attributes']);

  data['saveData']['shroomShopData'] = {};
  data['saveData']['shroomShopData']['name'] = "Shroom Shop";
  const shroomShopData = Parse.Object.extend("shroomShopData");
  const query4 = new Parse.Query(shroomShopData);
  let tempShroomData = await query4.find();
  data['saveData']['shroomShopData']['items'] = tempShroomData.map(query => query['attributes']);

  data['saveData']['organisms'] = {};
  const organisms = Parse.Object.extend("organisms");
  const query5 = new Parse.Query(organisms);
  query5.equalTo("biome", "grassland");
  let tempOrganismData = await query5.find();
  data['saveData']['organisms']['grassland'] = tempOrganismData.map(query => query['attributes']);

  console.log(data);
  return data;










}