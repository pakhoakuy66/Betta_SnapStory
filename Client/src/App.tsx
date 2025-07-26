import { LoginUser } from "./Pages/Auth/login";
import { Register } from "./Pages/Auth/register";
import { ForgotPassword } from "./Pages/Auth/forgotPassword";
import { UserHome } from "./Pages/Home/UserHomePage";

function App() {
    return (
        <div className="bg-[#000000] w-screen h-auto">
            <UserHome />
        </div>
    );
}

export default App;
