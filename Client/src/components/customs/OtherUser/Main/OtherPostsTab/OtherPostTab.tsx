import { useNavigate, useParams } from "react-router-dom";
import { PostGridOther } from "../ListPostOther/ListPost";

export function OtherPostsTab({ profileOwner }: { profileOwner: string }) {
    const { username } = useParams();
    const navigate = useNavigate();

    return (
        <PostGridOther
            posts={[
                { id: "abc123", owner: username ?? "", image: "" },
                { id: "def456", owner: username ?? "", image: "" },
                { id: "def456", owner: username ?? "", image: "" },
                { id: "def456", owner: username ?? "", image: "" },
                { id: "def456", owner: username ?? "", image: "" },
                { id: "def456", owner: username ?? "", image: "" },
            ]}
            onPostDetailUser={(owner, id) => navigate(`/o/${owner}/${id}`)}
            profileOwner={profileOwner}
        />
    );
}
