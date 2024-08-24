import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Course1 from "../Course1";

function Course() {
  return (
    <>
    
      <Navbar />
    
      <div className="min-h-screen bg-white">
        <Course1 />
      </div>
      <Footer />
    </>
  );
}

export default Course;
