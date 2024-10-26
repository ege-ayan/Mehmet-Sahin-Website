"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cardsData from "../constants/health";
import HealthCard from "./cards/health-card";

export default function Carousel() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation
        scrollbar={{ draggable: true }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <HealthCard
              title={card.title}
              imageUrl={card.imageUrl}
              href={card.href}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
