export function ShopItem({itemdata}) {
    return (
        <div className="w-full bg-dark-green p-5 detail-inner">
            <h2 className="text-center text-2xl mb-3">{itemdata.name}</h2>
            <p>{itemdata.description}</p>
            <br/>
            <p><i>{itemdata.effect_value} to {itemdata.effect_stat}</i></p>
            <br/>
            <div className="text-center">
                <button className="bg-light-blue-darken-hover p-3 border-2 border-black rounded">Buy ({itemdata.cost} points)</button>
            </div>
        </div>
    );
}