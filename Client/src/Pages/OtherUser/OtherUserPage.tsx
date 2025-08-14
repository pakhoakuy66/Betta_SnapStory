import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { UserOtherHead } from "@/components/customs/OtherUser/Header/otherUserHeader";
import { OtherTab } from "@/components/customs/OtherUser/Tab_bar_Other/OtherTabar";

export function OtherUser() {
    return (
        <div className="w-full max-w-[1100px] mx-auto text-white mt-10 px-6">
            <div className="w-full overflow-hidden">
                <UserOtherHead />

                <OtherTab profileOwner="" />
            </div>
        </div>
    );
}
