import React from 'react'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";

import classes from './servicesPage.module.scss'


const ServicesPage = () => {

    const params = {
          loop: true,
          freeMode: true,
          grabCursor: false,
          lazy: false,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        }

    return (
        <section name="servicesPage" className={classes.servicesPageSection}>
            <div className={classes.servicesPageTitlebox}>
                <h4 className={classes.servicesPageTitle}><b>خدمات</b> ما</h4>
                <p className={classes.servicesPageSubtitle}>
                    خدمات پیشه یار یکی از برترین خدمات صنعتی شناخته شده که به شما کمک می کند از متنوع ترین خدمات صنعتی مطلع و در صورت نیاز با مراجعه به دسته بندی، خدمات مورد نیاز را پیدا کنید و همچنین با مراجعه به اپلیکیشن پیشه یار سفارشات خود را به اتمام برسانید.
                </p>
            </div>
            <div className={classes.servicesPageSliderTop}>
                <Swiper {...params}>
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
                        <p className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</p>
                        <FontAwesomeIcon icon={faClock}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                </Swiper>
            </div>
            <div className={classes.servicesPageSliderBottom}></div>
        </section>
    )
}

export default ServicesPage
