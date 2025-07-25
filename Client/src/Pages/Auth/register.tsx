import Logo from "../../assets/imgaes/Akuy_logo.png";

export function Register() {
    return (
        <div className="flex h-full justify-center items-center">
            <form
                className="bg-[#1B2838] p-3 shadow-xl w-[750px] 
                h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <h1
                    className="text-[#C7D5E0] text-[30px] text-center font-bold block drop-shadow-[0_0_1px_white] 
                    duration-500 hover:drop-shadow-[0_0_1.5px_white]"
                >
                    Snapstory
                </h1>
                <nav className="flex">
                    <div className="grid justify-center items-center w-[100%] text-[#C7D5E0] border-r-2 border-[#2c343e]">
                        <img
                            src={Logo}
                            className="w-[80px] block drop-shadow-[0_0_1px_white] 
                                duration-500 hover:drop-shadow-[0_0_3px_white]"
                        />
                    </div>
                    <div className="w-[100%] text-[#C7D5E0]">
                        <h1
                            className="text-[#C7D5E0] text-[30px] text-center font-bold block 
                            drop-shadow-[0_0_1px_white] duration-500 hover:drop-shadow-[0_0_1.5px_white]"
                        >
                            Register
                        </h1>
                        <nav className="grid justify-center">
                            <input
                                className="w-[320px] h-[35px] my-3 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                                placeholder="Username"
                            />
                            <input
                                className="w-[320px] h-[35px] my-3 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                                placeholder="Email"
                            />
                            <input
                                className="w-[320px] h-[35px] my-3 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                                placeholder="Password"
                            />
                            <input
                                className="w-[320px] h-[35px] my-3 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                                placeholder="Confirm Password"
                            />
                            <a
                                className="underline drop-shadow-[0_0_1px_white] duration-300 
                                hover:drop-shadow-[0_0_15px_white]"
                            >
                                {" "}
                                Forgot Password
                            </a>
                        </nav>
                        <div className="grid justify-center mt-3">
                            <button
                                type="submit"
                                className="w-[90px] h-[30px] bg-[#151d2a] text-white rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white] active:scale-95 active:drop-shadow-[0_0_5px_white]"
                            >
                                Login
                            </button>
                        </div>
                        <p className="text-[#C7D5E0] my-5 text-center">
                            Bạn đã có tài khoản?
                            <a
                                className="underline drop-shadow-[0_0_1px_white] duration-300 
                                hover:drop-shadow-[0_0_15px_white]"
                            >
                                {" "}
                                Đăng nhập
                            </a>
                        </p>
                    </div>
                </nav>
            </form>
        </div>
    );
}
