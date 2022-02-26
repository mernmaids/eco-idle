import { ShopItem } from "./ShopItem.js";

export function Shop({shopdata}) {
    console.log('shopdata:', shopdata.items);
    return (
    <div className="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green">
        <h1 className="text-center mx-auto text-6xl my-5 w-full float-left h-1/12">{shopdata.name}</h1>
        <div className="w-full float-left flex flex-wrap px-10">
            {shopdata.items.map( (item) =>
                <div key={item.name} className="lg:w-1/2 xl:w-1/3 p-8">
                    <ShopItem itemdata={item}/>
                </div>
            )}
        </div>
    </div>
    );
}