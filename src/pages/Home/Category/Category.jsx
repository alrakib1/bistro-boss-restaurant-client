import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-center uppercase text-4xl text-white -mt-16">Salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-center uppercase text-4xl text-white -mt-16">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-center uppercase text-4xl text-white -mt-16">Soup</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-center uppercase text-4xl text-white -mt-16">Desert</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-center uppercase text-4xl text-white -mt-16">Salad</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
