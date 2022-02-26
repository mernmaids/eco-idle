import { ShopItem } from "./ShopItem.js";

export function Shop({shopdata}) {
    return (
    <div class="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green">
        <h1 class="text-center mx-auto text-6xl my-5 w-full float-left h-1/12">{shopdata ? shopdata.name : ""}</h1>
        <div class="w-full float-left flex flex-wrap px-10">
            {shopdata.items.map( (item) =>
                (<div class="lg:w-1/2 xl:w-1/3 p-8">
                    <ShopItem itemdata={item}/>
                </div>)
            )}
        </div>
    </div>
    );
}