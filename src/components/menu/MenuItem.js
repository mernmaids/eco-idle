export function MenuItem({children, onClick}) {
    return (
        <div class="text-2xl py-3 menu-select" onClick={onClick}>
            {children}
        </div>
    );
    
}