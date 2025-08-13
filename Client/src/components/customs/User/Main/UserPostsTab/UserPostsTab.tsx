import { useNavigate, useParams } from "react-router-dom";
import { PostGrid } from "@/components/customs/User/Main/ListPostUser/ListPost";

export function UserPostsTab({ profileOwner }: { profileOwner: string }) {
    const { username } = useParams();
    const navigate = useNavigate();

    return (
        <PostGrid
            posts={[
                { id: "abc123", owner: username ?? "", image: "" },
                { id: "def456", owner: username ?? "", image: "" },
            ]}
            onPostDetailUser={(owner, id) => navigate(`/${owner}/${id}`)}
            profileOwner={profileOwner}
        />
    );
}
