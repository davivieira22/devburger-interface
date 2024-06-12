import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from './styles/globalStyles';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { router } from './routes';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    
      <RouterProvider router={router} />
   

    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </React.StrictMode>,
);


