import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import router from './Routes/Routes';
import {  RouterProvider} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="w-[1200px] mx-auto">
  <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </div>
  </React.StrictMode>,
)
