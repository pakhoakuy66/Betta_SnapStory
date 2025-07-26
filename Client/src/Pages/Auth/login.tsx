import Logo from "../../assets/imgaes/Akuy_logo.png";

export function LoginUser() {
    return (
        <div className="flex h-full justify-center items-center">
            <form
                className="bg-[#000] p-3 shadow-xl w-[750px] 
                h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <h1 className="text-[#C7D5E0] text-[30px] text-center font-bold block">
                    Snapstory
                </h1>
                <nav className="flex">
                    <div className="grid justify-center items-center w-[100%] text-[#C7D5E0] border-r-2 border-[#2c343e]">
                        <img
                            src={Logo}
                            className="w-[80px] block drop-shadow-[0_0_1px_white] 
                                duration-500 hover:drop-shadow-[0_0_20px_white]"
                        />
                    </div>
                    <div className="w-[100%] text-[#C7D5E0]">
                        <h1 className="text-[#C7D5E0] text-[30px] text-center font-bold block ">
                            Login
                        </h1>
                        <nav className="grid justify-center">
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
                        </nav>
                        <div className="grid justify-center mt-3">
                            <button
                                type="submit"
                                className="w-[90px] h-[30px] bg-[#151d2a] text-white 
                                rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white] 
                                active:scale-95 active:drop-shadow-[0_0_5px_white]"
                            >
                                Login
                            </button>
                        </div>
                        <p className="text-[#C7D5E0] my-5 text-center">
                            Have an account?
                            <a
                                className="underline duration-300 
                                hover:drop-shadow-[0_0_30px_white]"
                            >
                                {" "}
                                Register
                            </a>
                        </p>
                    </div>
                </nav>
            </form>
        </div>
    );
}
