type ItemLoginProps = {
    device: string;
    location: string;
    time: string;
};

export function ItemLogin({ device, location, time }: ItemLoginProps) {
    return (
        <li className="flex items-center p-3 h-[70px] border-b-1 border-[#161010]">
            <i
                className="fa-solid fa-desktop
                mr-3"
            ></i>
            <div className="grid items-center">
                <div className="flex items-center">
                    <h3>{device}</h3> <p className="mx-2">-</p>{" "}
                    <h4>{location}</h4>
                </div>
                <span className="text-[#9e9a9a] text-[13px]">{time}</span>
            </div>
        </li>
    );
}
