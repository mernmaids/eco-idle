import { ShopItem } from "./ShopItem.js";
import { PointDisplay } from "../sector/PointDisplay.js";

export function Shop({shopname, shopdata, savedata}) {
    console.log('shopdata:', shopdata);
    return (
    <div className="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green">
        <div className="w-full float-left flex flex-wrap px-10">
            <PointDisplay savedata={savedata}></PointDisplay>
            {shopdata.map( (item) =>
                <div key={item.get("name")} className="lg:w-1/2 xl:w-1/3 p-8">
                    <ShopItem itemdata={item}/>
                </div>
            )}
        </div>
    </div>
    );
}