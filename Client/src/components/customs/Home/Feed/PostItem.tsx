import { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import type { EmojiClickData, Theme } from "emoji-picker-react";
import { EditMenu } from "../../Context_menu/editMenu";

export function PostItem({ onPostDetail }: { onPostDetail: () => void }) {
    const [showEmoji, setShowEmoji] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [comment, setComment] = useState("");
    const menuRef = useRef<HTMLDivElement>(null);
    const emojiRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        textareaRef.current?.focus(); // focus lại vào input
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
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
                    ></i>
                    <div className="px-1 text-sm text-white">0</div>
                    <i
                        onClick={onPostDetail}
                        className="fa-regular fa-comment hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
                    ></i>
                    <div className="px-1 text-sm text-white">0</div>
                </div>
                <div>
                    <i
                        className="fa-regular fa-bookmark hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
                    ></i>
                </div>
            </div>
            <p className="px-4 py-1 text-sm">
                The famous Bill Nicholson Gates are now officially back home...
                <button className="text-gray-400 ml-1">xem thêm</button>
            </p>
            <div className="flex items-center px-4 py-3 border-t border-neutral-800">
                <textarea
                    ref={textareaRef}
                    placeholder="Bình luận..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-transparent flex-1 outline-none text-sm placeholder-gray-500 scrollbar-hide"
                />
                <div className="relative" ref={emojiRef}>
                    <button
                        onClick={() => setShowEmoji((prev) => !prev)}
                        className="text-xl mr-2 relative"
                    >
                        <i
                            className="fa-regular fa-face-smile cursor-pointer 
                                        text-[18px] hover:text-[20px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        />
                    </button>
                    {/* Emoji popup */}
                    {showEmoji && (
                        <div className="absolute bottom-[60px] right-4 z-50">
                            <EmojiPicker
                                onEmojiClick={handleEmojiClick}
                                theme={"dark" as Theme}
                                height={300}
                                width={250}
                            />
                        </div>
                    )}
                </div>

                <button
                    className={`w-[90px] h-[30px] text-white rounded-sm drop-shadow-[0_0_1px_white] ${
                        comment.trim()
                            ? `bg-[#151d2a] text-white duration-300 hover:drop-shadow-[0_0_3px_white] 
                                        active:scale-95 active:drop-shadow-[0_0_5px_whites] cursor-pointer`
                            : `bg-gray-500 text-gray-300 cursor-not-allowed`
                    }`}
                    disabled={!comment.trim()}
                >
                    Đăng
                </button>
            </div>
        </div>
    );
}
