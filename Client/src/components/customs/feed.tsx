import { PostItem } from "./PostItem";

export function Feed() {
    return (
        <main
            className="bg-[#000] shadow-md text-white
                h-auto w-[600px] m-10"
        >
            <article className="grid justify-center w-[100%]">
                <PostItem />
            </article>
        </main>
    );
}
