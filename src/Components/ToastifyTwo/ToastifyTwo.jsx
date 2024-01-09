
import Toast from "./Toast";
import { Toastify } from "../../AuthContextProvider/AuthContextProvider";


const ToastifyTwo = () => {
    const {showToastHandler,showToast}=Toastify();
  return (
    <div className="flex justify-center mt-3">
      <button className="btn btn-warning" onClick={showToastHandler}>Show Toast</button>
      <Toast message="Hello, this is a toast message! show the display" showToast={showToast} />
    </div>
  );
};



export default ToastifyTwo;