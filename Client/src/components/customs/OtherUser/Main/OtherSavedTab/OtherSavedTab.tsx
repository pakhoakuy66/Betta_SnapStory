import { useNavigate, useParams } from "react-router-dom";
import { PostGridOther } from "../ListPostOther/ListPost";

export function OtherSavedTab({ profileOwner }: { profileOwner: string }) {
    const { username } = useParams();
    const navigate = useNavigate();

    return (
        <PostGridOther
            posts={[
                // Ví dụ posts từ các user khác nhau được lưu
                { id: "xyz789", owner: "otherUser1", image: "" },
                { id: "qwe321", owner: "otherUser2", image: "" },
                { id: "qwe32d", owner: "otherUser2", image: "" },
                { id: "qwe32d", owner: "otherUser2", image: "" },
                { id: "qwe32d", owner: "otherUser2", image: "" },
                { id: "qwe32d", owner: "otherUser4", image: "" },
                { id: "qwe32d", owner: "otherUser29", image: "" },
                { id: "qwe32d", owner: "otherUser2", image: "" },
            ]}
            onPostDetailUser={(owner, id) => navigate(`/o/${owner}/${id}`)}
            profileOwner={profileOwner}
        />
    );
}
