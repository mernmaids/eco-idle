import Parse from "parse";

// gets all organisms
export const getAllOrganisms = () => {
    const Organism = Parse.Object.extend("OrganismType");
    const query = new Parse.Query(Organism);
    return query.find().then((results) => {
        return results;
    });
}

export const getOrganismsByBiome = (biome) => {
    const Organism = Parse.Object.extend("OrganismType");
    const query = new Parse.Query(Organism);
    query.equalTo("biome", biome);
    return query.find().then((results) => {
        return results;
    });

}

// TODO: add more useful functions