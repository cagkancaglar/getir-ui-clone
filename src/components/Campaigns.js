import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./ui/Title";
import Banners from "../mock/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, onClick }) {
  return <button className="!text-brand-color absolute top-1/2 -right-6 -translate-y-1/2" onClick={onClick}>
        <IoIosArrowForward size={20}/>
  </button>;
}


function PrevBtn({ className, onClick }) {
  return <button className= "!text-brand-color absolute top-1/2 -left-6 -translate-y-1/2" onClick={onClick}>
    <IoIosArrowBack size={20}/>
  </button>;
}

export default function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <Title>Kampanyalar</Title>
        <Slider className="-mx-2" {...settings}>
          {banners.length &&
            banners.map((banner) => (
              <div key={banner.id}>
                <picture className="px-2 block">
                  <img src={banner.image} className="rounded-lg" />
                </picture>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
