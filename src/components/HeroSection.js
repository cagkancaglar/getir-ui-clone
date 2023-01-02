import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook } from "react-icons/fa";
import {useWindowWidth} from '@react-hook/window-size';

export default function HeroSection() {

  const windowWidth = useWindowWidth()

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
    { windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
          />
        </div>
      </Slider>}

      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="mt-4 text-4xl text-white font-semibold">
            Dakikalar içinde <br /> kapınızda
          </h3> 
        </div>
        <div className="w-full md:w-[400px] bg-gray-50 md:rounded-lg p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş Yap veya Kayıt Ol
          </h4>
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                className="flag-select"
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder="SelectLanguage"
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
              <label className="flex 1 relative block group cursor-pointer">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer"
                />
                <span className="absolute top-0 left-0 px-4 flex items-center h-full transition-all peer-focus:h-6 peer-focus:text-primary-brand-color peer-focus:text-xs text-sm text-gray-500 peer-valid:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow h-12 rounded-md flex items-center justify-center w-full text-sm font-semibold text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="bg-blue-900 bg-opacity-10 h-12 rounded-md flex px-4 items-center w-full text-sm font-semibold text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white">
              <FaFacebook size={24} />
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
