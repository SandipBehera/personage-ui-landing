import React from "react";
import { Headders } from "./headder";
import Footer from "./footer";


const Layout = ({ children }) => {
  return (
    <>
        <Headders/>
      {children}
      <Footer/>
      </>
  );
}
export default Layout;