export function EcoPyramidDetail({organism, userOrganism, upgrades}) {
    const resp = (
        <div className="bg-dark-green p-3 pt-5 detail-inner">
            <div className="text-3xl text-center">{organism.get("name")}</div>
            <div className="text-base text-left mt-5 px-5">
                <div className="orgo-description">
                    <p>
                        {organism.get("description")}
                    </p>
                    <br/>
                    <ul className="list-disc px-5">
                        {upgrades.map((upgrade, i) => <li key={i}>Upgrade {i + 1}: {upgrade.get("name")}; <button className="border-solid border-2 bg-light-blue-darken-hover">Purchase: {upgrade.get("cost")}</button></li>)}
                    </ul>
                </div>
                <br/>
                <div>
                    Number Owned: {userOrganism ? userOrganism.get('nOwned') : 0}
                </div>
                <form className="text-center" action="#">
                    <button className="border-solid rounded border-slate-900 border-2 bg-light-blue-darken-hover p-2 m-2">
                        Buy One ({organism.get("cost")} O-Points)
                    </button>
                </form>
            </div>
        </div>
    );
    return resp;
}