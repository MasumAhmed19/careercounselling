import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import Pagination module

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const ImgSlider = () => {
    return (
        <div className="w-full max-w-4xl mx-auto overflow-hidden p-4 relative">
            <Swiper
                modules={[Autoplay, Pagination]} // Include Pagination module
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    // bulletClass: "bg-amber-400", egula kaj kore na ekhane
                    // bulletActiveClass: "bg-green-400",
                  }}
                loop={true}
                className="rounded-lg"
            >
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/ZMD3wfS/slider-1.png"
                        alt="Slide 1"
                        className="w-full h-[400px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/Z2X7n3g/slider-2.png"
                        alt="Slide 2"
                        className="w-full h-[400px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co.com/GnrCpr1/slider-3.png"
                        alt="Slide 3"
                        className="w-full h-[400px] object-contain"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ImgSlider;
