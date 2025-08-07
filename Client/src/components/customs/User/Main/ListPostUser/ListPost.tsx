import { useState, useEffect, useRef } from "react";

// export function PostGrid({ posts }: { posts: Post[] }) {
//     return (
//         <div className="grid grid-cols-3 gap-1">
//             {posts.map((post) => (
//                 <div key={post.id} className="relative w-full aspect-square">
//                     <img
//                         src={post.image}
//                         alt=""
//                         className="w-full h-full object-cover"
//                     />
//                     {/* icon reel nếu cần */}
//                 </div>
//             ))}
//         </div>
//     );
// }

export function PostGrid({
    postId,
    username,
    onPostDetailUser,
}: {
    postId: string;
    username: string;
    onPostDetailUser: () => void;
}) {
    return (
        <main className="grid grid-cols-3 gap-1">
            <div
                onClick={onPostDetailUser}
                className="relative w-full aspect-square cursor-pointer"
            >
                <img alt="" className="w-full h-full object-cover" />
                {/* icon reel nếu cần */}
            </div>
            <div
                onClick={onPostDetailUser}
                className="relative w-full aspect-square cursor-pointer"
            >
                <img alt="" className="w-full h-full object-cover" />
                {/* icon reel nếu cần */}
            </div>
            <div
                onClick={onPostDetailUser}
                className="relative w-full aspect-square cursor-pointer"
            >
                <img alt="" className="w-full h-full object-cover" />
                {/* icon reel nếu cần */}
            </div>
        </main>
    );
}
