"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const CarouselComponent = ({ datas }) => {
  const settings = {
    dots: true, // Noktaları göster
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings}>
        {datas.map((item, i) => (
          <div>
            <Image src={item.src} width={400} height={400}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
