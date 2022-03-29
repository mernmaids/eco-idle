import { OrganismPointSVG } from "./OrganismPointSVG.js";
import '../../css/organism_icon.css';

export function PointDisplay({savedata}) {
    // to be used later
    // const unitAbbreviations = {
    //     "million" : "m",
    //     "billion" : "b",
    //     "thousand": "k"
    // };
    console.log(savedata);
    console.log(savedata.get('organismPoints'));
    return (
    <div className="w-full text-center text-5xl p-5 h-1/6">
        <div className="p-5 organism-point-meter" title="Organism Points">
            {/*  we use the raw SVG XML here so we can animate it */}
            <OrganismPointSVG/>
            <div className="organism-point-readout">
                {savedata.get("organismPoints")}
                {/* {savedata.get("organismPoints") ? savedata.get("organismPoints") : ""} {savedata.get("organismPoints") ? unitAbbreviations[savedata.get("unit")] : ""} */}
            </div>
        </div>
    </div>
    );
}