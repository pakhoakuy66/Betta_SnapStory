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

export function PostGrid() {
    return (
        <main className="grid grid-cols-3 gap-1">
            <div className="relative w-full aspect-square cursor-pointer">
                <img alt="" className="w-full h-full object-cover" />
                {/* icon reel nếu cần */}
            </div>
            <div className="relative w-full aspect-square cursor-pointer">
                <img alt="" className="w-full h-full object-cover" />
                {/* icon reel nếu cần */}
            </div>
            <div className="relative w-full aspect-square cursor-pointer">
                <img alt="" className="w-full h-full object-cover" />
                {/* icon reel nếu cần */}
            </div>
        </main>
    );
}
