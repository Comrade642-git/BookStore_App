import React, { useEffect, useState } from "react";
import Home_page from "./Pages/Home_page";
import Course_page from "./Pages/Course_page";
import Contact_page from "./Pages/Contact_page";
import About_page from "./Pages/About_page";
import Signup from "./Components/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Context/Theme.js";
import { AuthProvider } from "./Context/Auth.js";
import NavBar from "./Components/NavBar";

function App() {
  const [themeMode, setTheme] = useState("light");
  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const initialAuthUser = localStorage.getItem("User");
  const [AuthUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  const setUser = (userdata) => {
    setAuthUser(userdata);
  };
  console.log(AuthUser);
  return (
    <AuthProvider value={[AuthUser, setUser]}>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="dark:bg-slate-900 dark:text-white">
          <NavBar /> {/* Ensure NavBar is rendered */}
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route
              path="/Course_page"
              element={
                AuthUser ? <Course_page /> : <Navigate to="/home/signup" />
              }
            />
            <Route path="/Contact" element={<Contact_page />} />
            <Route path="/About" element={<About_page />} />
            <Route path="/home/signup" element={<Signup />} />
          </Routes>
          <div>
            <Toaster />
          </div>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
