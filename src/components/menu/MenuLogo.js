export function MenuLogo() {
    // do a little trickery here to replace the "o" in "eco idle" 
    // with an SVG leaf symbol
    return (
        <div className="text-5xl py-3 menu-logo">
            <svg className="menu-logo-o" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512"  xmlSpace="preserve" stroke="">
                <path d="M256,0C114.616,0,0,114.616,0,256s114.616,256,256,256s256-114.616,256-256S397.384,0,256,0z M298.592,395.61
                    l-20.004,20.006V310.427h-45.177v105.189l-20.004-20.004c-70.627-70.627-70.627-184.928,0-255.557L256,97.462l42.592,42.592
                    C369.22,210.682,369.22,324.984,298.592,395.61z"/> </svg>
            <h1 className="menu-logo-text">
                ec<span className="invis-text">o</span> idle
            </h1>
        </div>
    );
}