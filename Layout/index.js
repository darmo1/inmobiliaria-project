import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="w-full ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
