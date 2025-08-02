import { useState } from "react";
import { LoginUser } from "./Pages/Auth/login";
import { Register } from "./Pages/Auth/register";
import { ForgotPassword } from "./Pages/Auth/forgotPassword";
import { UserHome } from "./Pages/Home/UserHomePage";
import { HidePost } from "./components/customs/Home/Context_menu/hidePost";
import { Profile } from "./Pages/User/UserPage";

function App() {
    return (
        <div className="bg-[#000000] w-full overflow-x-hidden min-h-screen">
            <UserHome />
        </div>
    );
}

export default App;
