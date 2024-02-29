import { useSwiper } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const SwiperNavButtons = () => {
  // swiper should be passed as a prop
  const swiper = useSwiper();
  return (
    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
      <button className="arrow-btn" style={{marginRight:'5px'}} onClick={() => swiper.slidePrev()}> <IoIosArrowBack /> </button>
      <button className="arrow-btn" onClick={() => swiper.slideNext()}><IoIosArrowForward /></button>
    </div>
  );
};
