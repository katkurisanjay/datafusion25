"use client";
import Slider from "react-slick";
import Image from "next/image";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/800/500?random=1",
    "https://picsum.photos/800/500?random=2",
    "https://picsum.photos/800/500?random=3",
    "https://picsum.photos/800/500?random=4",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-64 md:h-96">
            <Image
              src={img}
              alt={`Slide ${index}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
