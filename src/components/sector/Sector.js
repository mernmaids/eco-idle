import { EcoPyramid } from './pyramid/EcoPyramid.js';
import { PointDisplay } from './PointDisplay.js';

export function Sector({ savedata, updateSaveData, userOrganisms, updateUserOrganisms, organisms }) {
    return (
        <div className="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green sector-view">
            {/* graphic for displaying number of organism points */}
            <PointDisplay savedata={savedata}/>
            {/* pyramid for selecting organism detail */}
            <EcoPyramid organisms={organisms} userOrganisms={userOrganisms} updateUserOrganisms={updateUserOrganisms} updateSaveData={updateSaveData}/>
        </div>
    );
}