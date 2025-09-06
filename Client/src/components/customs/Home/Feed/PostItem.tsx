import { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { EmojiClickData, Theme } from "emoji-picker-react";
import { EditMenu } from "../../Chores/Context_menu/editMenu";
import { LikeAction } from "../../Chores/ActionPost/Like_Post";

export function PostItem({
    postId,
    username,
    onPostDetail,
    onReportPost,
}: {
    postId: string;
    username: string;
    onPostDetail: () => void;
    onReportPost: () => void;
}) {
    const [showEmoji, setShowEmoji] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [comment, setComment] = useState("");

    const menuRef = useRef<HTMLDivElement>(null);
    const emojiRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const navigate = useNavigate();

    const { t } = useTranslation();

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
        <div className="w-[400px] mx-auto bg-black text-white border border-neutral-800 rounded-md mb-8">
            <div className="flex items-center gap-2 px-4 py-3">
                <img
                    onClick={() => navigate(`/o/${username}`)}
                    src="/avatar/spurs.png"
                    alt="spursofficial"
                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
                <div
                    onClick={() => navigate(`/o/${username}`)}
                    className="flex flex-col text-sm cursor-pointer"
                >
                    <span className="font-semibold">spursofficial</span>
                    <span className="text-gray-400 text-xs">
                        {t("postItem.timeAgo")}
                    </span>
                </div>
                <div className="ml-auto relative" ref={menuRef}>
                    <i
                        className="fa-solid fa-ellipsis text-gray-400 cursor-pointer"
                        onClick={() => setShowMenu((prev) => !prev)}
                    ></i>
                    {showMenu && (
                        <EditMenu
                            options={[
                                {
                                    label: `${t("postItem.report")}`,
                                    action: "Report_Post",
                                },
                                {
                                    label: `${t("postItem.open")}`,
                                    action: "open",
                                },
                                {
                                    label: `${t("postItem.repost")}`,
                                    action: "repost",
                                },
                                {
                                    label: `${t("postItem.copy")}`,
                                    action: "copy",
                                },
                            ]}
                            onOptionClick={(action) => {
                                if (action === "Report_Post") {
                                    onReportPost();
                                } else if (action === "open") {
                                    onPostDetail(); // gọi hàm từ component cha
                                }
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="w-full aspect-square bg-neutral-900 relative">
                <img
                    onClick={onPostDetail}
                    src="/posts/spurs_gate.jpg"
                    alt="Spurs post"
                    className="w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute bottom-2 w-full flex justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex gap-3 text-[20px]">
                    {/* <i
                        className="fa-regular fa-heart hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
                    ></i>
                    <div className="px-1 text-sm text-white">0</div> */}
                    <LikeAction />
                    <i
                        onClick={onPostDetail}
                        className="fa-regular fa-comment hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
                    ></i>
                    <div className="px-1 text-sm text-white">0</div>
                </div>
                <div className="flex gap-2 text-[20px]">
                    <i
                        className="fas fa-repeat hover:rotate-90 hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
                    ></i>
                    <div className="px-1 text-sm text-white">1</div>
                </div>
            </div>
            <p className="px-4 py-1 text-sm">
                The famous Bill Nicholson Gates are now officially back home...
                <button className="text-gray-400 ml-1 cursor-pointer">
                    {t("postItem.seeMore")}
                </button>
            </p>
            <div className="flex items-center px-4 py-3 border-t border-neutral-800">
                <textarea
                    ref={textareaRef}
                    placeholder={t("postItem.commentPlaceholder")}
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
                    {t("postItem.submit")}
                </button>
            </div>
        </div>
    );
}
