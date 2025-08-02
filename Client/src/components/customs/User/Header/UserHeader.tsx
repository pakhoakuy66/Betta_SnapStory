export function UserHead() {
    return (
        <header className="flex items-center gap-10 p-8 bg-amber-500">
            {/* Avatar */}
            <div className="flex justify-center items-center w-[200px] h-[200px] bg-amber-800 rounded-full overflow-hidden">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Avatar"
                    className="w-[150px] h-[150px] rounded-full object-cover"
                />
            </div>

            {/* Thông tin bên phải */}
            <div className="flex-1 grid bg-amber-950 rounded-md p-6">
                <div className="flex items-center justify-between mb-[10px]">
                    <div className="text-[#C7D5E0] text-[26px] font-bold">
                        Tên người dùng
                    </div>
                    <button className="cursor-pointer">
                        <i
                            className="fa-solid fa-gear
                                    text-[20px] hover:text-[25px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        ></i>
                    </button>
                </div>
                <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[#C7D5E0] text-[16px]">
                        Chưa có tiểu sử
                    </p>
                </div>
                <div className="flex items-center my-[10px]">
                    <div className="text-[#C7D5E0] text-[20px]">
                        <span className="font-bold">0</span> bài biết
                    </div>
                    <div className="text-[#C7D5E0] text-[20px] ml-[50px]">
                        <span className="font-bold">0</span> follower
                    </div>
                    <div className="text-[#C7D5E0] text-[20px] ml-[50px]">
                        <span className="font-bold">10</span> đã follow
                    </div>
                </div>
                <div className="flex items-center my-[10px]">
                    <button
                        className="w-[180px] h-[30px] bg-[#151d2a] text-white 
                                rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                                duration-300 hover:drop-shadow-[0_0_3px_white] 
                                active:scale-95 active:drop-shadow-[0_0_5px_white]"
                    >
                        <i className="fa-solid fa-pen-to-square"></i> Chỉnh sửa
                        bài viết
                    </button>
                </div>
            </div>
        </header>
    );
}
