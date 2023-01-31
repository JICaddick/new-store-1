import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
