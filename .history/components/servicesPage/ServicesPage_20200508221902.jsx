import React, {useState} from 'react'
import Swiper from 'react-id-swiper';
import BottomCard from './BottomCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
          containerModifierClass: 'services-swiper-container',
          loop: true,
          freeMode: false,
          grabCursor: false,
          lazy: false,
          centeredSlides: false,
          slidesPerView: 'auto',
          spaceBetween: 0,
          breakpoints: {
            576: {
                centeredSlides: false,
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
            400: {
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
            300: {
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
        }
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
                <div className={classes.servicesPageSliderTopContainer}>
                    <div className={classes.servicesPageSliderTop}>
                        <Swiper {...params} getSwiper={updateSwiper}>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>مواد آلی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>مصنوعات صنعتی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>ابزار و لوازم صنعتی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>ابزار باغبانی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>مواد سمی کشاورزی</h6>
                                <FontAwesomeIcon icon={faClock}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                        </Swiper>
                    </div>
                    <button className={classes.servicesPageSliderTopPrev}
                    onClick={goPrev}>
                        <FontAwesomeIcon icon={faAngleLeft}
                        className={classes.servicesPageSliderTopPrevIcon} />
                        <FontAwesomeIcon icon={faAngleLeft}
                        className={classes.servicesPageSliderTopPrevIcon2} />
                    </button>
                    <button className={classes.servicesPageSliderTopNext}
                    onClick={goNext}>
                        <FontAwesomeIcon icon={faAngleRight}
                        className={classes.servicesPageSliderTopNextIcon} />
                        <FontAwesomeIcon icon={faAngleRight}
                        className={classes.servicesPageSliderTopNextIcon2} />
                    </button>
                </div>

                <div className={classes.servicesPageSliderBottom}>
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
                </div>
            </div>
        </section>
    )
}

export default ServicesPage
