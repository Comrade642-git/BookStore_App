import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import About from "../Components/About";

function About_page() {
  return (
    <>
      <NavBar />
      <div className="pt-16 min-h-screen bg-slate-100 dark:bg-slate-900">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default About_page;
