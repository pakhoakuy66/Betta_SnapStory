import { useState } from "react";
import { SideMenu } from "@/components/customs/sideMenu";
import { Feed } from "@/components/customs/feed";
import { SuggestionList } from "@/components/customs/SuggestionList";
import { Search } from "@/components/customs/search";
import { NotificationPanel } from "@/components/customs/notifications";
import { use } from "react";

export function UserHome() {
    const [showSearch, setShowSearch] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    return (
        <div className="flex justify-center w-full">
            <aside className="w-[80px] z-20 fixed left-0">
                <SideMenu
                    onSearch={() => setShowSearch(true)}
                    onNotification={() => setShowNotification(true)}
                />
            </aside>
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
            <main className="flex justify-center max-w-[600px] w-full">
                <Feed />
            </main>

            <aside className="w-[300px] ml-10">
                <SuggestionList />
            </aside>
        </div>
    );
}
