import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/firebase";
import { useState, useEffect } from "react";

export function UserQR() {
    const [user, setUser] = useState<any>(null);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //     });
    //     return () => unsubscribe();
    // }, []);

    // // Nếu chưa login
    // if (!user) {
    //     return (
    //         <div className="flex flex-col items-center justify-center min-h-screen text-white">
    //             <p>Bạn cần đăng nhập để xem QR.</p>
    //             <Link to="/login" className="text-blue-400 underline">
    //                 Đăng nhập
    //             </Link>
    //         </div>
    //     );
    // }

    // Tạo URL cá nhân — giống Instagram
    // const qrValue = `https://myapp.com/${user.displayName || user.uid}`;

    return (
        <div className="bg-[#000] w-screen">
            {/* Nút quay lại */}
            <Link to="/:username" className="cursor-pointer">
                <i className="fa-solid fa-arrow-left text-[#C7D5E0] text-[20px] m-3"></i>
            </Link>

            {/* QR code */}
            <div className="flex justify-center items-center min-h-screen text-[#C7D5E0]">
                <div className="bg-[#000] p-3 rounded-xl border-2 flex flex-col items-center">
                    {/* <QRCode value={qrValue} size={200} /> */}
                    <p className="mt-4 text-center break-all ">
                        {/* {qrValue} */}
                    </p>
                </div>
            </div>
        </div>
    );
}
