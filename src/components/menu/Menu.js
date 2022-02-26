import { MenuItem } from "./MenuItem.js";
import { MenuLogo } from "./MenuLogo.js";

export function Menu({ onMenuSelect, options }) {
    // programmatically render all the menu options when they load
    return (
        <div className="float-left m-0 w-full xl:w-1/6 xl:h-full text-center bg-dark-green sidebar">
            <MenuLogo/>
            {options.map( (opt) =>
                <MenuItem key={opt} onClick={() => onMenuSelect(opt)}>{opt}</MenuItem>
            )}
        </div>
    );
}