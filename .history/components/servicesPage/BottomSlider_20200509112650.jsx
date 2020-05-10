import React from 'react'
import Swiper from 'react-id-swiper';
import BottomCard from './BottomCard';

function BottomSlider() {

    const bottomParams = {
        containerModifierClass: 'services-bottom-swiper-container',
        loop: true,
        freeMode: true,
        grabCursor: true,
        lazy: true,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination-servicesBottom',
            clickable: true
          },
    //     breakpoints: {
    //       992: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //       },
    //       300: {
    //           centeredSlides: true,
    //           slidesPerView: 'auto',
    //           spaceBetween: 0,
    //       },
    //   }
      }

    return (
        <Swiper {...bottomParams}>
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
