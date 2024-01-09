import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './LayOut/MainLayout';
// import ToastifyOne from './Components/ToastifyOne/ToastifyOne';
import AuthContextProvider from './AuthContextProvider/AuthContextProvider';
import ToastifyTwo from './Components/ToastifyTwo/ToastifyTwo';
import About from './Components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      // {
      //   path:"/toastifyOne",
      //   element:<ToastifyOne></ToastifyOne>
      // },
      {
        path:"/toastifyTwo",
        element:<ToastifyTwo></ToastifyTwo>
      },
      {
        path:"/about",
        element:<About></About>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
    
  </React.StrictMode>,
)
