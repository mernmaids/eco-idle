import { EcoPyramid } from './pyramid/EcoPyramid.js';
import { PointDisplay } from './PointDisplay.js';

export function Sector({ savedata }) {
    return (
        <div class="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green sector-view">
            <!-- graphic for displaying number of organism points -->
            <PointDisplay orgopoints={savedata.organismPoints}/>
            <!-- pyramid for selecting organism detail -->
            <EcoPyramid organisms={savedata.organisms[savedata.currentBiome]}/>
        </div>
    );
}