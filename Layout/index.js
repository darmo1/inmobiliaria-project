import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
