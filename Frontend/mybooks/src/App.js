import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Course from "./Components/Courses/Course";

import Home from "./Components/Homes/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.js";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import {Toaster } from "react-hot-toast"
import { useAuth } from "./Components/Context/AuthProvider.jsx";


function App() {
  const [authUser , setAuthUser] = useAuth()
  
  return (
    <>
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Course />: <Navigate to="/signup" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
      </div>
    </>
  );
}

export default App;
