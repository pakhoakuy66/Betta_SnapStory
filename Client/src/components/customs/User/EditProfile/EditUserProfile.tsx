export function EditUser() {
    return (
        <div className="flex h-screen justify-center items-center transition-all duration-300 ease-in-out">
            <div
                className="grid bg-[#000] shadow-xl w-[550px] p-3
                h-auto rounded-sm drop-shadow-[0_0_1px_white] 
                duration-300 hover:drop-shadow-[0_0_3px_white]
                text-[#C7D5E0] "
            >
                <div className="w-[100%] h-[80px]">
                    <div
                        className="flex justify-center items-center 
                        w-[100%] h-[100%] "
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Avatar"
                            className="w-[70px] h-[70px] rounded-full border-1 cursor-pointer object-cover"
                        />
                    </div>
                </div>
                <div className="px-[10px]">
                    <div className="grid w-[100%] my-1">
                        <label className="text-[18px] font-bold">Tên</label>
                        <input
                            className="w-[100%] h-[35px] my-1.5 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                            placeholder="Username"
                        />
                    </div>
                    <div className="grid w-[100%] my-1">
                        <label className="text-[18px] font-bold">Tiểu sử</label>
                        <input
                            className="w-[100%] h-[35px] my-1.5 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                            placeholder="Username"
                        />
                    </div>
                    <div className="grid w-[100%] my-1">
                        <label className="text-[18px] font-bold">
                            Liên kết
                        </label>
                        <input
                            className="w-[100%] h-[35px] my-1.5 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                            placeholder="Username"
                        />
                    </div>
                    <div className="w-[100%] my-5">
                        <button
                            className="w-[100%] h-[30px] bg-[#151d2a] 
                            text-white rounded-sm drop-shadow-[0_0_1px_white] duration-300 
                            hover:drop-shadow-[0_0_3px_white] active:scale-95 
                            active:drop-shadow-[0_0_5px_white] cursor-pointer"
                        >
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
