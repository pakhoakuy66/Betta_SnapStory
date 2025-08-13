import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { UserHead } from "@/components/customs/User/Header/UserHeader";
import { UserTab } from "@/components/customs/User/Tab_bar/UserTabar";
import { MenuImage } from "@/components/customs/User/Context_Menu/UserMenuImage";
import { EditUser } from "@/components/customs/User/EditProfile/EditUserProfile";
import { UserFollow } from "@/components/customs/User/ListFollow/UserFollow";
import { UserFollower } from "@/components/customs/User/ListFollower/UserFollower";
import { UserPostItemDetail } from "@/components/customs/User/Main/PostDetailUser/PostDetailUser";
import { HidePost } from "@/components/customs/Context_menu/hidePost";
import { MenuLanguages } from "@/components/customs/Settings/Languages/menuLanguages";
import { PersonalStatus } from "@/components/customs/Settings/PersonalStatus/PersonalStatus";
import { HistoryLogin } from "@/components/customs/Settings/HistoryLogin/HistoryLogin";
import { UserPostsTab } from "@/components/customs/User/Main/UserPostsTab/UserPostsTab";
import { UserSavedTab } from "@/components/customs/User/Main/UserSavedTab.tsx/UserSavedTab";

export function Profile() {
    const { username, id: postId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Chủ profile gốc
    const [profileOwner] = useState<string>(username ?? "");

    // Route trước khi mở detail
    const [previousRoute, setPreviousRoute] = useState<string>("");

    const [showMenuImage, setShowMenuImage] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showHidePost, setShowHidePost] = useState(false);

    const postDetailUserRef = useRef<HTMLDivElement>(null);
    const hidePostOpenRef = useRef(false);

    const isFollowRoute = location.pathname.endsWith("/follow");
    const isFollowerRoute = location.pathname.endsWith("/follower");
    const isLanguagesRoute = location.pathname === "/settings/languages";
    const isPersonalStatus = location.pathname === "/settings/personalStatus";
    const isHistoryLogin = location.pathname === "/settings/historyLogin";
    const isSavedRoute = location.pathname.split("/").includes("saved");

    // Lưu previous route 1 lần trước khi mở detail
    useEffect(() => {
        if (!postId) {
            setPreviousRoute(location.pathname);
        }
    }, [location.pathname, postId]);

    const handleCloseUser = () => {
        if (previousRoute) {
            navigate(previousRoute);
        } else {
            navigate(`/${profileOwner}`);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                postDetailUserRef.current &&
                !postDetailUserRef.current.contains(e.target as Node) &&
                !showHidePost
            ) {
                handleCloseUser();
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
                <UserHead
                    onMenuImage={() => setShowMenuImage(true)}
                    onEditProfile={() => setShowEditProfile(true)}
                    onListFollow={() => navigate(`/${profileOwner}/follow`)}
                    onListFollower={() => navigate(`/${profileOwner}/follower`)}
                    onMenuLanguages={() => navigate("/settings/languages")}
                    onPersonalStatus={() =>
                        navigate("/settings/personalStatus")
                    }
                    onHistoryLogin={() => navigate("/settings/historyLogin")}
                />

                {showEditProfile && (
                    <div className="fixed inset-0 bg-black/50 z-40">
                        <EditUser
                            onClose={() => setShowEditProfile(false)}
                            onMenuImage={() => setShowMenuImage(true)}
                        />
                    </div>
                )}

                {showMenuImage && (
                    <div className="fixed inset-0 bg-black/50 z-50">
                        <MenuImage onClose={() => setShowMenuImage(false)} />
                    </div>
                )}

                {isFollowRoute && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center">
                        <UserFollow onClose={handleCloseUser} />
                    </div>
                )}

                {isFollowerRoute && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center">
                        <UserFollower onClose={handleCloseUser} />
                    </div>
                )}

                {isLanguagesRoute && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center cursor-pointer">
                        <MenuLanguages onClose={handleCloseUser} />
                    </div>
                )}

                {isPersonalStatus && (
                    <div className="fixed inset-0 bg-black-75 z-40">
                        <PersonalStatus onClose={handleCloseUser} />
                    </div>
                )}

                {isHistoryLogin && (
                    <div className="fixed inset-0 bg-black-75 z-40">
                        <HistoryLogin onClose={handleCloseUser} />
                    </div>
                )}

                <UserTab profileOwner={profileOwner} />

                {!isSavedRoute ? (
                    <UserPostsTab profileOwner={profileOwner} />
                ) : (
                    <UserSavedTab profileOwner={profileOwner} />
                )}

                {postId && (
                    <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center cursor-pointer">
                        <div ref={postDetailUserRef} className="relative">
                            <div onClick={(e) => e.stopPropagation()}>
                                <UserPostItemDetail
                                    onClose={handleCloseUser}
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
