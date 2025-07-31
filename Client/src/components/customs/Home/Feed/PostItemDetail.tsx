import test from "node:test";
import { useState, useEffect, useRef } from "react";

const post = {
    image: "/posts/spurs_gate.jpg",
    caption: "See you tonight, Hong Kong ❤️",
    user: {
        name: "arsenal",
        avatar: "/avatar/arsenal.png",
    },
    comments: [
        {
            user: "glen_kightley",
            text: "Can't wait to see Gyokeres make his debut 😭",
        },
        {
            user: "ramseyli",
            text: "can't wait egweg😭😭😭❤️",
        },
        {
            user: "ramseyli",
            text: "can't wait egweg😭😭😭❤️",
        },
        {
            user: "ramseyli",
            text: "can't wait egweg😭😭😭❤️",
        },
        {
            user: "ramseyli",
            text: "can't wait egweg😭😭😭❤️",
        },
        {
            user: "ramseyli",
            text: "can't wait egweg😭😭😭❤️",
        },
        {
            user: "ramseyli",
            text: "can't wait egweg😭😭😭❤️",
        },
    ],
};

export function PostItemDetail() {
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex h-screen justify-center items-center">
            <div
                className="flex bg-[#000] shadow-xl w-[800px] 
                h-[450px] rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                {/* Left: Image */}
                <div className="w-1/2 aspect-square bg-neutral-900 ">
                    <img
                        src={post.image}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Post Info + Comments */}
                <div className="w-1/2 bg-black text-white flex flex-col">
                    {/* Header */}
                    <div className="p-4 border-b-1 border-[#604d4d]">
                        <div className="flex items-center mb-3">
                            <img
                                src={post.user.avatar}
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="font-semibold">
                                {post.user.name}
                            </span>
                            <div className="ml-auto relatve">
                                <i className="fa-solid fa-ellipsis text-gray-400 cursor-pointer"></i>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm">{post.caption}</p>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="flex-1 overflow-y-auto max-h-[280px] px-4 py-2 space-y-2 text-sm scrollbar-hide">
                        {post.comments.map((c: any, i: number) => (
                            <div
                                key={i}
                                className="flex break-words whitespace-pre-wrap"
                            >
                                <img
                                    src={post.user.avatar}
                                    className="w-8 h-8 rounded-full mr-2 object-cover"
                                />
                                <div className="bg-neutral-800 px-3 py-2 rounded-xl max-w-[320px] text-white">
                                    <p className="text-sm font-normal break-words whitespace-normal leading-snug">
                                        <span className="font-semibold mr-1">
                                            {c.user}
                                        </span>
                                        <p className="mt-1">{c.text}</p>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Reaction & Input */}
                    <div className="border-t border-neutral-800 px-4 py-3">
                        <div className="flex gap-4 text-xl mb-2">
                            <i className="fa-regular fa-heart cursor-pointer"></i>
                        </div>
                        <div className="flex items-center ">
                            <input
                                type="text"
                                placeholder="Bình luận..."
                                className="bg-transparent flex-1 outline-none text-sm placeholder-gray-500"
                            />
                            <div className="relative">
                                <button className="text-xl mr-2 relative cursor-pointer">
                                    😊
                                </button>
                            </div>

                            <button
                                className="w-[90px] h-[30px] bg-[#151d2a] text-white 
                                            rounded-sm drop-shadow-[0_0_1px_white] cursor-pointer
                                            duration-300 hover:drop-shadow-[0_0_3px_white] 
                                            active:scale-95 active:drop-shadow-[0_0_5px_white]"
                            >
                                Đăng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
