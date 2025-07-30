import { useState, useRef } from "react";

export function NewPost() {
    const [content, setContent] = useState("");
    const [images, setImages] = useState<string[]>([]);

    const scrollRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown.current = true;
        startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
        scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX.current;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDown.current = false;
    };

    const handleMouseLeave = () => {
        isDown.current = false;
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <form
                className="bg-[#000] p-3 shadow-xl w-[600px] 
                h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div
                    className="relative flex items-center w-[100%] h-[50px] 
                    border-b-2 border-[#604d4d]"
                >
                    <span
                        className="text-[#fff] cursor-pointer
                        duration-300 hover:text-[#848383]"
                    >
                        Hủy
                    </span>
                    <h2
                        className="absolute left-1/2 -translate-x-1/2 text-[#fff] 
                        text-[18px] text-center font-bold"
                    >
                        Tạo bài viết mới
                    </h2>
                </div>

                {/* Content area */}
                <div className="flex mt-4">
                    <img
                        src="https://i.pravatar.cc/40?u=akuy66"
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />

                    {/* Thread input */}
                    <nav className="flex-1">
                        <h3 className="text-sm mb-1 text-[#fff] font-bold">
                            akuy.66
                        </h3>
                        <textarea
                            className="bg-transparent text-[#fff] w-full resize-none text-sm outline-none placeholder-gray-500"
                            placeholder="Có gì mới?"
                            rows={3}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            multiple
                            hidden
                            onChange={(e) => {
                                const files = Array.from(e.target.files || []);
                                const urls = files.map((file) =>
                                    URL.createObjectURL(file)
                                );
                                setImages((prev) => [...prev, ...urls]);
                            }}
                        />
                    </nav>
                </div>

                {images.length > 0 && (
                    <div
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        className="flex gap-3 ml-14 mt-4 pb-2 overflow-x-hidden 
                        cursor-grab active:cursor-grabbing select-none"
                    >
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`preview-${idx}`}
                                className="h-[120px] rounded-md object-cover shrink-0 pointer-events-none"
                            />
                        ))}
                    </div>
                )}

                {/* Icons */}
                <div className="flex items-center gap-4 text-gray-400 mt-4 ml-14">
                    <label htmlFor="imageUpload">
                        <i
                            className="fa-regular fa-image cursor-pointer 
                        text-[15px] hover:text-[20px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                        />
                    </label>
                    <i
                        className="fa-regular fa-face-smile cursor-pointer 
                        text-[15px] hover:text-[20px] duration-500 hover:drop-shadow-[0_0_10px_white]"
                    />
                </div>

                <div className="flex justify-between">
                    {/* Quyền trả lời */}
                    <div
                        className="mt-6 text-[13px] ml-1 text-[#b7b7b7] cursor-pointer
                        duration-300 hover:text-[#848383]"
                    >
                        Ai có thể xem bài viết này?
                    </div>

                    {/* Button Đăng */}
                    <div className="flex justify-end mt-4">
                        <button
                            className={`w-[90px] h-[30px] text-white rounded-sm drop-shadow-[0_0_1px_white] ${
                                content.trim()
                                    ? `bg-[#151d2a] text-white duration-300 hover:drop-shadow-[0_0_3px_white] 
                                        active:scale-95 active:drop-shadow-[0_0_5px_whites] cursor-pointer`
                                    : `bg-gray-500 text-gray-300 cursor-not-allowed`
                            }`}
                            disabled={!content.trim()}
                        >
                            Đăng
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
