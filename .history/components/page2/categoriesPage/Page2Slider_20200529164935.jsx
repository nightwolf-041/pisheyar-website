import React from 'react'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

import classes from './categoriesPage.module.scss'

function Page2Slider() {

    const [swiper, updateSwiper] = React.useState(null);

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
          containerModifierClass: 'services-swiper-container',
          loop: true,
          freeMode: false,
          grabCursor: false,
          lazy: false,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
        //   breakpoints: {
        //     576: {
        //         centeredSlides: true,
        //         slidesPerView: 'auto',
        //         spaceBetween: 0,
        //     },
        //     300: {
        //         centeredSlides: true,
        //         slidesPerView: 'auto',
        //         spaceBetween: 0,
        //     },
        // }
        }

    return (
        <div className={classes.page2SliderContainer}>
            <div className={classes.page2Slider}>
                <Swiper {...params} getSwiper={updateSwiper}>
                    <div className={classes.page2SliderItem}>
                        <div className={}>
                            <img src="/" alt=""/>
                            <h4></h4>
                        </div>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>مواد آلی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>مصنوعات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>ابزار و لوازم صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>مواد شیمیایی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>مواد شیمیایی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>ابزار باغبانی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                    <div className={classes.page2SliderItem}>
                        <h6 className={classes.page2SliderItemTitle}>مواد سمی کشاورزی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.page2SliderItemIcon} />
                    </div>
                </Swiper>
            </div>
            <button className={classes.page2SliderPrev}
            onClick={goPrev}>
                <FontAwesomeIcon icon={faAngleLeft}
                className={classes.page2SliderPrevIcon} />
                <FontAwesomeIcon icon={faAngleLeft}
                className={classes.page2SliderPrevIcon2} />
            </button>
            <button className={classes.page2SliderNext}
            onClick={goNext}>
                <FontAwesomeIcon icon={faAngleRight}
                className={classes.page2SliderNextIcon} />
                <FontAwesomeIcon icon={faAngleRight}
                className={classes.page2SliderNextIcon2} />
            </button>
        </div>
    )
}

export default Page2Slider
