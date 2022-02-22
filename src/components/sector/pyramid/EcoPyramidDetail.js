export function EcoPyramidDetail({name}) {
    const resp = (
        <div className="bg-dark-green p-3 pt-5 detail-inner">
            <div className="text-3xl text-center">{name}</div>
            <div className="text-base text-left mt-5 px-5">
                <div className="orgo-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <br/>
                    <ul className="list-disc px-5">
                        <li>Detail One</li>
                        <li>Detail Two</li>
                        <li>Detail Three</li>
                        <li>Detail Four</li>
                    </ul>
                </div>
                <br/>
                <form className="text-center" action="#">
                    <button className="border-solid rounded border-slate-900 border-2 bg-light-blue-darken-hover p-2 m-2">
                        Increase Max Population Cap
                    </button>
                    <button className="border-solid rounded border-slate-900 border-2 bg-light-blue-darken-hover p-2 m-2">
                        Upgrade (20.1k O-Points)
                    </button>
                </form>
            </div>
        </div>
    );
    return resp;
}