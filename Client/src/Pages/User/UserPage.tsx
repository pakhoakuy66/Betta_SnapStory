import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { UserHead } from "@/components/customs/User/Header/UserHeader";
import { UserTab } from "@/components/customs/User/Tab_bar/UserTabar";
import { PostGrid } from "@/components/customs/User/Main/ListPostUser/ListPost";
import { MenuImage } from "@/components/customs/User/Context_Menu/UserMenuImage";
import { EditUser } from "@/components/customs/User/EditProfile/EditUserProfile";
import { UserFollow } from "@/components/customs/User/ListFollow/UserFollow";
import { UserFollower } from "@/components/customs/User/ListFollower/UserFollower";

export function Profile() {
    const [showMenuImage, setShowMenuImage] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);

    const { username } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const isFollowRoute = location.pathname.endsWith("/follow");
    const isFollowerRoute = location.pathname.endsWith("/follower");

    const handleCloseListFollow = () => {
        navigate("/:username"); // đóng popup thì quay về trang chính
    };

    return (
        <div className="w-full max-w-[1100px] mx-auto text-white mt-10 px-6">
            <div className="w-full overflow-hidden">
                {/* Header Profile */}
                <UserHead
                    onMenuImage={() => setShowMenuImage(true)}
                    onEditProfile={() => setShowEditProfile(true)}
                    onListFollow={() => navigate("/:username/follow")}
                    onListFollower={() => navigate("/:username/follower")}
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
                        flex justify-center items-center cursor-pointer"
                    >
                        <UserFollow onClose={handleCloseListFollow} />
                    </div>
                )}

                {/* Hiện list follower */}
                {isFollowerRoute && (
                    <div
                        className="fixed inset-0 bg-black/75 z-40 
                        flex justify-center items-center cursor-pointer"
                    >
                        <UserFollower onClose={handleCloseListFollow} />
                    </div>
                )}

                {/* Tabar */}
                <UserTab />

                {/* List Post */}
                <PostGrid />
            </div>
        </div>
    );
}
