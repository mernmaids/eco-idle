export function EcoPyramidOrganism({name, onClick, delay}) {
    return (
        <div className="h-36 w-36 relative icon-container">
            <div className="icon-progress w-32 h-32">
                {/* placeholder for actually adjusting the organism refresh rate animation */}
                <div className="progress-wrapper" style={{'animationDuration' : delay}}>
                    <div className="progress spinner"></div>
                    <div className="progress filler"></div>
                    <div className="progress-mask"></div>
                </div>
            </div>
            <div className="h-28 w-28 bg-light-blue-darken-hover shrink-0 icon-outer" onClick={onClick}>
                <img className="icon" alt={name + " icon"} src={`/svg/${name}.svg`}/>
            </div>
        </div>
    );
}