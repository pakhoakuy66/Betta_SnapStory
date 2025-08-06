import { SuggestionListItem } from "./SuggestionListItem";

export function SuggestionList() {
    return (
        <aside className="w-[300px] m-10 p-2">
            <nav className="flex justify-between items-center h-[25px] w-[100%]">
                <h1 className="text-[#fff] text-[18px] font-bold">
                    Gợi ý cho bạn
                </h1>
                <span
                    className="text-[#fff] text-[13px] text-end cursor-pointer 
                    duration-300 hover:text-[#848383]"
                >
                    Tải lại
                </span>
            </nav>
            <ul
                className="w-[100%] mt-5 max-h-[350px] overflow-y-auto
                scrollbar-hide"
            >
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
                <SuggestionListItem />
            </ul>
        </aside>
    );
}
