import { useLocation } from "react-router-dom";

export function PostGridOther({
    posts,
    onPostDetailUser,
    profileOwner,
}: {
    posts: { id: string; owner: string; image: string }[];
    onPostDetailUser: (owner: string, id: string) => void;
    profileOwner: string;
}) {
    const location = useLocation();
    const isRepostRoute = location.pathname.includes("/repost");

    const handlePostClick = (post: {
        id: string;
        owner: string;
        image: string;
    }) => {
        if (isRepostRoute) {
            window.history.pushState(
                null,
                "",
                `/${profileOwner}/repost/${post.id}`
            );
            onPostDetailUser(post.owner, post.id);
        } else {
            window.history.pushState(null, "", `/${profileOwner}/${post.id}`);
            onPostDetailUser(profileOwner, post.id);
        }
    };
    return (
        <main className="grid grid-cols-3 gap-1">
            {posts.map((post) => (
                <div
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="relative w-full aspect-square cursor-pointer"
                >
                    <img
                        src={post.image || "https://via.placeholder.com/300"}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </main>
    );
}
