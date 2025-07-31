import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import type { EmojiClickData, Theme } from "emoji-picker-react";
import { EditMenu } from "../../Context_menu/editMenu";

export function NewPost({ onClose }: { onClose: () => void }) {
    const [content, setContent] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [showMenu, setShowMenu] = useState(false);
    const [slideOut, setSlideOut] = useState(false);

    const emojiRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const newPostRef = useRef<HTMLDivElement>(null);

    const scrollRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Xử lý form newPost
    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                newPostRef.current &&
                !newPostRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    // Xử lý Menu nhỏ
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

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown.current = true;
        startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
        scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX.current;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDown.current = false;
    };

    const handleMouseLeave = () => {
        isDown.current = false;
    };

    // Xóa ảnh
    const handleRemoveImage = (indexToRemove: number) => {
        setImages((prev) =>
            prev.filter((_, index) => {
                return index !== indexToRemove;
            })
        );
    };

    // Thêm emoji vào nội dung post
    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setContent((prev) => prev + emojiData.emoji);
        textareaRef.current?.focus();
    };

    return (
        <div
            ref={newPostRef}
            className="flex h-screen justify-center items-center"
        >
            <form
                className="bg-[#000] p-3 shadow-xl w-[600px] 
                h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div
                    className="relative flex items-center w-[100%] h-[50px] 
                    border-b-2 border-[#604d4d]"
                >
                    <span
                        onClick={() => onClose()}
                        className="text-[#fff] cursor-pointer
                        duration-300 hover:text-[#848383]"
                    >
                        Hủy
                    </span>
                    <h2
                        className="absolute left-1/2 -translate-x-1/2 text-[#fff] 
                        text-[18px] text-center font-bold"
                    >
                        Tạo bài viết mới
                    </h2>
                </div>

                {/* Content area */}
                <div className="flex mt-4">
                    <img
                        src="https://i.pravatar.cc/40?u=akuy66"
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />

                    {/* Thread input */}
                    <nav className="flex-1">
                        <h3 className="text-sm mb-1 text-[#fff] font-bold">
                            akuy.66
                        </h3>
                        <textarea
                            ref={textareaRef}
                            className="bg-transparent text-[#fff] w-full resize-none text-sm 
                            scrollbar-hide outline-none placeholder-gray-500"
                            placeholder="Có gì mới?"
                            rows={3}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            multiple
                            hidden
                            onChange={(e) => {
                                const files = Array.from(e.target.files || []);
                                const urls = files.map((file) =>
                                    URL.createObjectURL(file)
                                );
                                setImages((prev) => [...prev, ...urls]);
                            }}
                        />
                    </nav>
                </div>

                {images.length > 0 && (
                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        className="flex gap-3 ml-14 mt-4 pb-2 overflow-x-hidden 
                        cursor-grab active:cursor-grabbing select-none"
                    >
                        {images.map((img, idx) => (
                            <div key={idx} className="relative shrink-0">
                                <img
                                    src={img}
                                    alt={`preview-${idx}`}
                                    className="h-[120px] rounded-md object-cover shrink-0 pointer-events-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(idx)}
                                    className="absolute top-1 right-1 rounded-full
                                    text-xs flex items-center justify-center
                                     text-[#fff] w-[20px] text-[20px] text-end cursor-pointer
                                    duration-300 hover:text-[#848383] h-[20px]"
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Icons */}
                <div className="flex items-center gap-4 text-gray-400 mt-4 ml-14">
                    <label htmlFor="imageUpload">
                        <i
                            className="fa-regular fa-image cursor-pointer 
                        text-[15px] hover:text-[20px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        />
                    </label>
                    <div className="relative" ref={emojiRef}>
                        <button
                            type="button"
                            onClick={() => setShowEmoji((prev) => !prev)}
                            className="relative"
                        >
                            <i
                                className="fa-regular fa-face-smile cursor-pointer 
                                text-[15px] hover:text-[20px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                            />
                        </button>

                        {showEmoji && (
                            <div className="absolute bottom-full right-0 mb-2 z-50">
                                <EmojiPicker
                                    onEmojiClick={handleEmojiClick}
                                    theme={"dark" as Theme}
                                    width={250}
                                    height={300}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex h-[100%] items-center justify-between">
                    {/* Quyền trả lời */}
                    <div className="relative" ref={menuRef}>
                        <span
                            onClick={() => setShowMenu((prev) => !prev)}
                            className="mt-6 text-[13px] ml-1 text-[#b7b7b7] cursor-pointer
                             duration-300 hover:text-[#848383]"
                        >
                            Ai có thể xem bài viết này?
                        </span>

                        {showMenu && (
                            <EditMenu
                                options={[
                                    "Cộng đồng",
                                    "Người theo dõi bạn",
                                    "Cá nhân",
                                ]}
                            />
                        )}
                    </div>

                    {/* Button Đăng */}
                    <div className="flex justify-end mt-4">
                        <button
                            className={`w-[90px] h-[30px] text-white rounded-sm drop-shadow-[0_0_1px_white] ${
                                content.trim()
                                    ? `bg-[#151d2a] text-white duration-300 hover:drop-shadow-[0_0_3px_white] 
                                        active:scale-95 active:drop-shadow-[0_0_5px_whites] cursor-pointer`
                                    : `bg-gray-500 text-gray-300 cursor-not-allowed`
                            }`}
                            disabled={!content.trim()}
                        >
                            Đăng
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
