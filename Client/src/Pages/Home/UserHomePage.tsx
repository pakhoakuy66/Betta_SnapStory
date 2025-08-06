import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useState } from "react";
import { SideMenu } from "@/components/customs/Home/SideMenu/sideMenu";
import { SuggestionList } from "@/components/customs/Home/Suggestion/SuggestionList";
import { Search } from "@/components/customs/Home/SideMenu/search";
import { NotificationPanel } from "@/components/customs/Home/SideMenu/notifications";
import { NewPost } from "@/components/customs/Home/SideMenu/newPost";

export function UserHome() {
    const [showSearch, setShowSearch] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showNewPost, setShowNewPost] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex justify-center w-full">
            <aside className="w-[80px] z-20 fixed left-0">
                <SideMenu
                    onSearch={() => setShowSearch(true)}
                    onNotification={() => setShowNotification(true)}
                    onNewPost={() => setShowNewPost(true)}
                    onFeed={() => navigate("/")}
                    onProfile={() => navigate("/:username")}
                />
            </aside>

            {/* Popup */}
            {/* Search - absolute, liền kề sidebar */}
            {showSearch && (
                <div className="absolute left-[10px] top-0 z-10">
                    <Search onClose={() => setShowSearch(false)} />
                </div>
            )}
            {/* Notification - absolute, liền kề sidebar */}
            {showNotification && (
                <div className="absolute left-[10px] top-0 z-10">
                    <NotificationPanel
                        onClose={() => setShowNotification(false)}
                    />
                </div>
            )}

            {/* NewPose - absolute, liền kề sidebar */}
            {showNewPost && (
                <div className="fixed inset-0 bg-black/50 z-40">
                    <NewPost onClose={() => setShowNewPost(false)} />
                </div>
            )}
            <main
                className={`flex justify-center w-full transition-all duration-300 
                ${
                    location.pathname === "/"
                        ? "max-w-[600px]"
                        : "max-w-[1100px]"
                } 
                ml-[80px]`}
            >
                <Outlet />
            </main>

            {location.pathname === "/" && (
                <aside className="w-[300px] ml-10">
                    <SuggestionList />
                </aside>
            )}
        </div>
    );
}
