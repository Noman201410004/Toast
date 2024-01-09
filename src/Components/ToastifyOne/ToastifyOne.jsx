import { useContext } from "react";
import { AuthText } from "../../AuthContextProvider/AuthContextProvider";
import HookComponents from "../Hook/HookComponents";
import { Toaster } from "react-hot-toast";


const ToastifyOne = () => {
    const { TitleOne } = useContext(AuthText)
    const {notify,notifytwo,notifythree,notifyFour}=HookComponents()
    console.log(notify,notifytwo);
    console.log(TitleOne);

    

    return (
        <section>
            <h2 className="text-center text-5xl font-bold text-green-700">{TitleOne}</h2>
            <div className="flex justify-center mt-4">
                
            <button onClick={notify}  className="btn btn-neutral">Button Click 1</button>
            <Toaster 
             position="top-center"
            reverseOrder={false}/>
            <button onClick={notifytwo} className="btn btn-primary mx-2">Button Click 2</button>
            <button onClick={notifythree} className="btn btn-secondary">Button Click 3</button>
            <button onClick={notifyFour} className="btn btn-accent mx-2">Button Click 4</button>
           
            </div>
            
        </section>
    );
};

export default ToastifyOne;