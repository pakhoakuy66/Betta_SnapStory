import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Notification = {
    id: number;
    avatar: string;
    username: string;
    type: "like" | "comment" | "save";
    commentText?: string;
    time: string; // chỉ lưu số giờ (vd: "2", "3")
    postImage?: string;
};

const notifications: Notification[] = [
    {
        id: 1,
        avatar: "https://i.pravatar.cc/50?img=1",
        username: "linh.ng",
        type: "like",
        time: "2",
        postImage: "https://source.unsplash.com/random/50x50?sig=1",
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/50?img=2",
        username: "khanhtran",
        type: "comment",
        commentText: "Hay quá!",
        time: "3",
        postImage: "https://source.unsplash.com/random/50x50?sig=2",
    },
    {
        id: 3,
        avatar: "https://i.pravatar.cc/50?img=3",
        username: "minhchau",
        type: "save",
        time: "1",
        postImage: "https://source.unsplash.com/random/50x50?sig=3",
    },
];

export function NotificationPanel({ onClose }: { onClose: () => void }) {
    const [slideOut, setSlideOut] = useState(false);

    const notificationRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true);
                setTimeout(() => onClose(), 300);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    return (
        <div
            ref={notificationRef}
            className={`fixed top-0 left-[80px] h-screen w-[350px] p-5 bg-black 
        border-r border-[#604d4d] rounded-r-xl 
        transition-transform duration-300
        ${slideOut ? "-translate-x-full" : "translate-x-0"}`}
        >
            <h2 className="text-[#fff] text-[18px] font-bold">
                {t("notification.title")}
            </h2>

            <ul className="space-y-4 mt-[30px] overflow-y-auto max-h-[450px] text-[#fff] scrollbar-hide">
                {notifications.map((noti) => (
                    <li
                        key={noti.id}
                        className="flex justify-between items-center hover:bg-[#111827] 
                        px-2 py-2 rounded-lg transition"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                onClick={() => {
                                    navigate(`/o/${noti.username}`);
                                    onClose();
                                }}
                                src={noti.avatar}
                                alt="avatar"
                                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                            />
                            <div>
                                <p className="text-sm">
                                    <span
                                        onClick={() => {
                                            navigate(`/o/${noti.username}`);
                                            onClose();
                                        }}
                                        className="font-semibold cursor-pointer"
                                    >
                                        {noti.username}
                                    </span>{" "}
                                    {noti.type === "like"
                                        ? t("notification.likeAction")
                                        : noti.type === "comment"
                                        ? t("notification.commentAction", {
                                              comment: noti.commentText,
                                          })
                                        : t("notification.saveAction")}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {t("notification.timeAgo", {
                                        time: noti.time,
                                    })}
                                </p>
                            </div>
                        </div>
                        {noti.postImage && (
                            <img
                                src={noti.postImage}
                                alt="post"
                                className="w-10 h-10 object-cover rounded-md"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
