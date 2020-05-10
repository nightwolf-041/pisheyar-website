import React, {useEffect, useState, useRef} from 'react';
import Swiper from 'react-id-swiper';

import classes from './appPage.module.scss'


const AppPageSection = () => {

    let [currentIndex, setCurrentIndex] = useState()

    useEffect(() => {
        let mySwiper = document.querySelector('.app-swiper-containerinitialized').swiper;
        setCurrentIndex(mySwiper.activeIndex)
    })

    const params = {
        containerModifierClass: 'app-swiper-container',
        bulletClass: 'app-swiper-pagination-bullet',
        bulletActiveClass: 'app-swiper-pagination-active-bullet',
        pagination: {
          el: '.swiper-pagination-application',
          clickable: true
        },
        loop: false,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 0,
        // getSwiper: (sw) => alert(sw),
        // renderPagination: (sw) => console.log(sw)
        on: {
            slideChange: () => {
                let mySwiper = document.querySelector('.swiper-container').swiper;
                setCurrentIndex(mySwiper.activeIndex)
            }
        }
    }
    console.log(currentIndex);

    return (
        <section name="appPage" className={classes.appPageSection}>
            <div className="container">
                <div className={classes.appPageLeft}>
                    <img src="/app-phone.svg" alt="" className={classes.appPageLeftPhoneImg} />
                    <img src="/ApplicationBackgroundShape.svg" alt=""
                    className={classes.appPageLeftEllipseImgBack} />
                    <div className={classes.appPageLeftSlider}>
                        <Swiper {...params}>
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
                        <a href={currentIndex === 0 ? "googleplay" : "gooooooogleplay"}
                        className={classes.appPageRightSocialImageLink}>
                            <img src="/GooglePlay.png" alt=""
                            className={classes.appPageRightSocialImage} />
                        </a>
                        <a href={currentIndex === 0 ? "googleplay" : "gooooooogleplay"}
                        className={classes.appPageRightSocialImageLink}>
                            <img src="/Appstore.png" alt=""
                            className={classes.appPageRightSocialImage} />
                        </a>
                        <a href={currentIndex === 0 ? "googleplay" : "gooooooogleplay"}
                        className={classes.appPageRightSocialImageLink}>
                            <img src="/Sibapp.png" alt=""
                            className={classes.appPageRightSocialImage} />
                        </a>
                        <a href={currentIndex === 0 ? "googleplay" : "gooooooogleplay"}
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



// import React from 'react';
// import Swiper from 'react-id-swiper';
// import classes from './appPage.module.scss'


// class AppPageSection extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       swiper: null,
//       activeSlideIndex: null,
//     };

//     this.swiperRef = this.swiperRef.bind(this);
//   }

//   swiperRef(ref) {
//     this.setState({ swiper: ref.swiper });
//   }

//   render() {
//     const swiperParams = {
//         pagination: {
//             el: '.swiper-pagination-application',
//             clickable: true
//         },
//         loop: false,
//         grabCursor: true,
//         slidesPerView: 1,
//         spaceBetween: 0,
//       slideToClickedSlide: true,
//       on: {
//         slideChangeTransitionStart:
//           () => this.state.swiper && this.setState({ activeSlideIndex: this.state.swiper.activeIndex }),
//       },
//     };

//     return (
//         <section name="appPage" className={classes.appPageSection}>
//             <div className="container">
//                 <div className={classes.appPageLeft}>
//                     <img src="/app-phone.svg" alt="" className={classes.appPageLeftPhoneImg} />
//                     <img src="/ApplicationBackgroundShape.svg" alt=""
//                     className={classes.appPageLeftEllipseImgBack} />
//                     <div className={classes.appPageLeftSlider}>
//                         <Swiper {...swiperParams} ref={this.swiperRef}>
//                             <div className={classes.appPageLeftSliderItem}>
//                                 <h6 className={classes.appPageLeftSliderItemTitle}>
//                                     اپلیکیشن متخصصین
//                                 </h6>
//                                 <p className={classes.appPageLeftSliderItemDesc}>
//                                     این اپلیکیشن شامل خدمات مورد نیاز برای متخصصین که تخصص خود را نشان داده و سفارشات را کنترل نمایند.
//                                 </p>
//                                 <button className={classes.appPageLeftSliderItemButton}>دانلود</button>
//                             </div>
//                             <div className={classes.appPageLeftSliderItem}>
//                                 <h6 className={classes.appPageLeftSliderItemTitle}>
//                                     اپلیکیشن مشتریان
//                                 </h6>
//                                 <p className={classes.appPageLeftSliderItemDesc}>
//                                     این اپلیکیشن شامل خدمات مورد نیاز برای متخصصین که تخصص خود را نشان داده و سفارشات را کنترل نمایند.
//                                 </p>
//                                 <button className={classes.appPageLeftSliderItemButton}>دانلود</button>
//                             </div>
//                         </Swiper>
//                     </div>
//                 </div>
//                 <div className={classes.appPageRight}>
//                     <h4 className={classes.appPageRightTitle}><b>اپلیکیشن</b> پیشه یار</h4>
//                     <h5 className={classes.appPageRightSubtitle}>
//                         دو اپلیکیشن جدا با امکانات مجزا از هم
//                     </h5>
//                     <p className={classes.appPageRightDesc}>
//                         خدمات پیشه یار یکی از برترین خدمات صنعتی شناخته شده که به شما کمک می کند از متنوع ترین خدمات صنعتی مطلعو در صورت نیاز با مراجعه به دسته بندی خدمات مورد نیاز را پیدا کنید.
//                     </p>
//                     <div className={classes.appPageRightSocialbox}>
//                         <img src="/GooglePlay.png" alt="" className={classes.appPageRightSocialImage} />
//                         <img src="/Appstore.png" alt="" className={classes.appPageRightSocialImage} />
//                         <img src="/Sibapp.png" alt="" className={classes.appPageRightSocialImage} />
//                         <img src="/Bazaar.png" alt="" className={classes.appPageRightSocialImage} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
//   }
// };

// export default AppPageSection