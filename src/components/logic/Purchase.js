
import { createUserOrganism } from "../../services/OrganismService";

export default function PurchaseOrganism(organism, userOrganism, cost) {
    if(userOrganism) { // just add one to the organism
        userOrganism.increment('nOwned', 1);
        userOrganism.save();
    } else { // create a new user organism
        createUserOrganism(userOrganism, organism); // FIXME
    }
};