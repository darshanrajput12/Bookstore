import React from "react";
import list from "../Components/PublicDatas/list.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course1() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-20 items-center justify-center text-center ">
          <h2 className="text-2xl  text-black md:text-4xl">
            We are delighted to have{" "}
            <span className="text-pink-800"> you here :)</span>
          </h2>
          <p className="mt-6 text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, facere atque vel, dolore nemo temporibus dolores quos modi dolorum enim laudantium incidunt nihil reprehenderit labore quidem adipisci, harum hic? At?</p>
          <Link to={'/'}>
          <button className="mt-4 bg-gray-800 text-white rounded-lg hover:bg-slate-500 px-4 py-2 hover:text-red-950 "> Back</button>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards item={item} key={item.id} />
            ))



          }

        </div>
      </div>
    </>
  );
}

export default Course1;
