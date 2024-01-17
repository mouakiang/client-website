import { Nav } from "./nav/nav.jsx";
import React from "react";
import "./layout.css";

import { Footer } from "../home/footer/footer.jsx";
import RoutesComponent from "./routes.jsx";

export function Layout() {
  return (
    <>
      <Nav />
      <RoutesComponent />
      <Footer />
    </>
  );
}
