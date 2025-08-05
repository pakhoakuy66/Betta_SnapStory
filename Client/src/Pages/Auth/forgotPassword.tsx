import { useState } from "react";

export function ForgotPassword() {
    return (
        <div className="flex h-screen justify-center items-center">
            <form
                className="bg-[#000] p-3 shadow-xl text-white
                h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div className="flex h-[20px] items-center my-3">
                    <nav className="mr-3 cursor-pointer">
                        <i
                            className="fa-solid fa-arrow-left
                            text-[#C7D5E0] text-[20px] text-center font-bold 
                            block drop-shadow-[0_0_1px_white] 
                            duration-500 hover:drop-shadow-[0_0_5px_white]"
                        ></i>
                    </nav>
                    <h2 className="text-[#C7D5E0] text-[20px] text-center font-bold block">
                        Quên mật khẩu
                    </h2>
                </div>
                <nav className="flex flex-col gap-3">
                    <input
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="w-[320px] h-[35px] my-3 p-1 rounded-sm bg-[#0a0e1a] 
                                duration-300 hover:bg-[#12182d]  hover:drop-shadow-[0_0_5px_white]"
                        required
                    />
                    <nav className="flex justify-center">
                        <button
                            type="submit"
                            className="w-[90px] h-[30px] bg-[#151d2a] 
                            text-white rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                            duration-300 hover:drop-shadow-[0_0_3px_white] 
                            active:scale-95 active:drop-shadow-[0_0_5px_white]"
                        >
                            Gửi
                        </button>
                    </nav>
                </nav>
            </form>
        </div>
    );
}
