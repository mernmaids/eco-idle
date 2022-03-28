import Parse from "parse";

// gets current save data using ID field
// TODO: Phase out, use current user info
export const getSaveDataById = (id) => {
    const SaveData = Parse.Object.extend("User");
    const query = new Parse.Query(SaveData);
    return query.get(id).then((result) => {
        return result;
    });
}