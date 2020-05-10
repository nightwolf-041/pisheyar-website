import React from 'react'
import Swiper from 'react-id-swiper';
import BottomCard from './BottomCard';

import classes from './servicesPage.module.scss'

function BottomSlider() {

    const params = {
        containerModifierClass: 'services-bottomslider-swiper-container',
        loop: false,
        freeMode: false,
        grabCursor: true,
        lazy: true,
        activeSlideKey: '2',
        centeredSlides: true,
        slidesPerView: 'auto',
        // spaceBetween: 0,

        // slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-bottomSlider',
          clickable: true,
        },
    //     breakpoints: {
    //     576: {
    //         centeredSlides: true,
    //         slidesPerView: 'auto',
    //         spaceBetween: 30,
    //     },
    //     300: {
    //         centeredSlides: true,
    //         slidesPerView: 1,
    //         spaceBetween: 15,
    //     },
    // }
      }

    return (
        <Swiper {...params}>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
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
                        ساختمان
                    </h6>
                    <p className={classes.servicesPageSliderBottomCardDesc}>
                        متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                    </p>
                    <button className={classes.servicesPageSliderBottomCardButton}>
                        جزئیات
                    </button>
                </div>
            </div>
        </Swiper>
    )
}

export default BottomSlider
