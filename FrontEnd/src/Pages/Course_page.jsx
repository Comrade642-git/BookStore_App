import React from "react";
import NavBar from "../Components/NavBar";
import Course from "../Components/Course";
import Footer from "../Components/Footer";
function Course_page() {
  return (
    <>
      <NavBar />
      <div className="pt-16 min-h-screen bg-slate-100 dark:bg-slate-900">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Course_page;

