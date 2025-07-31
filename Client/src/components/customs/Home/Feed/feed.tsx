import { useState } from "react";
import { PostItem } from "./PostItem";
import { PostItemDetail } from "./PostItemDetail";

export function Feed() {
    const [showPostItemDetail, setShowPostItemDetail] = useState(false);

    return (
        <main
            className="bg-[#000] shadow-md text-white
                h-auto w-[600px] m-10"
        >
            <article className="grid justify-center w-[100%]">
                <PostItem onPostDetail={() => setShowPostItemDetail(true)} />
                <PostItem onPostDetail={() => setShowPostItemDetail(true)} />
            </article>

            {showPostItemDetail && (
                <div
                    className="fixed inset-0 bg-black/75 z-50 flex justify-center items-center cursor-pointer"
                    onClick={(e) => {
                        // Chỉ đóng khi click vào overlay (background), không phải nội dung modal
                        if (e.target === e.currentTarget) {
                            setShowPostItemDetail(false);
                        }
                    }}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <PostItemDetail
                            onClose={() => setShowPostItemDetail(false)}
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
