import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="max-w-screen-xl mx-auto pt-10 pb-16">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;