import { LoginUser } from "./Pages/Auth/login";
import { Register } from "./Pages/Auth/register";
import { ForgotPassword } from "./Pages/Auth/forgotPassword";
import { UserHome } from "./Pages/Home/UserHomePage";
import { NewPost } from "./components/customs/Home/SideMenu/newPost";

function App() {
    return (
        <div className="bg-[#000000] w-full overflow-x-hidden min-h-screen">
            <UserHome />
        </div>
    );
}

export default App;
