
// import React, {useState, useRef} from 'react'
// import axios from 'axios'
// import Link from 'next/link'
// import Swiper from 'react-id-swiper';
// import Slider from "react-slick";

// import classes from './servicesPage.module.scss'

// class BottomSlider extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//         this.goNext = this.goNext.bind(this);
//         this.goPrev = this.goPrev.bind(this);
//     }

//     goNext() {
//         this.slider.slickNext();
//     };

//     goPrev() {
//         this.slider.slickPrev();
//     };

//     render() {
        
//         // let settings = {
//         //     className: "center slider variable-width",
//         //     dots: false,
//         //     arrows: false,
//         //     infinite: true,
//         //     initialSlide: 0,
//         //     centerMode: true,
//         //     slidesToShow: 1,
//         //     slidesToScroll: 3,
//         //     variableWidth: true,
//         //     // focusOnSelect: true,
//         //     // swipe: true,
//         //     touchMove: true,
//         //     swipeToSlide: true,
//         //     useCSS: true,
//         //     rtl: false,
//         //     // autoplay: true,
//         //     pauseOnHover: true,
//         //     speed: 300,
//         //     // autoplaySpeed: 3000,
//         //     cssEase: "ease-in"
//         // };
//         const settings = {
//             className: "center variable-width",
//             dots: false,
//             arrows: false,
//             infinite: true,
//             centerMode: true,
//             centerPadding: "60px",
//             slidesToShow: 1,
//             slidesToScroll: 3,
//             variableWidth: true,
//             swipeToSlide: true,
//             autoplay: true,
//             pauseOnHover: true,
//             speed: 300,
//             autoplaySpeed: 3000,
//             cssEase: "ease-in",
//             afterChange: function(index) {
//               console.log(
//                 `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//               );
//             }
//           };
    
//         const { dataForBottom } = this.props

//         return (
//         <div className={classes.servicesPageSliderBottom}>
//             <div className={classes.servicesPageSliderBottomSliderbox}>
//                 <Slider ref={c => (this.slider = c)} {...settings} >
//                 {
//                     dataForBottom.map((dt, index) => (
//                         <div className={classes.servicesPageSliderBottomCard}
//                         key={index}>
//                             <div className={classes.servicesPageSliderBottomCardImgbox}>
//                                 <img src={dt.coverDocument.source} alt=""
//                                 className={classes.servicesPageSliderBottomCardImage} />
//                             </div>
//                             <div className={classes.servicesPageSliderBottomCardBottom}>
//                                 <p className={classes.servicesPageSliderBottomCardTopTiltle}>
//                                     متخصصین ماهر
//                                 </p>
//                                 <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
//                                     {dt.title}
//                                 </h6>
//                                 <p className={classes.servicesPageSliderBottomCardDesc}>
//                                     {dt.abstract}
//                                 </p>
//                                 <Link
//                             href={`/category/[...slug].js`} as={`/category/${dt.title.replace(/ /g,'-')}/${dt.categoryGuid}`}>
//                                     <a className={classes.servicesPageSliderBottomCardButton}>
//                                         جزئیات
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))
//                 }
//                 </Slider>
//             </div>
//                 <img src="/LeftArrowGear.svg" alt="" onClick={this.goPrev}
//                 className={classes.servicesPageSliderLeftArrowGear} />
//                 <img src="/RightArrowGear.svg" alt="" onClick={this.goNext}
//                 className={classes.servicesPageSliderRightArrowGear} />
//         </div>
//         )
//     }
// }

// export default BottomSlider;



import React, {useState, useRef} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Swiper from 'react-id-swiper';

import classes from './servicesPage.module.scss'

function BottomSlider(props) {
    const ref = useRef(null)

    const [data, setData] = useState(undefined);
    const [swiper, updateSwiper] = useState(null);

    const goNext = () => {
        console.log('prev')
        if (ref.current !== null && ref.current.swiper !== null) {
          ref.current.swiper.slideNext();
        }
      };
    
    const goPrev = () => {
        console.log('next')
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };

    const params = {
        // containerModifierClass: 'services-bottomslider-swiper-container',
        loop: true,
        // freeMode: false,
        centeredSlides: true,
        grabCursor: true,
        // lazy: true,
        // initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 35,
        // rebuildOnUpdate: true,
        // navigation: {
        //     nextEl: '.swiper-bottomSlider-next',
        //     prevEl: '.swiper-bottomSlider-prev'
        // },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            400: {
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 35,
            },
            300: {
                // centeredSlides: true,
                // slidesPerView: 1,
                // spaceBetween: 15,
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        }
    }

    const { dataForBottom } = props

    const renderByCountition = () => {
        if(dataForBottom !== null && dataForBottom !== [] && dataForBottom !== undefined) {
            if(dataForBottom.length > 2) {
                return(
                    <div className={classes.servicesPageSliderBottom}>
                        <div className={classes.servicesPageSliderBottomSliderbox}>
                            <Swiper ref={ref} {...params } >
                                {dataForBottom !== null && dataForBottom !== [] ?
                                    dataForBottom.map((dt, index) => (
                                        <div className={classes.servicesPageSliderBottomCard}
                                        key={index}>
                                            <div className={classes.servicesPageSliderBottomCardImgbox}>
                                                <img src={dt.coverDocument.source} alt=""
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
                                                <Link
                                            href={`/category/[...slug].js`} as={`/category/${dt.title.replace(/ /g,'-')}/${dt.categoryGuid}`}>
                                                    <a className={classes.servicesPageSliderBottomCardButton}>
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
                        className={['swiper-bottomSlider-next', classes.servicesPageSliderLeftArrowGear].join(' ')} />
                        <img src="/RightArrowGear.svg" alt="" onClick={goNext}
                        className={['swiper-bottomSlider-prev', classes.servicesPageSliderRightArrowGear].join(' ')} />
                    </div>
                )
            }else if(dataForBottom.length <= 2 && dataForBottom.length > 0) {
                return (
                    <div className={classes.servicesPageLessItemsBoxBottom}>
                    {dataForBottom !== null && dataForBottom !== [] ?
                        dataForBottom.map((dt, index) => (
                            <div className={classes.servicesPageSliderBottomCardBottomSlider}
                            key={index}>
                                <div className={classes.servicesPageSliderBottomCardImgbox}>
                                    <img src={dt.coverDocument.source} alt=""
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
                                    <Link
                                    href={`/category/[...slug].js`} as={`/category/${dt.title.replace(/ /g,'-')}/${dt.categoryGuid}`}>
                                        <a className={classes.servicesPageSliderBottomCardButton}>
                                            جزئیات
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))
                        :null
                    }
                </div>
                )
            }else{
                return (
                    <div className={classes.servicesPageEmptyMsg}>
                        موردی یافت نشد
                    </div>
                )
            }
        }else{
            <div className={classes.servicesPageEmptyMsg}>
                موردی یافت نشد
            </div>
        }
    }

    return (
        <>
        {renderByCountition()}
        </>
    )
}
export default BottomSlider
