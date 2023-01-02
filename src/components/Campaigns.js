import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./ui/Title";
import Banners from "../mock/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ onClick }) {
  return (
    <button
      className="!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowForward size={20} />
    </button>
  );
}

function PrevBtn({ onClick }) {
  return (
    <button
      className="!text-brand-color absolute top-1/2 -left-6 -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowBack size={20} />
    </button>
  );
}

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto md:pt-8">
        <div className="hidden md:block">
          <Title>Kampanyalar</Title>
        </div>
        <Slider className="md:-mx-2" {...settings}>
          {banners.length &&
            banners.map((banner) => (
              <div key={banner.id}>
                <picture className="md:px-2 block">
                  <img src={banner.image} className="md:rounded-lg" />
                </picture>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
