import Parse from "parse";

// gets all organisms
export const getAllOrganisms = () => {
    const Organism = Parse.Object.extend("Organism");
    const query = new Parse.Query(Organism);
    return query.find().then((results) => {
        return results;
    });
}

// TODO: add function to get organisms with specific biome