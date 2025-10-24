import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { UserOtherHead } from "@/components/customs/OtherUser/Header/otherUserHeader";
import { OtherTab } from "@/components/customs/OtherUser/Tab_bar_Other/OtherTabar";
import { OtherPostsTab } from "@/components/customs/OtherUser/Main/OtherPostsTab/OtherPostTab";
import { OtherRepostTab } from "@/components/customs/OtherUser/Main/OtherRepostTab/OtherRepostTab";
import { OtherPostItemDetail } from "@/components/customs/OtherUser/Main/PostDetailOther/PostDetailOther";
import { FollowList } from "@/components/customs/Chores/Follow/UserFollow";
import { Report_Post } from "@/components/customs/Chores/Report_Post/Report_Post";
import { ReportAccount } from "@/components/customs/OtherUser/ReportOther.tsx/ReportAccount";
import { BlockConfirm } from "@/components/customs/OtherUser/BlockConfirm/BlockConfirm";
import { UnFollowConfirm } from "@/components/customs/Chores/Confirm_UnFollow/Confirm_UnFollow";

const initOtherFollowList = [
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

const initOtherFollowerList = [
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

    const [showReportPost, setShowReportPost] = useState(false);
    const [showReportAccount, setShowReportAccount] = useState(false);
    const [showBlockConfirm, setShowBlockConfirm] = useState(false);

    const postDetailOtherRef = useRef<HTMLDivElement>(null);
    const hidePostOpenRef = useRef(false);

    const isFollowRoute = location.pathname.endsWith("/follow");
    const isFollowerRoute = location.pathname.endsWith("/follower");
    const isRepostRoute = location.pathname.split("/").includes("repost");

    // Confirm Unfollow
    const [selectedUnfollowerUser, setSelectedUnfollowerUser] = useState<
        string | null
    >(null);
    const [otherFollowList, setOtherFollowList] = useState(initOtherFollowList);
    const [otherFollowerList, setOtherFollowerList] = useState(
        initOtherFollowerList
    );

    // Lưu previous route 1 lần trước khi mở detail
    useEffect(() => {
        if (!postId) {
            const base = `/o/${username ?? ""}`;
            let suffix = "";
            if (location.pathname.endsWith("/repost")) suffix = "/repost";
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
                !showReportPost
            ) {
                handleCloseUserOther();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [showReportPost, previousRoute]);

    useEffect(() => {
        hidePostOpenRef.current = showReportPost;
    }, [showReportPost]);

    // Action: Unfollow
    const handleConfirmUnfollow = () => {
        if (selectedUnfollowerUser) {
            setOtherFollowList((prev) =>
                prev.map((u) =>
                    u.name === selectedUnfollowerUser
                        ? { ...u, isFollowing: false }
                        : u
                )
            );
            setOtherFollowerList((prev) =>
                prev.map((u) =>
                    u.name === selectedUnfollowerUser
                        ? { ...u, isFollowing: false }
                        : u
                )
            );
            setSelectedUnfollowerUser(null);
        }
    };

    // Action: Follow
    const handleFollow = (username: string) => {
        setOtherFollowList((prev) =>
            prev.map((u) =>
                u.name === username ? { ...u, isFollowing: true } : u
            )
        );
        setOtherFollowerList((prev) =>
            prev.map((u) =>
                u.name === username ? { ...u, isFollowing: true } : u
            )
        );
    };

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
                            onFollow={handleFollow}
                            onUnfollow={(username) =>
                                setSelectedUnfollowerUser(username)
                            }
                            disableOutsideClose={!!selectedUnfollowerUser} // <-- disable outside close while modal open
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
                            onFollow={handleFollow}
                            onUnfollow={(username) =>
                                setSelectedUnfollowerUser(username)
                            }
                            disableOutsideClose={!!selectedUnfollowerUser} // <-- disable outside close while modal open
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

                {!isRepostRoute ? (
                    <OtherPostsTab profileOwner={profileOwner} />
                ) : (
                    <OtherRepostTab profileOwner={profileOwner} />
                )}

                {/* Unfollow Confirm */}
                {selectedUnfollowerUser && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
                        <UnFollowConfirm
                            open={true}
                            onClose={() => setSelectedUnfollowerUser(null)}
                            onConfirm={handleConfirmUnfollow}
                        />
                    </div>
                )}

                {postId && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center cursor-pointer">
                        <div ref={postDetailOtherRef} className="relative">
                            <div onClick={(e) => e.stopPropagation()}>
                                <OtherPostItemDetail
                                    onClose={handleCloseUserOther}
                                    onReportPost={() => setShowReportPost(true)}
                                    isReportPostOpen={hidePostOpenRef}
                                />
                            </div>
                            {showReportPost && (
                                <div
                                    className="fixed inset-0 bg-black/50 z-50"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Report_Post
                                        onClose={() => setShowReportPost(false)}
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
