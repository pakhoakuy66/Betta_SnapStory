import { SideMenu } from "@/components/customs/sideMenu";
import { Feed } from "@/components/customs/feed";

export function UserHome() {
    return (
        <div className="flex">
            <aside className="w-[80px]">
                <SideMenu />
            </aside>
            <main className="flex-1 flex justify-center">
                <Feed />
            </main>
        </div>
    );
}
