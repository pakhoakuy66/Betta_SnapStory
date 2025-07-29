import React from "react";

const notifications = [
    {
        id: 1,
        avatar: "https://i.pravatar.cc/50?img=1",
        username: "linh.ng",
        action: "đã thích bài viết của bạn",
        time: "2 giờ trước",
        postImage: "https://source.unsplash.com/random/50x50?sig=1",
    },
    {
        id: 2,
        avatar: "https://i.pravatar.cc/50?img=2",
        username: "khanhtran",
        action: 'đã bình luận: "Hay quá!"',
        time: "3 giờ trước",
        postImage: "https://source.unsplash.com/random/50x50?sig=2",
    },
];

export function NotificationPanel() {
    return (
        <div className="h-screen w-[350px] p-5 bg-[#000] border-r-1 border-[#604d4d] rounded-r-xl">
            <h2 className="text-[#fff] text-[18px] font-bold">Thông báo</h2>
            <ul className="space-y-4 mt-[30px] text-[#fff]">
                {notifications.map((noti) => (
                    <li
                        key={noti.id}
                        className="flex justify-between items-center hover:bg-[#111827] px-2 py-2 rounded-lg transition"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src={noti.avatar}
                                alt="avatar"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm">
                                    <span className="font-semibold">
                                        {noti.username}
                                    </span>{" "}
                                    {noti.action}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {noti.time}
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
