import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmojiPicker from "emoji-picker-react";
import type { EmojiClickData, Theme } from "emoji-picker-react";
import { EditMenu } from "../../../Chores/Context_menu/editMenu";

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
            replies: [
                { user: "arsenal", text: "Me too! ", isAuthor: true },
                { user: "ramseyli", text: "Same here 😭" },
                { user: "john_doe", text: "Excited!" },
                { user: "alice", text: "I can't wait!" },
                { user: "bob", text: "It's going to be amazing!" },
            ],
        },
        {
            user: "ramseyli",
            text: "can't wait egweg😭😭😭❤️",
            replies: [
                {
                    user: "arsenal",
                    text: "Be patient!",
                    isAuthor: true,
                },
                { user: "glen_kightley", text: "Can't wait too!" },
            ],
        },
    ],
};

export function UserPostItemDetail({
    onClose,
    onReportPost,
    isReportPostOpen,
    onRemovePost,
    isRemovePostOpen,
    onFormPostStatus,
    isFormPostStatusOpen,
    isOwner,
    isPrivate,
    isSaved,
}: {
    onClose: () => void;
    onReportPost: () => void;
    isReportPostOpen: React.MutableRefObject<boolean>;
    onRemovePost: () => void;
    isRemovePostOpen: React.MutableRefObject<boolean>;
    onFormPostStatus: () => void;
    isFormPostStatusOpen: React.MutableRefObject<boolean>;
    isOwner: boolean;
    isPrivate: boolean;
    isSaved: boolean;
}) {
    const { t } = useTranslation();

    const menuOptions = useMemo(
        () => ({
            owner: [
                { label: t("postDetail.delete"), action: "Remove_Post" },
                { label: t("postDetail.status"), action: "Post_Status" },
                { label: t("postDetail.copy"), action: "copy" },
            ],
            private: [
                { label: t("postDetail.delete"), action: "Remove_Post" },
                { label: t("postDetail.status"), action: "Post_Status" },
            ],
            other: [
                { label: t("postDetail.report"), action: "Report_Post" },
                { label: t("postDetail.removeSaved"), action: "Saved" },
                { label: t("postDetail.copy"), action: "copy" },
            ],
        }),
        [t]
    ); // chỉ re-calc khi t thay đổi (ngôn ngữ đổi)

    const [showMenu, setShowMenu] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);
    const [slideOut, setSlideOut] = useState(false);
    const [comment, setComment] = useState("");

    const menuRef = useRef<HTMLDivElement>(null);
    const emojiRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const postDetailUserRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    // Xử lý đóng PostDetail
    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                postDetailUserRef.current &&
                !postDetailUserRef.current.contains(e.target as Node)
            ) {
                if (isReportPostOpen.current) return; // Nếu ReportPost đang mở → không đóng PostItemDetail
                if (isRemovePostOpen.current) return; // Nếu RemovePost đang mở → không đóng PostItemDetail
                if (isFormPostStatusOpen.current) return; // Nếu FormPostStatus đang mở → không đóng PostItemDetail

                setSlideOut(true);
                setTimeout(() => onClose(), 300);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose, isReportPostOpen, isRemovePostOpen, isFormPostStatusOpen]);

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

    // Thêm emoji vào nội dung comment
    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setComment((prev) => prev + emojiData.emoji);
        textareaRef.current?.focus();
    };

    return (
        <div
            className={`flex h-screen justify-center items-center transition-all duration-300 ease-in-out
                ${slideOut ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
        >
            <div
                ref={postDetailUserRef}
                className="flex bg-[#000] shadow-xl w-[700px] 
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
                                onClick={() => navigate(`/o/${post.user.name}`)}
                                src={post.user.avatar}
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span
                                onClick={() => navigate(`/o/${post.user.name}`)}
                                className="font-semibold"
                            >
                                {post.user.name}
                            </span>
                            <div className="ml-auto relative" ref={menuRef}>
                                <i
                                    className="fa-solid fa-ellipsis text-gray-400 cursor-pointer"
                                    onClick={() => setShowMenu((prev) => !prev)}
                                ></i>
                                {showMenu && (
                                    <EditMenu
                                        options={
                                            isPrivate
                                                ? menuOptions.private
                                                : isSaved
                                                ? menuOptions.other // Saved thì menu như "khách"
                                                : isOwner
                                                ? menuOptions.owner
                                                : menuOptions.other
                                        }
                                        onOptionClick={(action) => {
                                            switch (action) {
                                                case "Remove_Post":
                                                    onRemovePost();
                                                    break;
                                                case "Post_Status":
                                                    onFormPostStatus();
                                                    break;
                                                case "Report_Post":
                                                    onReportPost();
                                                    break;
                                                case "Saved":
                                                    // xử lý lưu
                                                    break;
                                                case "copy":
                                                    // copy link
                                                    break;
                                            }
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="flex-1 overflow-y-auto max-h-[280px] px-4 py-2 space-y-2 text-sm scrollbar-hide">
                        {/*Author*/}
                        <div>
                            <div className="flex items-center mb-3">
                                <img
                                    onClick={() =>
                                        navigate(`/o/${post.user.name}`)
                                    }
                                    src={post.user.avatar}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span
                                    onClick={() =>
                                        navigate(`/o/${post.user.name}`)
                                    }
                                    className="font-semibold"
                                >
                                    {post.user.name}
                                </span>
                                <span className="ml-1 text-[#fff] text-[10px] italic">
                                    {t("postDetail.author")}
                                </span>
                            </div>
                            <div className="bg-neutral-800 px-3 py-2 rounded-xl ">
                                <p className="text-sm">{post.caption}</p>
                            </div>
                        </div>

                        {post.comments.map((c: any, i: number) => {
                            const [visibleReplies, setVisibleReplies] =
                                useState(0); // số reply đang hiển thị
                            const totalReplies = c.replies?.length || 0;

                            const handleViewMoreReplies = () => {
                                setVisibleReplies((prev) =>
                                    Math.min(prev + 3, totalReplies)
                                );
                            };

                            return (
                                <div
                                    key={i}
                                    className="flex flex-col break-words whitespace-pre-wrap mt-3"
                                >
                                    {/* Comment chính */}
                                    <div className="flex">
                                        <img
                                            onClick={() =>
                                                navigate(`/o/${c.user}`)
                                            }
                                            src={post.user.avatar}
                                            className="w-8 h-8 rounded-full mr-2 object-cover cursor-pointer"
                                        />
                                        <div className="bg-neutral-800 px-3 py-2 rounded-xl max-w-[320px] text-white">
                                            <p className="text-sm font-normal">
                                                <span
                                                    onClick={() =>
                                                        navigate(`/o/${c.user}`)
                                                    }
                                                    className="font-semibold mr-1"
                                                >
                                                    {c.user}
                                                </span>
                                                <p className="mt-1">{c.text}</p>
                                                {c.isAuthor && (
                                                    <span className="ml-1 text-[10px] italic">
                                                        {t("postDetail.author")}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Replies */}
                                    <div className="ml-10 mt-2 flex flex-col gap-2">
                                        {c.replies
                                            ?.slice(0, visibleReplies)
                                            .map((r: any, idx: number) => (
                                                <div key={idx} className="flex">
                                                    <img
                                                        onClick={() =>
                                                            navigate(
                                                                `/o/${r.user}`
                                                            )
                                                        }
                                                        src={post.user.avatar}
                                                        className="w-6 h-6 rounded-full mr-2 object-cover cursor-pointer"
                                                    />
                                                    <div className="bg-neutral-700 px-2 py-1 rounded-lg max-w-[280px] text-white text-sm">
                                                        <span
                                                            onClick={() =>
                                                                navigate(
                                                                    `/o/${r.user}`
                                                                )
                                                            }
                                                            className="font-semibold mr-1"
                                                        >
                                                            {r.user}
                                                        </span>
                                                        {r.isAuthor && (
                                                            <span className="text-[10px] italic">
                                                                {t(
                                                                    "postDetail.author"
                                                                )}
                                                            </span>
                                                        )}
                                                        <p>{r.text}</p>
                                                    </div>
                                                </div>
                                            ))}

                                        {visibleReplies < totalReplies && (
                                            <span
                                                onClick={handleViewMoreReplies}
                                                className="text-gray-400 text-xs cursor-pointer"
                                            >
                                                {t("postDetail.viewReplies", {
                                                    count:
                                                        totalReplies -
                                                        visibleReplies,
                                                })}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Reaction & Input */}
                    <div className="border-t border-neutral-800 px-4 py-3 max-h-[50px]">
                        <div className="flex gap-4 text-xl mb-2">
                            <i
                                className="fa-regular fa-heart hover:scale-110 
                                duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
                            ></i>
                        </div>
                        <div className="flex items-center max-h-[500px] ">
                            <textarea
                                ref={textareaRef}
                                placeholder={t("postDetail.commentPlaceholder")}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="scrollbar-hide bg-transparent flex-1 outline-none text-sm placeholder-gray-500"
                            />
                            <div ref={emojiRef} className="relative">
                                <button
                                    className="text-xl mr-2 relative"
                                    onClick={() =>
                                        setShowEmoji((prev) => !prev)
                                    }
                                >
                                    <i
                                        className="fa-regular fa-face-smile cursor-pointer 
                                        text-[18px] hover:text-[20px] duration-500 hover:drop-shadow-[0_0_10px_white]"
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

                            <button
                                className={`w-[90px] h-[30px] text-white rounded-sm drop-shadow-[0_0_1px_white] ${
                                    comment.trim()
                                        ? `bg-[#151d2a] text-white duration-300 hover:drop-shadow-[0_0_3px_white] 
                                        active:scale-95 active:drop-shadow-[0_0_5px_whites] cursor-pointer`
                                        : `bg-gray-500 text-gray-300 cursor-not-allowed`
                                }`}
                                disabled={!comment.trim()}
                            >
                                {t("postDetail.submit")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
