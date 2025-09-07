export function CommentAction({ onPostDetail }: { onPostDetail: () => void }) {
    return (
        <div className="flex gap-2 items-center">
            <i
                onClick={onPostDetail}
                className="fa-regular fa-comment hover:scale-110 
                        duration-500 hover:drop-shadow-[0_0_10px_white] cursor-pointer"
            ></i>
            <div className="px-1 text-sm text-white">0</div>
        </div>
    );
}
