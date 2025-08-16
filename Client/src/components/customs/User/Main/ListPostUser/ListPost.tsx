import { useLocation, useNavigate } from "react-router-dom";

export function PostGrid({
    posts,
    onPostDetailUser,
    profileOwner,
}: {
    posts: { id: string; owner: string; image: string }[];
    onPostDetailUser: (owner: string, id: string) => void;
    profileOwner: string;
}) {
    const location = useLocation();
    const isSavedRoute = location.pathname.includes("/saved");
    const navigate = useNavigate();

    const handlePostClick = (post: {
        id: string;
        owner: string;
        image: string;
    }) => {
        if (isSavedRoute) {
            navigate(`/${post.owner}/${post.id}`, {
                state: { fromSaved: true },
            });
            onPostDetailUser(post.owner, post.id);
        } else {
            navigate(`/${profileOwner}/${post.id}`, {
                state: { fromSaved: false },
            });
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
