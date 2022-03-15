import Parse from "parse";

// gets current save data using ID field
export const getSaveDataById = (id) => {
    const SaveData = Parse.Object.extend("SaveData");
    const query = new Parse.Query(SaveData);
    return query.get(id).then((result) => {
        return result;
    });
}