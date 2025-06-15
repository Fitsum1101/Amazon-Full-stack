import { Swiper, SwiperSlide } from "swiper/react";
import { img, catagorey as catagoreyItems } from "../assets/data";
import Category from "./Category";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import "swiper/css/autoplay";
import "swiper/css";

const Hero = () => {
  return (
    <div className="relative">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="">
            {img.map((hero, i) => (
              <SwiperSlide key={i}>
                <div className="w-full relative h-auto ">
                  <img src={hero} alt="image" />
                  <p className="bg-linear-to-b absolute w-full bottom-0 h-[20vh] z-10   to-white text-7xl"></p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="absolute top-[70%] left-[50%] w-full bg-pink-400  -translate-x-[50%] -translate-y-[50%] flex ml-4 mr-4 flex-wrap z-10 gap-10  h-auto ">
        {catagoreyItems.map((items, i) => (
          <Category
            img={items.img}
            link={" see more"}
            to={"/catagory"}
            title={items.category}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
