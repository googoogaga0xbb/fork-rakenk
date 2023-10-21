"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";


const Carousel = () => {
  const settings = {
    dots: true, // Noktaları göster
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselItems = [
    {
      src: "https://media.istockphoto.com/id/1397862835/tr/foto%C4%9Fraf/young-woman-doing-cryptocurrency-business-trading-on-her-computer-at-home-at-nigh.jpg?s=2048x2048&w=is&k=20&c=nC4Rv29qnozIa-ZHAsYIRaSZpO5EQrRNEwXeHI0AV6k=",
      alt: "Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
      alt: "Image 2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1667538960183-82690c60a2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1589287707312-213624549c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Image 4",
    },
    
  ];

  return (
    <div className="relative border w-full  h-[190px] md:h-[420px] ">
      <Slider {...settings}>
        {carouselItems.map((item, i) => (
          <div key={i} style={{backgroundImage:`url(${item.src})`}} alt={item.alt} className="h-[190px] md:h-[420px] w-[100%] object-fill rounded-l" >
            <span className="absolute text-white bg-blue-btn text-[11.52px] md:text-[29.33px] font-[800] rounded-r-[10px] px-4 md:px-8 py-1 top-12 md:top-20">Kripto</span>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
