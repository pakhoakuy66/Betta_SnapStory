import { useState } from "react";

export function UserTab() {
    const [activeTab, setActiveTab] = useState("posts");

    return (
        <nav className="flex border-b border-[#333] bg-[#111]">
            <button
                onClick={() => setActiveTab("posts")}
                className={`w-1/2 px-4 py-3 text-sm text-center font-medium transition duration-300 cursor-pointer
                        ${
                            activeTab === "posts"
                                ? "text-white duration-500 hover:drop-shadow-[0_0_10px_white] border-b-[2px] border-white font-bold"
                                : "text-[#C7D5E0] hover:text-white"
                        }`}
            >
                <i className="fa-solid fa-list"></i> Bài viết
            </button>
            <button
                onClick={() => setActiveTab("saved")}
                className={`w-1/2 px-4 py-3 text-sm text-center font-medium transition duration-300 cursor-pointer
                        ${
                            activeTab === "saved"
                                ? "text-white duration-500 hover:drop-shadow-[0_0_10px_white] border-b-[2px] border-white font-bold"
                                : "text-[#C7D5E0] hover:text-white"
                        }`}
            >
                <i className="fa-solid fa-bookmark"></i> Bài viết đã lưu
            </button>
        </nav>
    );
}
