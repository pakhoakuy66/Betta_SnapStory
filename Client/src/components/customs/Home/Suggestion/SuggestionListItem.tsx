import { useNavigate } from "react-router-dom";

export function SuggestionListItem() {
    const username = "Thu";
    const navigate = useNavigate();

    return (
        <li
            className="flex justify-between items-center h-[70px] cursor-pointer"
            onClick={() => navigate(`/o/${username}`)}
        >
            <img
                src="./avatar"
                className="w-10 h-10 rounded-[50%] object-cover"
            />
            <nav className="ml-[15px] w-[100%]">
                <h2 className="text-[#fff] text-[13px] font-bold">Tên</h2>
                <span className="text-[#fff] text-[13px]">Gợi ý cho bạn</span>
            </nav>
            <button
                className="text-[#fff] w-[90px] text-[13px] text-end cursor-pointer
                        duration-300 hover:text-[#848383] h-[100%]"
            >
                Theo dõi
            </button>
        </li>
    );
}
