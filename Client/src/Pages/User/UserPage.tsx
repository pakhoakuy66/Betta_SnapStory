import { useEffect, useState, useRef } from "react";
import { UserHead } from "@/components/customs/User/Header/UserHeader";
import { UserTab } from "@/components/customs/User/Tab_bar/UserTabar";
import { PostGrid } from "@/components/customs/User/Main/ListPost";
import { MenuImage } from "@/components/customs/User/Context_Menu/UserMenuImage";
import { EditUser } from "@/components/customs/User/EditProfile/EditUserProfile";

export function Profile() {
    const [showMenuImage, setShowMenuImage] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);

    return (
        <div className="w-full max-w-[1100px] mx-auto text-white mt-10 px-6">
            <div className="w-full overflow-hidden">
                {/* Header Profile */}
                <UserHead
                    onMenuImage={() => setShowMenuImage(true)}
                    onEditProfile={() => setShowEditProfile(true)}
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

                {/* Tabar */}
                <UserTab />

                {/* List Post */}
                <PostGrid />
            </div>
        </div>
    );
}
