import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/commonComponents/CoustomerNavbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoustomerFooter from "./components/commonComponents/CoustomerFooter";

const MainLayout = () => (
   <div className="lg:mx-auto lg:max-w-[1536px]">
      <Navbar />
      <Outlet />
      <CoustomerFooter />
   </div>
);

const router = createBrowserRouter([
   {
      element: <MainLayout />,
      children: [
         { path: "/", element: <HomePage /> },
         { path: "/about", element: <AboutPage /> },

         

      ],
   },
   // { path: "*", element: <PageNotFound /> },
]);

const App = () => {
   return <RouterProvider router={router}></RouterProvider>;
};

export default App;
