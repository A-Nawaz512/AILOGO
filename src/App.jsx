import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/commonComponents/CoustomerNavbar";
import Footer from "./components/commonComponents/CoustomerFooter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/commonComponents/CoustomerFooter";
import ContactPage from "./pages/ContactPage";
import RidesPage from "./pages/RidesPage";
import Deliveries from "./pages/Deliveries";
import Rental from "./pages/Rental";
import Appartment from "./pages/Appartment";

const MainLayout = () => (
   <div className="lg:mx-auto lg:max-w-[1536px]">
      <Navbar />
      <Outlet />
      <Footer />
   </div>
);

const router = createBrowserRouter([
   {
      element: <MainLayout />,
      children: [
         { path: "/", element: <HomePage /> },
         { path: "/about", element: <AboutPage /> },
         { path: "/contact", element: <ContactPage /> },
         { path: "/services/rides", element: <RidesPage /> },
         { path: "/services/deliveries", element: <Deliveries /> },
         { path: "/services/rentals", element: <Rental /> },
         { path: "/services/apartments", element: <Appartment /> },




      ],
   },
   // { path: "*", element: <PageNotFound /> },
]);

const App = () => {
   return <RouterProvider router={router}></RouterProvider>;
};

export default App;
