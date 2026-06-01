import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <div
               className="flex"
            >
                <Sidebar />

                <div
                    className="p-6 w-full bg-gray-100 min-h-screen"
                >
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/about"
                            element={<About />}
                        />

                        <Route
                            path="/login"
                            element={<Login />}
                        />

                        <Route
                            path="/signup"
                            element={<Signup />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;