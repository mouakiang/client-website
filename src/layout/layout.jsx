import { Nav } from "./nav/nav.jsx";
import React from "react";
import "./layout.css";

import RoutesComponent from "./routes.jsx";

export function Layout() {
  return (
    <>
      <Nav />
      <RoutesComponent />
    </>
  );
}
