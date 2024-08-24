import React from "react";
import image from "./Images/bookStore2.jpg"
function Cards({item}) {
    
  return (
    <>
      <div className="mt-5 my-4 p-4">
        <div className="card bg-base-100 w-98 shadow-xl hover:scale-105 duration-300">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad sint, veritatis alias, aperiam sapiente nulla odit eveniet tenetur quaerat inventore maxime necessitatibus repellendus? Numquam ducimus ratione facere placeat quos.</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.cost}</div>
              <div className="badge rounded-full p-4 border-2 border-red-900 hover:bg-pink-800 duration-300"> Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
