import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetStartedPage from "./components/user/getStartedPage";
import SignUp from "./components/user/signup";
import LogIn from "./components/user/login";
import Homepage  from "./components/homepage";
import {loader as notesLoader} from "./services/notes";

const router = createBrowserRouter([
  {
    path: "/get-started",
    element: <GetStartedPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/",
    loader: notesLoader,
    element: <Homepage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
