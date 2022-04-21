export function ShopItem({itemdata, enabled}) {
    return (
        <div className="w-full bg-dark-green p-5 detail-inner">
            <h2 className="text-center text-2xl mb-3">{itemdata.get("name")}</h2>
            <p>{itemdata.get("description")}</p>
            <br/>
            <p><i>{itemdata.get("effectValue")} to {itemdata.get("effectStat")}</i></p>
            <br/>
            <div className="text-center">
                {
                    enabled ?
                        <button className="bg-light-blue-darken-hover p-3 border-2 border-black rounded">Buy ({itemdata.get("cost").toLocaleString()} points)</button>
                    :
                        <button className="bg-disabled p-3 border-2 border-black rounded">Buy ({itemdata.get("cost").toLocaleString()} points)</button>
                }
            </div>
        </div>
    );
}