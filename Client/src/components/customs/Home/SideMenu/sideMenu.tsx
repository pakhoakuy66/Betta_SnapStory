import Logo from "../../../../assets/imgaes/Akuy_logo.png";

export function SideMenu({
    onSearch,
    onNotification,
    onNewPost,
    onFeed,
    onProfile,
}: {
    onSearch: () => void;
    onNotification: () => void;
    onNewPost: () => void;
    onFeed: () => void;
    onProfile: () => void;
}) {
    return (
        <div className="fixed z-20">
            <aside
                className="grid bg-[#000] p-3 shadow-md text-white
                h-screen w-[80px] drop-shadow-[0_1px_white]"
            >
                <div className="items-start cursor-pointer">
                    <img
                        onClick={onFeed}
                        src={Logo}
                        className="w-[100%] block drop-shadow-[0_0_1px_white] 
                                duration-500 hover:drop-shadow-[0_0_5px_white]"
                    />
                </div>
                <ul className="grid justify-center items-center mt-[100px] w-[100%]">
                    <li className="mb-3.5 cursor-pointer">
                        <i
                            onClick={onFeed}
                            className="fa-solid fa-house
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onSearch}
                            className="fa-solid fa-magnifying-glass
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onNewPost}
                            className="fa-solid fa-plus
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onNotification}
                            className="fa-solid fa-bell
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                    <li className="my-3.5 cursor-pointer">
                        <i
                            onClick={onProfile}
                            className="fa-solid fa-user
                            text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </li>
                </ul>
                <button className="grid justify-center items-end mt-[100px] w-[100%] cursor-pointer">
                    <i
                        className="fa-solid fa-bars
                        text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                    ></i>
                </button>
            </aside>
        </div>
    );
}
