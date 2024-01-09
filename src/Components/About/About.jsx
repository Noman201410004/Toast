import { Toastify } from "../../AuthContextProvider/AuthContextProvider";
import Toast from "../ToastifyTwo/Toast";

const About = () => {
    const {showToastHandler,showToast}=Toastify();
    return (
        <div>
           <button  onClick={showToastHandler}  className="btn">Click</button>
           <Toast message="Hello, this is a toast message! show the display" showToast={showToast} />
        </div>
    );
};

export default About;