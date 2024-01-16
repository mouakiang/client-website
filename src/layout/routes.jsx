import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home.jsx";
import Appointment from "../components/appointment/appointment.jsx";
import Location from "../components/location/location.jsx";
import About from "../components/about/about.jsx";
import NotFound from "./notFound.jsx";
import Contact from "../components/contact/contact.jsx";
import "./routes.css";

export default function RoutesComponent() {
  return (
    <div className="main-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
