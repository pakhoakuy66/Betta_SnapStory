import { useTranslation } from "react-i18next";
import { SuggestionListItem } from "./SuggestionListItem";
import type { SuggestionUser } from "./SuggestionListItem";

const suggestedUsers: SuggestionUser[] = [
    { id: 1, username: "Thu", avatar: "./avatar1.png", followed: false },
    { id: 2, username: "Khoa", avatar: "./avatar2.png", followed: false },
    { id: 3, username: "Lan", avatar: "./avatar3.png", followed: false },
    { id: 4, username: "Minh", avatar: "./avatar4.png", followed: false },
    { id: 5, username: "Huy", avatar: "./avatar5.png", followed: false },
    { id: 6, username: "Trang", avatar: "./avatar6.png", followed: false },
    { id: 7, username: "Long", avatar: "./avatar7.png", followed: false },
    { id: 8, username: "An", avatar: "./avatar8.png", followed: false },
    { id: 9, username: "Hoa", avatar: "./avatar9.png", followed: false },
    { id: 10, username: "Nam", avatar: "./avatar10.png", followed: false },
];

export function SuggestionList() {
    const { t } = useTranslation();

    return (
        <aside className="w-[300px] m-10 p-2">
            <nav className="flex justify-between items-center h-[25px] w-[100%]">
                <h1 className="text-[#fff] text-[18px] font-bold">
                    {t("suggestionList.title")}
                </h1>
                <span
                    className="text-[#fff] text-[13px] text-end cursor-pointer 
                    duration-300 hover:text-[#848383]"
                >
                    {t("suggestionList.reload")}
                </span>
            </nav>
            <ul
                className="w-[100%] mt-5 max-h-[350px] overflow-y-auto
                scrollbar-hide"
            >
                {suggestedUsers.map((user) => (
                    <SuggestionListItem key={user.id} user={user} />
                ))}
            </ul>
        </aside>
    );
}
