import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { PostItem } from "./PostItem";
import { PostItemDetail } from "./PostItemDetail";
import { HidePost } from "../../Context_menu/hidePost";

export function Feed() {
    const { username, id: postId } = useParams();
    const navigate = useNavigate();
    // const [showPostItemDetail, setShowPostItemDetail] = useState(false);
    const [showHidePost, setShowHidePost] = useState(false);

    const hidePostOpenRef = useRef(false);
    const postDetailRef = useRef<HTMLDivElement>(null);

    const handleCloseDetail = () => {
        navigate("/"); // đóng popup thì quay về trang chính
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                postDetailRef.current &&
                !postDetailRef.current.contains(e.target as Node) &&
                !showHidePost // Chỉ đóng PostItemDetail khi HidePost không hiển thị
            ) {
                // setShowPostItemDetail(false);
                handleCloseDetail();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [showHidePost]);

    // Cập nhật ref theo state
    useEffect(() => {
        hidePostOpenRef.current = showHidePost;
    }, [showHidePost]);

    return (
        <main
            className="bg-[#000] shadow-md text-white
                h-auto w-[600px] m-10"
        >
            <article className="grid justify-center w-[100%]">
                <PostItem
                    postId="abc123"
                    username="khoa"
                    onPostDetail={() => navigate("/khoa/post/abc123")}
                    onHidePost={() => setShowHidePost(true)}
                />
                <PostItem
                    postId="xyz789"
                    username="tien"
                    onPostDetail={() => navigate("/tien/post/xyz789")}
                    onHidePost={() => setShowHidePost(true)}
                />
            </article>

            {postId && (
                <div className="fixed inset-0 bg-black/75 z-40 flex justify-center items-center cursor-pointer">
                    <div ref={postDetailRef} className="relative">
                        {/* PostItemDetail */}
                        <div onClick={(e) => e.stopPropagation()}>
                            <PostItemDetail
                                onClose={handleCloseDetail}
                                onHidePost={() => setShowHidePost(true)}
                                isHidePostOpen={hidePostOpenRef}
                            />
                        </div>

                        {/* HidePost */}
                        {showHidePost && (
                            <div
                                className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <HidePost
                                    onClose={() => setShowHidePost(false)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {showHidePost && (
                <div
                    className="fixed inset-0 bg-black/75 z-50 flex justify-center items-center cursor-pointer"
                    onClick={(e) => {
                        // Chỉ đóng khi click vào overlay (background), không phải nội dung modal
                        if (e.target === e.currentTarget) {
                            setShowHidePost(false);
                        }
                    }}
                >
                    <div
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <HidePost onClose={() => setShowHidePost(false)} />
                    </div>
                </div>
            )}
        </main>
    );
}
