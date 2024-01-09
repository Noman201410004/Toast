import { createContext, useContext, useState } from "react";
export const AuthText=createContext(null)
const AuthContextProvider = ({children}) => {
    const TitleOne="Toastify One";
    const [showToast, setShowToast] = useState(false);
    const showToastHandler = () => {
    setShowToast(true);
   
    setTimeout(() => {
        setShowToast(false)
  }, 1000);

  };
  const info={TitleOne,showToastHandler,showToast}
    return (
        <AuthText.Provider value={info}>
            {children}
            
        </AuthText.Provider>
    );
};

export const Toastify=()=>useContext(AuthText)


export default AuthContextProvider;