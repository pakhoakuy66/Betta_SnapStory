import { useNavigate, useParams } from "react-router-dom";
import { PostGrid } from "@/components/customs/User/Main/ListPostUser/ListPost";

export function UserPrivateTab({ profileOwner }: { profileOwner: string }) {
    const { username } = useParams();
    const navigate = useNavigate();

    return (
        <PostGrid
            posts={[
                { id: "hide123", owner: username ?? "", image: "" },
                { id: "hide456", owner: username ?? "", image: "" },
                { id: "hide491", owner: username ?? "", image: "" },
            ]}
            onPostDetailUser={(owner, id) => navigate(`/${owner}/${id}`)}
            profileOwner={profileOwner}
        />
    );
}
