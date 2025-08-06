export function ItemFollower() {
    return (
        <li className="flex justify-between items-center h-[70px]">
            <img
                src="./avatar"
                className="w-10 h-10 rounded-[50%] object-cover"
            />
            <nav className="ml-[15px] w-[100%]">
                <h2 className="text-[#fff] text-[13px] font-bold">Tên</h2>
            </nav>
            <button
                className="w-[150px] h-[30px] bg-[#151d2a] text-[12px]
                            text-white rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                            duration-300 hover:drop-shadow-[0_0_3px_white] mr-1
                            active:scale-95 active:drop-shadow-[0_0_5px_white]"
            >
                Theo dõi lại
            </button>
        </li>
    );
}
