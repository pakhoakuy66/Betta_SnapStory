import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginUser } from "./Pages/Auth/login";
import { Register } from "./Pages/Auth/register";
import { ForgotPassword } from "./Pages/Auth/forgotPassword";
import { UserHome } from "./Pages/Home/UserHomePage";
import { Feed } from "./components/customs/Home/Feed/feed";
import { Profile } from "./Pages/User/UserPage";

function App() {
    return (
        <div className="bg-[#000000] w-full overflow-x-hidden min-h-screen">
            <Routes>
                <Route path="/" element={<UserHome />}>
                    <Route index element={<Feed />} />
                    <Route path="user" element={<Profile />} />
                    <Route path=":username/post/:id" element={<Feed />} />
                </Route>
                <Route path="/login" element={<LoginUser />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </div>
    );
}

export default App;
