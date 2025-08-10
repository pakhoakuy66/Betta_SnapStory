export function ItemLogin() {
    return (
        <li className="flex items-center p-3 h-[70px] border-b-1 border-[#161010]">
            <i
                className="fa-solid fa-desktop
                mr-3"
            ></i>
            <div className="grid items-center">
                <div className="flex items-center">
                    <h3>Tên thiết bị đăng nhập</h3> <p className="mx-2">-</p>{" "}
                    <h4>Định vị</h4>
                </div>
                <span className="text-[#9e9a9a] text-[13px]">Thời gian</span>
            </div>
        </li>
    );
}
