import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import GetStartedPage from "./components/user/getStartedPage";
import SignUp from "./components/user/signup";
import LogIn from "./components/user/login";


const router = createBrowserRouter([
  {
    path: "/get-started",
    element: <GetStartedPage />
 },
 {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <LogIn />
  },
   {
    path:"/",
    element: <div>Hello</div>
  },
 ])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
