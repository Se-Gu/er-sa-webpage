import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
export default function MyCarousel() {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <FaArrowCircleLeft className="w-9 h-9 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <FaArrowCircleRight className="w-9 h-9 text-white" />
            </div>
          );
        }}
      >
        <div>
          <img src="/1.jpg" alt="image1" className="image" />
          <p className="legend">
            Welcome to our site! Would you like to see our Projects
          </p>
        </div>
        <div>
          <img src="/2.jpg" alt="image2" className="image" />
          <p className="legend">
            Welcome to our site! Would you like to see our Projects
          </p>
        </div>
        <div>
          <img src="/3.jpg" alt="image3" className="image" />
          <p className="legend">
            Welcome to our site! Would you like to see our Projects
          </p>
        </div>
        <div>
          <img src="/4.jpg" alt="image4" className="image" />
          <p className="legend">
            Welcome to our site! Would you like to see our Projects
          </p>
        </div>
      </Carousel>
    </div>
  );
}
