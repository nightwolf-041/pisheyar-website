import React, {useState} from 'react'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";

import classes from './servicesPage.module.scss'


const ServicesPage = () => {

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
          loop: true,
          freeMode: true,
          grabCursor: false,
          lazy: false,
          centeredSlides: false,
          centerInsufficientSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        //   },
        }

    return (
        <section name="servicesPage" className={classes.servicesPageSection}>
            <div className="container">
                <div className={classes.servicesPageTitlebox}>
                    <h4 className={classes.servicesPageTitle}><b>خدمات</b> ما</h4>
                    <p className={classes.servicesPageSubtitle}>
                        خدمات پیشه یار یکی از برترین خدمات صنعتی شناخته شده که به شما کمک می کند از متنوع ترین خدمات صنعتی مطلع و در صورت نیاز با مراجعه به دسته بندی، خدمات مورد نیاز را پیدا کنید و همچنین با مراجعه به اپلیکیشن پیشه یار سفارشات خود را به اتمام برسانید.
                    </p>
                </div>
                <div className={classes.servicesPageSliderTop}>
                    <Swiper {...params} getSwiper={updateSwiper}>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>مواد آلی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>مصنوعات صنعتی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>ابزار و لوازم صنعتی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>ابزار باغبانی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                        <div className={classes.servicesPageSliderTopItem}>
                            <p className={classes.servicesPageSliderTopItemTitle}>مواد سمی کشاورزی</p>
                            <FontAwesomeIcon icon={faClock}
                            className={classes.servicesPageSliderTopItemIcon} />
                        </div>
                    </Swiper>
                </div>
                <button className={classes.servicesPageSliderTopPrev}
                onClick={goPrev}>
                    &laquo;
                </button>
                <button className={classes.servicesPageSliderTopNext}
                onClick={goNext}>
                    &raquo;
                </button>

                <div className={classes.servicesPageSliderBottom}></div>
            </div>
        </section>
    )
}

export default ServicesPage
