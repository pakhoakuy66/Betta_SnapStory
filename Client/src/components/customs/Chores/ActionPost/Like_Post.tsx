import { useState } from "react";

export function LikeAction() {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="flex gap-2 items-center">
            <i
                onClick={toggleLike}
                className={`cursor-pointer duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_white]
                ${
                    liked
                        ? "fa-solid fa-heart text-red-500"
                        : "fa-regular fa-heart"
                }
                `}
            ></i>
            <div className="px-1 text-sm text-white">{count}</div>
        </div>
    );
}
