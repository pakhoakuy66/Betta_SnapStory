import { useEffect, useState, useRef } from "react";
import { UserHead } from "@/components/customs/User/Header/UserHeader";
import { UserTab } from "@/components/customs/User/Tab_bar/UserTabar";
import { PostGrid } from "@/components/customs/User/Main/ListPost";

export function Profile() {
    return (
        <div className="w-full max-w-[1100px] mx-auto text-white mt-10 px-6">
            <div className="w-full border border-white rounded-md overflow-hidden">
                {/* Header Profile */}
                <UserHead />

                {/* Tabar */}
                <UserTab />

                {/* List Post */}
                <PostGrid />
            </div>
        </div>
    );
}
