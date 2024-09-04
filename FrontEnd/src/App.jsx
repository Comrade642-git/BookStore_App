import React from "react";
import Home_page from "./Pages/Home_page";
import Course_page from "./Pages/Course_page";
import Contact_page from "./Pages/Contact_page";
import About_page from "./Pages/About_page";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/Course_page" element={<Course_page />} />
          <Route path="/Contact" element={<Contact_page />} />
          <Route path="/About" element={<About_page />} />
          <Route path="/home/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
