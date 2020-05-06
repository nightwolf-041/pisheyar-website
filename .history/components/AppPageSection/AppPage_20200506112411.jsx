import React from 'react';
import Swiper from 'react-id-swiper';

import classes from './appPage.module.scss'


const AppPageSection = () => {

    const onSlideChange = (sw) => {
        console.log(params.activeSlideKey);
        console.log(sw)
    }

    const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        activeSlideKey="0",
          loop: false,
          grabCursor: true,
          slidesPerView: 1,
          spaceBetween: 0,
          on: {
            slideChange:(sw) => onSlideChange(sw)
          }
        //   onSlideChange: function(sw){
        //     console.log(sw.activeIndex + 1);
        //     alert(sw.slides.length);
        //   }
        }

    return (
        <section name="appPage" className={classes.appPageSection}>
            <div className="container">
                <div className={classes.appPageLeft}>
                    <img src="/app-phone.svg" alt="" className={classes.appPageLeftPhoneImg} />
                    <img src="/ApplicationBackgroundShape.svg" alt=""
                    className={classes.appPageLeftEllipseImgBack} />
                    <div className={classes.appPageLeftSlider}>
                        <Swiper {...params} activeSlideKey="0">
                            <div key="0" className={classes.appPageLeftSliderItem}>
                                <h6 className={classes.appPageLeftSliderItemTitle}>
                                    اپلیکیشن متخصصین
                                </h6>
                                <p className={classes.appPageLeftSliderItemDesc}>
                                    این اپلیکیشن شامل خدمات مورد نیاز برای متخصصین که تخصص خود را نشان داده و سفارشات را کنترل نمایند.
                                </p>
                                <button className={classes.appPageLeftSliderItemButton}>دانلود</button>
                            </div>
                            <div key="1" className={classes.appPageLeftSliderItem}>
                                <h6 className={classes.appPageLeftSliderItemTitle}>
                                    اپلیکیشن مشتریان
                                </h6>
                                <p className={classes.appPageLeftSliderItemDesc}>
                                    این اپلیکیشن شامل خدمات مورد نیاز برای متخصصین که تخصص خود را نشان داده و سفارشات را کنترل نمایند.
                                </p>
                                <button className={classes.appPageLeftSliderItemButton}>دانلود</button>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div className={classes.appPageRight}>
                    <h4 className={classes.appPageRightTitle}><b>اپلیکیشن</b> پیشه یار</h4>
                    <h5 className={classes.appPageRightSubtitle}>
                        دو اپلیکیشن جدا با امکانات مجزا از هم
                    </h5>
                    <p className={classes.appPageRightDesc}>
                        خدمات پیشه یار یکی از برترین خدمات صنعتی شناخته شده که به شما کمک می کند از متنوع ترین خدمات صنعتی مطلعو در صورت نیاز با مراجعه به دسته بندی خدمات مورد نیاز را پیدا کنید.
                    </p>
                    <div className={classes.appPageRightSocialbox}>
                        <img src="/GooglePlay.png" alt="" className={classes.appPageRightSocialImage} />
                        <img src="/Appstore.png" alt="" className={classes.appPageRightSocialImage} />
                        <img src="/Sibapp.png" alt="" className={classes.appPageRightSocialImage} />
                        <img src="/Bazaar.png" alt="" className={classes.appPageRightSocialImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppPageSection