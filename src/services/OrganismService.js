import Parse from "parse";
import { getCurrentUser } from "./AuthService";

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

export const getUserOrganisms = (user) => {
    const Organism = Parse.Object.extend("Organism");
    const query = new Parse.Query(Organism);
    query.equalTo("user", user);
    return query.find().then((results) => {
        return results;
    });

}

export const createUserOrganism = (organismType) => {
    const user = getCurrentUser();
    let newOrganism = new Parse.Object("Organism");
    newOrganism.set('nOwned', 1);
    newOrganism.set('user', user);
    newOrganism.set('organism', organismType);
    //newOrganism.save(); should probably not save automatically
    return newOrganism;
}

// TODO: add more useful functions