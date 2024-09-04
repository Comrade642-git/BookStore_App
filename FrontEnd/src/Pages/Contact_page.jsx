import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

function Contact_page() {
  return (
    <>
      <NavBar />
      <div className="pt-16 min-h-screen bg-slate-100 dark:bg-slate-900">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Contact_page;
