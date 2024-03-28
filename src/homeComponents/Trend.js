import React, { useContext } from 'react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../generallaycomponent/Card';
import { AppContext } from '../context/AppContext';

const Trend = () => {
  const {trendpost}=useContext(AppContext);
  return (
    <>
         
    </>
  )
}

export default Trend