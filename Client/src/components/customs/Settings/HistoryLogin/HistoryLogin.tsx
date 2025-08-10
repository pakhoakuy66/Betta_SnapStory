import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ItemLogin } from "./ItemLogin";

export function HistoryLogin() {
    return (
        <div className="flex h-screen justify-center items-center transition-all duration-300 ease-in-out">
            <div
                className="bg-[#000] p-3 shadow-xl text-white w-[500px]
                    h-[400px] rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div className="w-[100%] h-[40px] border-b-2 border-[#333]">
                    <h2 className="text-center font-bold text-[20px] block">
                        Hoạt động đăng nhập
                    </h2>
                </div>
                <ul className="w-[100%] max-h-[350px] mt-2 overflow-y-auto scrollbar-hide">
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                    <ItemLogin />
                </ul>
            </div>
        </div>
    );
}
