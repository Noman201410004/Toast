import { Link } from "react-router-dom";
import { Toastify } from "../../AuthContextProvider/AuthContextProvider";
import Toast from "../ToastifyTwo/Toast";


const NavBar = () => {
    const {showToastHandler,showToast}=Toastify();
    const NavManu = <>
        {/* <li><Link to="/toastifyOne">Toastify 1</Link></li> */}

        <li><Link to="/toastifyTwo">Toastify 2(core code)</Link></li>
        <li><Link to="/about">About</Link></li>
        
        {/* <li><Link to="/hoc">HOC</Link></li> */}
    </>
    return (
        <section>
            <div className="navbar bg-red-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavManu}
                        </ul>
                    </div>
                    <a className="btn btn-outline btn-warning text-xl">Toastify</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu border  text-2xl border-rose-600 menu-horizontal px-1  ">
                        {NavManu}
                    </ul>
                </div>
                <div  className="navbar-end">
                    <a onClick={showToastHandler} className="btn">Button</a>
                    <Toast message="Hello, this is a toast message! show the display" showToast={showToast} />
                </div>
            </div>
        </section>
    );
};

export default NavBar;