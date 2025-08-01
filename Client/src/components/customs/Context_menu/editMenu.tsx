export function EditMenu({
    options,
    onOptionClick,
}: {
    options: { label: string; action: string }[];
    onOptionClick: (action: string) => void;
}) {
    return (
        <ul
            className="absolute top-[100%] w-[155px] right-4 z-10 bg-neutral-900 text-white text-sm 
                       rounded shadow-md border border-neutral-700"
        >
            {options.map((option, index) => (
                <li
                    key={index}
                    className="px-4 py-2 hover:bg-neutral-800 cursor-pointer"
                    onClick={() => onOptionClick(option.action)}
                >
                    {option.label}
                </li>
            ))}
        </ul>
    );
}
