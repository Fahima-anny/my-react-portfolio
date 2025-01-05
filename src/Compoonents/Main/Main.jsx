import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="max-w-screen-xl mx-auto pt-28 pb-5 lg:pb-16 px-3 lg:px-0">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;