import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel() {
  return (
    <div className="w-[100%] h-[50%]">
      <Carousel showThumbs="false">
        <div>
          <img src="/1.jpg" alt="image1" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src="/2.jpg" alt="image2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src="/3.jpg" alt="image3" />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img src="/4.jpg" alt="image3" />
          <p className="legend">Image 4</p>
        </div>
      </Carousel>
    </div>
  );
}
