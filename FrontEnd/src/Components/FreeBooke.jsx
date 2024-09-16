import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function FreeBooke() {
  const [books, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books/");
        const data=res.data;
        const freedata = data.filter((dat) => dat.category === "free");
        console.log(freedata);
        setbook(freedata);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {books.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                category={item.category}
                imageUrl={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBooke;
