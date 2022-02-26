/*
Reusable, centered generic content "box".
*/
export function ContentBox({children}) {
    return (
        <div className="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green flex">
            <div className="w-0 xl:w-1/4"></div>
            <div className="w-full xl:w-1/2">
                <div className="bg-dark-green p-5 mt-10 detail-inner">
                    {children}
                </div>
            </div>
            <div className="w-0 xl:w-1/4"></div>
        </div>
    );
}