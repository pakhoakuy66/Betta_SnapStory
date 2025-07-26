import { SideMenu } from "@/components/customs/sideMenu";
import { Feed } from "@/components/customs/feed";
import { SuggestionList } from "@/components/customs/SuggestionList";

export function UserHome() {
    return (
        <div className="flex justify-center w-full">
            <aside className="w-[80px] fixed left-0">
                <SideMenu />
            </aside>

            <main className="flex justify-center max-w-[600px] w-full">
                <Feed />
            </main>

            <aside className="w-[300px] ml-10">
                <SuggestionList />
            </aside>
        </div>
    );
}
