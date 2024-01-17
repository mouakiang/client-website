import { Nav } from "./nav/nav.jsx";
import React from "react";
import "./layout.css";
import RoutesComponent from "./routes.jsx";
import { Footer } from "../home/footer/footer.jsx";

export function Layout() {
  return (
    <>
      <Nav />
      <RoutesComponent />
      <Footer />
    </>
  );
}
