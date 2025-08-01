import { useEffect, useState, useRef } from "react";

export function Profile() {
    return (
        <div className="w-full max-w-[1100px] mx-auto text-white mt-10 px-6">
            <div className="w-full border border-white rounded-md overflow-hidden">
                {/* Header Profile */}
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
                        <div className="flex">
                            <div className="text-[#fff] text-[28px] font-bold">
                                Tên người dùng
                            </div>
                            <div className="text-sm text-gray-300">
                                Mô tả ngắn về bản thân, sở thích, hoặc trạng
                                thái...
                            </div>
                            <div className="mt-4">
                                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                                    Chỉnh sửa hồ sơ
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-[#fff] text-[28px] font-bold">
                                Tên người dùng
                            </div>
                            <div className="text-sm text-gray-300">
                                Mô tả ngắn về bản thân, sở thích, hoặc trạng
                                thái...
                            </div>
                            <div className="mt-4">
                                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                                    Chỉnh sửa hồ sơ
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-[#fff] text-[28px] font-bold">
                                Tên người dùng
                            </div>
                            <div className="text-sm text-gray-300">
                                Mô tả ngắn về bản thân, sở thích, hoặc trạng
                                thái...
                            </div>
                            <div className="mt-4">
                                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                                    Chỉnh sửa hồ sơ
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}
