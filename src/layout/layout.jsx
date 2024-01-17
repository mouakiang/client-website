import { Nav } from "./nav/nav.jsx";
import React from "react";
import "./layout.css";
<<<<<<< HEAD

import { Footer } from "../home/footer/footer.jsx";
=======
>>>>>>> 83a7f5dac64cb8e5627f090a3c634b312c457f33
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
