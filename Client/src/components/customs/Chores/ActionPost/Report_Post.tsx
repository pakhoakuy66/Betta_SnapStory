import { useState } from "react";

export function RepostAction() {
    const [repost, setRepost] = useState(false);
    const [count, setCount] = useState(0);

    const toggleRepost = () => {
        if (repost) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setRepost(!repost);
    };

    return (
        <div className="flex gap-2 text-[20px]">
            <i
                onClick={toggleRepost}
                className="fas fa-repeat hover:rotate-90 hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
            ></i>
            <div className="px-1 text-sm text-white">{count}</div>
        </div>
    );
}
