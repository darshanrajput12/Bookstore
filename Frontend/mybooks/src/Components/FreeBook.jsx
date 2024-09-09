import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../Components/PublicDatas/list.json"
import Cards from "../Components/Cards";
import axios from "axios";


function FreeBook() {
  const[book,setBook] = useState([])
  useEffect(()=>{
    const getBook =async ()=>{
      try{
      const res =await axios.get("http://localhost:4001/book")
      const data = res.data.filter((data)=>data.category==="Free")
      setBook(data)
      console.log(data)
      }
      catch(er){
        console.log(er)

      }
    };
    getBook();
  },[])
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h2 className=" text-pink-800 font-bold">Free offered books</h2>
        <p className=" text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis
          asperiores ratione nostrum quo doloremque maiores illum minima vel
          earum, sunt consequatur vitae vero corporis soluta impedit corrupti,
          qui iste?
        </p>
      </div>
      <div>
        
        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item)=>(
              <Cards item={item} key={item.id} />
            ))}
            
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FreeBook;
