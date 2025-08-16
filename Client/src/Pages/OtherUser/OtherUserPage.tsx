import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { UserOtherHead } from "@/components/customs/OtherUser/Header/otherUserHeader";
import { OtherTab } from "@/components/customs/OtherUser/Tab_bar_Other/OtherTabar";
import { OtherPostsTab } from "@/components/customs/OtherUser/Main/OtherPostsTab/OtherPostTab";
import { OtherSavedTab } from "@/components/customs/OtherUser/Main/OtherSavedTab/OtherSavedTab";
import { OtherPostItemDetail } from "@/components/customs/OtherUser/Main/PostDetailOther/PostDetailOther";
import { FollowList } from "@/components/customs/Follow/UserFollow";
import { HidePost } from "@/components/customs/Context_menu/hidePost";
import { ReportAccount } from "@/components/customs/OtherUser/ReportOther.tsx/ReportAccount";
import { BlockConfirm } from "@/components/customs/OtherUser/BlockConfirm/BlockConfirm";

const otherFollowList = [
    {
        id: "1",
        avatar: "/avatar1.png",
        name: "Nguyễn Văn A",
        isFollowing: true,
    },
    { id: "3", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
    { id: "4", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
    { id: "5", avatar: "/avatar3.png", name: "Lê Văn B", isFollowing: true },
    { id: "6", avatar: "/avatar3.png", name: "Lê Văn K", isFollowing: true },
];

const otherFollowerList = [
    {
        id: "1",
        avatar: "/avatar1.png",
        name: "Nguyễn Văn A",
        isFollowing: true,
    },
    { id: "2", avatar: "/avatar2.png", name: "Trần Thị B", isFollowing: false },
    { id: "3", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
    { id: "4", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
    { id: "5", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
    { id: "6", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
    { id: "7", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
    { id: "8", avatar: "/avatar3.png", name: "Lê Văn C", isFollowing: true },
];

export function OtherUserProfile() {
    const { username, id: postId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Chủ profile gốc
    const profileOwner = username ?? "";

    // Route trước khi mở detail
    const [previousRoute, setPreviousRoute] = useState<string>("");

    const [showHidePost, setShowHidePost] = useState(false);
    const [showReportAccount, setShowReportAccount] = useState(false);
    const [showBlockConfirm, setShowBlockConfirm] = useState(false);

    const postDetailOtherRef = useRef<HTMLDivElement>(null);
    const hidePostOpenRef = useRef(false);

    const isFollowRoute = location.pathname.endsWith("/follow");
    const isFollowerRoute = location.pathname.endsWith("/follower");
    const isSavedRoute = location.pathname.split("/").includes("saved");

    // Lưu previous route 1 lần trước khi mở detail
    useEffect(() => {
        if (!postId) {
            const base = `/o/${username ?? ""}`;
            let suffix = "";
            if (location.pathname.endsWith("/saved")) suffix = "/saved";
            else if (location.pathname.endsWith("/follow")) suffix = "/follow";
            else if (location.pathname.endsWith("/follower"))
                suffix = "/follower";
            // Có thể thêm các suffix khác nếu cần (ví dụ: /languages, nhưng hiện không dùng ở other user)

            setPreviousRoute(`${base}${suffix}`);
        }
    }, [username, postId, location.pathname]);

    const handleCloseUserOther = () => {
        if (previousRoute) navigate(previousRoute);
        else navigate(`/o/${profileOwner}`);
    };

    const handleClose = () => {
        navigate(`/o/${profileOwner}`); // đóng popup thì quay về trang chính
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                postDetailOtherRef.current &&
                !postDetailOtherRef.current.contains(e.target as Node) &&
                !showHidePost
            ) {
                handleCloseUserOther();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [showHidePost, previousRoute]);

    useEffect(() => {
        hidePostOpenRef.current = showHidePost;
    }, [showHidePost]);

    return (
        <div className="w-full max-w-[1100px] mx-auto text-white mt-10 px-6">
            <div className="w-full overflow-hidden">
                <UserOtherHead
                    username={username ?? ""}
                    onListFollow={() => navigate(`/o/${profileOwner}/follow`)}
                    onListFollower={() =>
                        navigate(`/o/${profileOwner}/follower`)
                    }
                    onReportAccount={() => setShowReportAccount(true)}
                    onBlockConfirm={() => setShowBlockConfirm(true)}
                />

                {isFollowRoute && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center">
                        <FollowList
                            onClose={handleClose}
                            title="Đang theo dõi"
                            follows={otherFollowList}
                            isCurrentUser={false}
                        />
                    </div>
                )}

                {isFollowerRoute && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center">
                        <FollowList
                            onClose={handleClose}
                            title="Người theo dõi"
                            follows={otherFollowerList}
                            isCurrentUser={false}
                        />
                    </div>
                )}

                {showReportAccount && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center">
                        <ReportAccount
                            onClose={() => setShowReportAccount(false)}
                        />
                    </div>
                )}

                {showBlockConfirm && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center">
                        <BlockConfirm
                            onClose={() => setShowBlockConfirm(false)}
                            username={username ?? ""}
                        />
                    </div>
                )}

                <OtherTab profileOwner={profileOwner} />

                {!isSavedRoute ? (
                    <OtherPostsTab profileOwner={profileOwner} />
                ) : (
                    <OtherSavedTab profileOwner={profileOwner} />
                )}

                {postId && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center cursor-pointer">
                        <div ref={postDetailOtherRef} className="relative">
                            <div onClick={(e) => e.stopPropagation()}>
                                <OtherPostItemDetail
                                    onClose={handleCloseUserOther}
                                    onHidePost={() => setShowHidePost(true)}
                                    isHidePostOpen={hidePostOpenRef}
                                />
                            </div>
                            {showHidePost && (
                                <div
                                    className="fixed inset-0 bg-black/50 z-50"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <HidePost
                                        onClose={() => setShowHidePost(false)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
