import { useNavigate, useParams } from "react-router-dom";
import { PostGrid } from "@/components/customs/User/Main/ListPostUser/ListPost";

export function UserRepostTab({ profileOwner }: { profileOwner: string }) {
    const { username } = useParams();
    const navigate = useNavigate();

    return (
        <PostGrid
            posts={[
                // Ví dụ posts từ các user khác nhau được lưu
                { id: "xyz789", owner: "otherUser1", image: "" },
                { id: "qwe321", owner: "otherUser2", image: "" },
                { id: "qwe32d", owner: "otherUser2", image: "" },
            ]}
            onPostDetailUser={(owner, id) => navigate(`/${owner}/${id}`)}
            profileOwner={profileOwner}
        />
    );
}
