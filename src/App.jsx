import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/commonComponents/CoustomerNavbar";
import Footer from './components/commonComponents/Footer'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RidesPage from "./pages/RidesPage";
import RoadSideAss from "./pages/RoadSideAss";
import Deliveries from "./pages/Deliveries";
import Rental from "./pages/Rental";
import Appartment from "./pages/Appartment";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import FoodDelivery from "./pages/FoodDeveleviry";
import BookRide from "./pages/BookRide";
import BecomeDriver from "./pages/BecomeDriver";

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
         { path: "/services/roadside", element: <RoadSideAss /> },
         { path: "/services/deliveries", element: <Deliveries /> },
         { path: "/services/food-delivery", element: <FoodDelivery /> },
         { path: "/services/rentals", element: <Rental /> },
         { path: "/services/apartments", element: <Appartment /> },
         { path: "/signup", element: <Signup /> },
         { path: "/login", element: <Login /> },
         { path: "/bookride", element: <BookRide /> },
         { path: "/becomedriver", element: <BecomeDriver /> }, 
      ],
   },
   // { path: "*", element: <PageNotFound /> },
]);

const App = () => {
   return <RouterProvider router={router}></RouterProvider>;
};

export default App;
