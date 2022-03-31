import '../../../css/organism.css';

import { AssetPaths } from '../../../data/data';

export function EcoPyramidOrganism({name, onClick, delay, owned}) {
    if(owned) // enabled view
        return (
            <div className="h-36 w-36 relative icon-container">
                <div className="icon-progress w-32 h-32">
                    <div className="progress-wrapper" style={{'animationDuration' : delay+'s'}}>
                        <div className="progress spinner"></div>
                        <div className="progress filler"></div>
                        <div className="progress-mask"></div>
                    </div>
                </div>
                <div className="h-28 w-28 bg-light-blue-darken-hover shrink-0 icon-outer" onClick={onClick}>
                    <img className="icon" alt={name + " icon"} src={AssetPaths[name]}/>
                </div>
            </div>
        );
    else // disabled view
        return (
            <div className="h-36 w-36 relative icon-container">
                <div className="icon-progress w-32 h-32">
                    <div className="progress-wrapper">
                    </div>
                </div>
                <div className="h-28 w-28 bg-disabled shrink-0 icon-outer" onClick={onClick}>
                    <img className="icon" alt={name + " icon"} src={AssetPaths[name]}/>
                </div>
            </div>
        );
}