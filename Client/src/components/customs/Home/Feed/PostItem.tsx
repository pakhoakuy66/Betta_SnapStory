import { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import type { EmojiClickData, Theme } from "emoji-picker-react";
import { EditMenu } from "../../Context_menu/editMenu";

export function PostItem() {
    const [showEmoji, setShowEmoji] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [comment, setComment] = useState("");
    const menuRef = useRef<HTMLDivElement>(null);
    const emojiRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Xử lý Menu của icon 3 chấm
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Xử lý emoji
    // Ẩn emoji khi click ra ngoài
    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                emojiRef.current &&
                !emojiRef.current.contains(e.target as Node)
            ) {
                setShowEmoji(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

    // Thêm emoji vào nội dung comment
    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setComment((prev) => prev + emojiData.emoji);
        inputRef.current?.focus(); // focus lại vào input
    };

    return (
        <div className="w-[500px] mx-auto bg-black text-white border border-neutral-800 rounded-md mb-8">
            <div className="flex items-center gap-2 px-4 py-3">
                <img
                    src="/avatar/spurs.png"
                    alt="spursofficial"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col text-sm">
                    <span className="font-semibold">spursofficial</span>
                    <span className="text-gray-400 text-xs">19 giờ</span>
                </div>
                <div className="ml-auto relative" ref={menuRef}>
                    <i
                        className="fa-solid fa-ellipsis text-gray-400 cursor-pointer"
                        onClick={() => setShowMenu((prev) => !prev)}
                    ></i>
                    {showMenu && (
                        <EditMenu
                            options={["Chỉnh sửa", "Xóa", "Sao chép liên kết"]}
                        />
                    )}
                </div>
            </div>
            <div className="w-full aspect-square bg-neutral-900 relative">
                <img
                    src="/posts/spurs_gate.jpg"
                    alt="Spurs post"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 w-full flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex gap-3 text-[20px]">
                    <i
                        className="fa-regular fa-heart hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white]"
                    ></i>
                    <div className="px-1 text-sm text-white">0</div>
                    <i
                        className="fa-regular fa-comment hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white]"
                    ></i>
                    <div className="px-1 text-sm text-white">0</div>
                </div>
                <div>
                    <i
                        className="fa-regular fa-bookmark hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white]"
                    ></i>
                </div>
            </div>
            <div className="px-4 py-1 text-sm">
                The famous Bill Nicholson Gates are now officially back home...
                <button className="text-gray-400 ml-1">xem thêm</button>
            </div>
            <div className="flex items-center px-4 py-3 border-t border-neutral-800">
                <input
                    type="text"
                    placeholder="Bình luận..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-transparent flex-1 outline-none text-sm placeholder-gray-500"
                />
                <div className="relative" ref={emojiRef}>
                    <button
                        onClick={() => setShowEmoji((prev) => !prev)}
                        className="text-xl mr-2 relative cursor-pointer"
                    >
                        😊
                    </button>
                    {/* Emoji popup */}
                    {showEmoji && (
                        <div className="absolute bottom-[60px] right-4 z-50">
                            <EmojiPicker
                                onEmojiClick={handleEmojiClick}
                                theme={"dark" as Theme}
                                height={380}
                                width={280}
                            />
                        </div>
                    )}
                </div>

                <button
                    className="w-[90px] h-[30px] bg-[#151d2a] text-white rounded-sm drop-shadow-[0_0_1px_white] 
                        duration-300 hover:drop-shadow-[0_0_3px_white] active:scale-95 active:drop-shadow-[0_0_5px_white]
                        cursor-pointer"
                >
                    Đăng
                </button>
            </div>
        </div>
    );
}
