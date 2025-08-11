export function BarMenu({
    options,
    onOptionClick,
}: {
    options: { label: React.ReactNode; action: string }[];
    onOptionClick: (action: string) => void;
}) {
    return (
        <ul
            className="absolute bottom-[100%] w-[255px] left-17 z-10 bg-neutral-900 text-white text-sm 
                       rounded shadow-md border border-neutral-700"
        >
            {options.map((option, index) => (
                <li
                    key={index}
                    className="flex items-center px-4 py-2 h-[70px] hover:bg-neutral-800 cursor-pointer"
                    onClick={() => onOptionClick(option.action)}
                >
                    {option.label}
                </li>
            ))}
        </ul>
    );
}
