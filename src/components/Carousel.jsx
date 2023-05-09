import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                className="mySwiper mt-1 sm:mt-3 h-44 min-[400px]:h-56 md:h-72 lg:h-96 xl:w-2/3 xl:h-1/4 2xl:w-2/4"
                style={{
                    "--swiper-pagination-color": "#007BD0",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    "--swiper-pagination-bullet-border-radius": "0",
                    "--swiper-pagination-bullet-width": "30px",
                    "--swiper-pagination-bullet-height": "10px"
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <img className="object-fill min-[400px]:object-contain w-full h-full" src="../imgs/Resident_evil_4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-fill min-[400px]:object-contain w-full h-full" src="../imgs/XboxSeries.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-fill min-[400px]:object-contain w-full h-full" src="../imgs/SW_jedi_survivor.jpg" alt="" />
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}