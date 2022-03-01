import { Link } from "react-router-dom";

export function MenuItem({route, title}) {
    return (
        <Link to={route}>
            <div className="text-2xl py-3 menu-select">
                {title}
            </div>
        </Link>
    );
    
}