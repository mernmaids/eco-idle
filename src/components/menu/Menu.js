import { MenuItem } from "./MenuItem.js";
import { MenuLogo } from "./MenuLogo.js";

export function Menu({ onMenuSelect, options }) {
    // programmatically render all the menu options when they load
    return (
        <div class="float-left m-0 w-full xl:w-1/6 xl:h-full text-center bg-dark-green sidebar">
            <MenuLogo/>
            {options ? options.map( (opt) =>
                <MenuItem onClick={() => onMenuSelect(opt)}>${opt}</MenuItem>
            ) : ""}
        </div>
    );
}