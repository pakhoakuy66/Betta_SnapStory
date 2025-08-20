import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function ReportProblem({ onClose }: { onClose: () => void }) {
    const [content, setContent] = useState("");
    const [slideOut, setSlideOut] = useState(false);

    const reportProblemRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                reportProblemRef.current &&
                !reportProblemRef.current.contains(e.target as Node)
            ) {
                setSlideOut(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () =>
            document.removeEventListener("mousedown", handleClickOutSide);
    }, [onClose]);

    const handleSend = () => {
        if (content) {
            window.location.href = `mailto:phananhkhoa41004@gmail.com?subject=Báo cáo sự cố&body=${encodeURIComponent(
                content
            )}`;
        }
    };

    return (
        <div className="flex h-screen justify-center items-center transition-all duration-300 ease-in-out">
            <div
                ref={reportProblemRef}
                className="bg-[#000] p-3 shadow-xl w-[600px] 
                h-auto rounded-sm drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_3px_white]"
            >
                <div
                    className="relative flex items-center w-[100%] h-[50px] 
                                    border-b-2 border-[#604d4d]"
                >
                    <span
                        onClick={onClose}
                        className="text-[#fff] cursor-pointer
                                        duration-300 hover:text-[#848383]"
                    >
                        {t("reportProblem.cancel")}
                    </span>
                    <h2
                        className="absolute left-1/2 -translate-x-1/2 text-[#fff] 
                                        text-[18px] text-center font-bold"
                    >
                        {t("reportProblem.title")}
                    </h2>
                </div>

                <div className="my-5">
                    <textarea
                        className="bg-transparent text-[#fff] w-full resize-none text-sm 
                            scrollbar-hide outline-none placeholder-gray-500"
                        placeholder={t("reportProblem.placeholder")}
                        rows={5}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="flex h-[100%] items-center justify-between">
                    <span className="mt-6 text-[13px] ml-1 text-[#b7b7b7]">
                        {t("reportProblem.note")}
                    </span>

                    {/* Button Gửi */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleSend}
                            className={`w-[90px] h-[30px] text-white rounded-sm drop-shadow-[0_0_1px_white] ${
                                content.trim()
                                    ? `bg-[#151d2a] text-white duration-300 hover:drop-shadow-[0_0_3px_white] 
                                        active:scale-95 active:drop-shadow-[0_0_5px_whites] cursor-pointer`
                                    : `bg-gray-500 text-gray-300 cursor-not-allowed`
                            }`}
                            disabled={!content.trim()}
                        >
                            {t("reportProblem.send")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
