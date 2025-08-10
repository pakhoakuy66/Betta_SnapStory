import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { UserHead } from "@/components/customs/User/Header/UserHeader";
import { UserTab } from "@/components/customs/User/Tab_bar/UserTabar";
import { PostGrid } from "@/components/customs/User/Main/ListPostUser/ListPost";
import { MenuImage } from "@/components/customs/User/Context_Menu/UserMenuImage";
import { EditUser } from "@/components/customs/User/EditProfile/EditUserProfile";
import { UserFollow } from "@/components/customs/User/ListFollow/UserFollow";
import { UserFollower } from "@/components/customs/User/ListFollower/UserFollower";
import { UserPostItemDetail } from "@/components/customs/User/Main/PostDetailUser/PostDetailUser";
import { HidePost } from "@/components/customs/Context_menu/hidePost";
import { MenuLanguages } from "@/components/customs/Settings/Languages/menuLanguages";
import { PersonalStatus } from "@/components/customs/Settings/PersonalStatus/PersonalStatus";
import { HistoryLogin } from "@/components/customs/Settings/HistoryLogin/HistoryLogin";

export function Profile() {
    const [showMenuImage, setShowMenuImage] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showHidePost, setShowHidePost] = useState(false);

    const postDetailUserRef = useRef<HTMLDivElement>(null);
    const hidePostOpenRef = useRef(false);

    const { username, id: postId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const isFollowRoute = location.pathname.endsWith("/follow");
    const isFollowerRoute = location.pathname.endsWith("/follower");
    const isLanguagesRoute = location.pathname === "/settings/languages";
    const isPersonalStatus = location.pathname === "/settings/personalStatus";
    const isHistoryLogin = location.pathname === "/settings/historyLogin";

    const handleCloseUser = () => {
        navigate("/:username"); // đóng popup thì quay về trang chính
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                postDetailUserRef.current &&
                !postDetailUserRef.current.contains(e.target as Node) &&
                !showHidePost // Chỉ đóng PostItemDetail khi HidePost không hiển thị
            ) {
                // setShowPostItemDetail(false);
                handleCloseUser();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [showHidePost]);

    // Cập nhật ref theo state
    useEffect(() => {
        hidePostOpenRef.current = showHidePost;
    }, [showHidePost]);

    return (
        <div className="w-full max-w-[1100px] mx-auto text-white mt-10 px-6">
            <div className="w-full overflow-hidden">
                {/* Header Profile */}
                <UserHead
                    onMenuImage={() => setShowMenuImage(true)}
                    onEditProfile={() => setShowEditProfile(true)}
                    onListFollow={() => navigate("/:username/follow")}
                    onListFollower={() => navigate("/:username/follower")}
                    onMenuLanguages={() => navigate("/settings/languages")}
                    onPersonalStatus={() =>
                        navigate("/settings/personalStatus")
                    }
                    onHistoryLogin={() => navigate("/settings/historyLogin")}
                />

                {/* Hiện edit profile */}
                {showEditProfile && (
                    <div className="fixed inset-0 bg-black/50 z-40">
                        <EditUser
                            onClose={() => setShowEditProfile(false)}
                            onMenuImage={() => setShowMenuImage(true)}
                        />
                    </div>
                )}

                {/* Hiện menu image */}
                {showMenuImage && (
                    <div className="fixed inset-0 bg-black/50 z-50">
                        <MenuImage onClose={() => setShowMenuImage(false)} />
                    </div>
                )}

                {/* Hiện list follow */}
                {isFollowRoute && (
                    <div
                        className="fixed inset-0 bg-black/75 z-40 
                        flex justify-center items-center"
                    >
                        <UserFollow onClose={handleCloseUser} />
                    </div>
                )}

                {/* Hiện list follower */}
                {isFollowerRoute && (
                    <div
                        className="fixed inset-0 bg-black/75 z-40 
                        flex justify-center items-center"
                    >
                        <UserFollower onClose={handleCloseUser} />
                    </div>
                )}

                {/* Settings */}
                {/* Setting Languages */}
                {isLanguagesRoute && (
                    <div
                        className="fixed inset-0 bg-black/75 z-40 
                        flex justify-center items-center cursor-pointer"
                    >
                        <MenuLanguages onClose={handleCloseUser} />
                    </div>
                )}

                {/* Setting Languages */}
                {isPersonalStatus && (
                    <div className="fixed inset-0 bg-black-75 z-40">
                        <PersonalStatus onClose={handleCloseUser} />
                    </div>
                )}

                {/* Setting History Login */}
                {isHistoryLogin && (
                    <div className="fixed inset-0 bg-black-75 z-40">
                        <HistoryLogin onClose={handleCloseUser} />
                    </div>
                )}

                {/* Tabar */}
                <UserTab />

                {/* List Post */}
                <PostGrid
                    postId="abc123"
                    username="khoa"
                    onPostDetailUser={() => navigate("/khoa/abc123")}
                />
                {postId && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center cursor-pointer">
                        <div ref={postDetailUserRef} className="relative">
                            {/* PostItemDetail */}
                            <div onClick={(e) => e.stopPropagation()}>
                                <UserPostItemDetail
                                    onClose={handleCloseUser}
                                    onHidePost={() => setShowHidePost(true)}
                                    isHidePostOpen={hidePostOpenRef}
                                />
                            </div>

                            {/* HidePost */}
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
