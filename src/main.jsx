import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import Profile from './components/Profile.jsx'
import './style.scss'
import {
  createBrowserRouter, RouterProvider} from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <NotFound/>
    },
    {
      path: "/profile",
      element: <Profile/>
    }
  ]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
