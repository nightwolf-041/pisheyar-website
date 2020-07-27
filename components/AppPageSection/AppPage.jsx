import React, {useEffect, useState, useRef} from 'react';
import Swiper from 'react-id-swiper';

import classes from './appPage.module.scss'


const AppPageSection = () => {

    let [currentIndex, setCurrentIndex] = useState()

    useEffect(() => {
        let mySwiper = document.querySelector('.appPage-swiper-container').swiper;
        setCurrentIndex(mySwiper.activeIndex)
    }, [])

    const params = {
        containerModifierClass: 'app-swiper-container',
        containerClass: 'appPage-swiper-container',
        pagination: {
          el: '.swiper-pagination-application',
          clickable: true
        },
        loop: false,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        on: {
            slideChange: () => {
                let mySwiper = document.querySelector('.appPage-swiper-container').swiper;
                setCurrentIndex(mySwiper.activeIndex)
            }
        }
    }

    return (
        <section name="appPage" className={classes.appPageSection}>
            <div className="container">
                <div className={classes.appPageLeft}>
                    <img src="/appPage-mobile.png" alt=""
                    className={classes.appPageLeftPhoneImg} />
                    <img src="/ApplicationBackgroundShape.svg" alt=""
                    className={classes.appPageLeftEllipseImgBack} />
                    <div className={classes.appPageLeftSlider}>
                        <Swiper {...params}>
                            <div key="0" className={classes.appPageLeftSliderItem}>
                                <img src="/appPage-mobile-slide1.png" alt=""
                                className={classes.appPageLeftSliderItemBackground} />
                                <button className={classes.appPageLeftSliderItemButton}>دانلود</button>
                            </div>
                            <div key="1" className={classes.appPageLeftSliderItem}>
                                <img src="/appPage-mobile-slide2.png" alt=""
                                className={classes.appPageLeftSliderItemBackground} />
                                <button className={classes.appPageLeftSliderItemButton}>دانلود</button>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div className={classes.appPageRight}>
                    <h4 className={classes.appPageRightTitle}><b>اپلیکیشن</b> پیشه پلاس</h4>
                    <h5 className={classes.appPageRightSubtitle}>
                    {currentIndex === 0 ?
                        'اپلیکیشن ویژه متخصصین' :
                        'اپلیکیشن مشتریان'
                    }
                    </h5>
                    <p className={classes.appPageRightDesc}>
                    {currentIndex === 0 ?
                        'با نصب اپلیکیشن ویژه متخصصین پیشه پلاس کسب و کار خود را  گسترش دهید.'
                        :
                        'با نصب اپلیکیشن پیشه پلاس به سهولت با متخصصین مجرب  درهر ضمینه صنعتی گفتگو کنید و بهترین خدمات را از آنها بخواهید.'
                    }
                    </p>
                    <div className={classes.appPageRightSocialbox}>
                        <a href={currentIndex === 0 ?
                        "https://play.google.com/store/apps/details?id=com.pisheplus_contractor" :
                        "https://play.google.com/store/apps/details?id=com.pisheyarplus_client"}
                        className={classes.appPageRightSocialImageLink}>
                            <img src="/GooglePlay.png" alt=""
                            className={classes.appPageRightSocialImage} />
                        </a>
                        <a href={currentIndex === 0 ? "#" : "#"}
                        className={classes.appPageRightSocialImageLink}>
                            <img src="/Appstore.png" alt=""
                            className={classes.appPageRightSocialImage} />
                        </a>
                        <a href={currentIndex === 0 ? "#" : "#"}
                        className={classes.appPageRightSocialImageLink}>
                            <img src="/Sibapp.png" alt=""
                            className={classes.appPageRightSocialImage} />
                        </a>
                        <a href={currentIndex === 0 ? "#" : "#"}
                        className={classes.appPageRightSocialImageLink}>
                            <img src="/Bazaar.png" alt=""
                            className={classes.appPageRightSocialImage} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppPageSection
