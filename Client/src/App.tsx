import { useState } from "react";
import { LoginUser } from "./Pages/Auth/login";
import { Register } from "./Pages/Auth/register";
import { ForgotPassword } from "./Pages/Auth/forgotPassword";
import { UserHome } from "./Pages/Home/UserHomePage";
import { EditUser } from "./components/customs/User/EditProfile/EditUserProfile";

function App() {
    return (
        <div className="bg-[#000000] w-full overflow-x-hidden min-h-screen">
            <UserHome />
        </div>
    );
}

export default App;
