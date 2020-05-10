import React from 'react'
import Swiper from 'react-id-swiper';
import BottomCard from './BottomCard';

function BottomSlider() {

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }

    return (
        <Swiper {...params}>
            <BottomCard 
                source="/services-left.jpg"
                topTitle="مهندسین ماهر"
                bottomTitle="ساختمان"
                description="انواع متخصصین حرفه ای و با تجربه حوضه جوشکاری صنعتی و جزئیات و مشخصات آنها"
            />
            <BottomCard 
                source="/services-left.jpg"
                topTitle="مهندسین ماهر"
                bottomTitle="ساختمان"
                description="انواع متخصصین حرفه ای و با تجربه حوضه جوشکاری صنعتی و جزئیات و مشخصات آنها"
            />
            <BottomCard 
                source="/services-left.jpg"
                topTitle="مهندسین ماهر"
                bottomTitle="ساختمان"
                description="انواع متخصصین حرفه ای و با تجربه حوضه جوشکاری صنعتی و جزئیات و مشخصات آنها"
            />
            <BottomCard 
                source="/services-left.jpg"
                topTitle="مهندسین ماهر"
                bottomTitle="ساختمان"
                description="انواع متخصصین حرفه ای و با تجربه حوضه جوشکاری صنعتی و جزئیات و مشخصات آنها"
            />
            <BottomCard 
                source="/services-left.jpg"
                topTitle="مهندسین ماهر"
                bottomTitle="ساختمان"
                description="انواع متخصصین حرفه ای و با تجربه حوضه جوشکاری صنعتی و جزئیات و مشخصات آنها"
            />
            <BottomCard 
                source="/services-left.jpg"
                topTitle="مهندسین ماهر"
                bottomTitle="ساختمان"
                description="انواع متخصصین حرفه ای و با تجربه حوضه جوشکاری صنعتی و جزئیات و مشخصات آنها"
            />
    </Swiper>
    )
}

export default BottomSlider
