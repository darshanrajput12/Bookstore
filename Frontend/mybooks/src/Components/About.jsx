import React from "react";
import library from "./Images/lib.jpg";
import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <div className="  bg-gray-600 w-full h-screen">
        <div className="justify-center text-center text-black text-2xl font-serif font-bold pt-6">
          <h1>About library </h1>
        </div>

        <div className="   max-w-screen-2xl container mx-auto md:px-20 px-4 pt-4">
          <p>
            A library is a collection of books, and possibly other materials and
            media, that is accessible for use by its members and members of
            allied institutions. Libraries provide physical (hard copies) or
            digital (soft copies) materials, and may be a physical location, a
            virtual space, or both. A library's collection normally includes
            printed materials which may be borrowed, and usually also includes a
            reference section of publications which may only be utilized inside
            the premises. Resources such as commercial releases of films,
            television programmes, other video recordings, radio, music and
            audio recordings may be available in many formats. These include
            DVDs, Blu-rays, CDs, cassettes, or other applicable formats such as
            microform. They may also provide access to information, music or
            other content held on bibliographic databases.
          </p>

          <div className="justify-center items-center text-center md:mt-10 ">
            <Link to={"/"} className="bg-gray-800 text-white rounded-md font-serif p-5">Back To Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
