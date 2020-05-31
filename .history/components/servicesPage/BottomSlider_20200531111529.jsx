import React, {useState} from 'react'
import Link from 'next/link'
import Swiper from 'react-id-swiper';
// import BottomCard from './BottomCard';

import classes from './servicesPage.module.scss'

function BottomSlider(props) {
    // console.log(props.givenGuid);
    const data = props.dataForBottom
    const [swiper, updateSwiper] = useState(null);

    const goNext = () => {
      if (swiper !== null) {
        swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiper !== null) {
        swiper.slidePrev();
      }
    };

    const params = {
        containerModifierClass: 'services-bottomslider-swiper-container',
        loop: true,
        freeMode: false,
        grabCursor: true,
        lazy: true,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-bottomSlider',
          clickable: true,
        //   dynamicBullets: true
        },
        breakpoints: {
        400: {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
        300: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 15,
        },
    }
      }

    return (
        <>
         {data !== null && data !== [] && data.length > 2 ?
            <div className={classes.servicesPageSliderBottom}>
                <div className={classes.servicesPageSliderBottomSliderbox}>
                    <Swiper {...params } getSwiper={updateSwiper}>
                        {data !== null && data !== [] ?
                            data.map(dt => (
                                <div className={classes.servicesPageSliderBottomCard}>
                                    <div className={classes.servicesPageSliderBottomCardImgbox}>
                                        <img src="/services-left.jpg" alt=""
                                        className={classes.servicesPageSliderBottomCardImage} />
                                    </div>
                                    <div className={classes.servicesPageSliderBottomCardBottom}>
                                        <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                                            متخصصین ماهر
                                        </p>
                                        <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                                            {dt.title}
                                        </h6>
                                        <p className={classes.servicesPageSliderBottomCardDesc}>
                                            {dt.abstract}
                                        </p>
                                        <Link href={`/category/[id]`} as={`/category/${dt.title}/${dt.categoryGuid}`}>
                                            <a className={classes.servicesPageSliderBottomCardButton}
                                            onClick={() => props.sendGuidToPage2(dt.categoryGuid)}>
                                                جزئیات
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))
                            :null
                        }
                       
                    </Swiper>
                </div>
                <img src="/LeftArrowGear.svg" alt="" onClick={goPrev}
                className={classes.servicesPageSliderLeftArrowGear} />
                <img src="/RightArrowGear.svg" alt="" onClick={goNext}
                className={classes.servicesPageSliderRightArrowGear} />
            </div>
            :
            <div className={classes.servicesPageLessItemsBoxBottom}>
                {data !== null && data !== [] ?
                    data.map(dt => (
                        <div className={classes.servicesPageSliderBottomCardBottomSlider}>
                            <div className={classes.servicesPageSliderBottomCardImgbox}>
                                <img src="/services-left.jpg" alt=""
                                className={classes.servicesPageSliderBottomCardImage} />
                            </div>
                            <div className={classes.servicesPageSliderBottomCardBottom}>
                                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                                    متخصصین ماهر
                                </p>
                                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                                    {dt.title}
                                </h6>
                                <p className={classes.servicesPageSliderBottomCardDesc}>
                                    {dt.abstract}
                                </p>
                                <Link href={`/category/[id]`} as={`/category/${dt.categoryGuid}`}>
                                    <a className={classes.servicesPageSliderBottomCardButton}
                                    onClick={() => props.sendGuidToPage2(dt.categoryGuid)}>
                                        جزئیات
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))
                    :null
                }
            </div>
         }
        </>
    )
}

export default BottomSlider
