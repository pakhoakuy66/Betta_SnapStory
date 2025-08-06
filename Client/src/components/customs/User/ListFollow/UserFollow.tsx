import { ItemFoollow } from "./ItemFollow";

export function UserFollow() {
    return (
        <div className="flex h-screen justify-center items-center transition-all duration-300 ease-in-out">
            <div
                className="bg-[#000] shadow-xl w-[450px] p-3
                h-[350px] rounded-sm drop-shadow-[0_0_1px_white] 
                duration-300 hover:drop-shadow-[0_0_3px_white] text-[#C7D5E0]"
            >
                <div className="w-[100%] h-[40px] border-b-2 border-[#333]">
                    <h2 className="text-[20px] text-center font-bold block">
                        Đang theo dõi
                    </h2>
                </div>
                <ul className="w-[100%] max-h-[290px] mt-2 overflow-y-auto scrollbar-hide">
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                    <ItemFoollow />
                </ul>
            </div>
        </div>
    );
}
