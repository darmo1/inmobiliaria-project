import React from "react";
import { CallToAction } from "../components/CallToAction";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="w-full ">
      <Header />
      <CallToAction />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
