export function MenuItem({children, onClick}) {
    return (
        <div className="text-2xl py-3 menu-select" onClick={onClick}>
            {children}
        </div>
    );
    
}