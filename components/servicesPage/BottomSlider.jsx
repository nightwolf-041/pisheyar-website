// import React, {useState} from 'react'
// import axios from 'axios'
// import Link from 'next/link'
// import Swiper from 'react-id-swiper';

// import classes from './servicesPage.module.scss'

// function BottomSlider(props) {

//     const [data, setData] = useState(undefined);
//     const [swiper, updateSwiper] = useState(null);

//     React.useEffect(() => {
//         let timeout ;
//         if (swiper !== null) {
//             window.dispatchEvent(new Event('resize')) 
//             timeout = setTimeout(() => swiper.update(), 500)
//         }
//         return () => {
//         clearTimeout(timeout)
//         }
//     },[swiper])

//     const goNext = () => {
//       if (swiper !== null) {
//         swiper.slideNext();
//       }
//     };
//     const goPrev = () => {
//       if (swiper !== null) {
//         swiper.slidePrev();
//       }
//     };

//     const swiperParams = {
//         containerModifierClass: 'services-bottomslider-swiper-container',
//         loop: true,
//         freeMode: false,
//         grabCursor: true,
//         lazy: true,
//         initialSlide: 1,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         spaceBetween: 25,
//         pagination: {
//           el: '.swiper-pagination-bottomSlider',
//           clickable: true,
//           dynamicBullets: true
//         },
//         breakpoints: {
//             400: {
//                 centeredSlides: true,
//                 slidesPerView: 'auto',
//                 spaceBetween: 25,
//             },
//             300: {
//                 centeredSlides: true,
//                 slidesPerView: 1,
//                 spaceBetween: 15,
//             },
//         }
//     }

//     const { dataForBottom } = props

//     dataForBottom , dataForBottom.length

//     return (
//         <div className={classes.servicesPageSliderBottom}>
//             <div className={classes.servicesPageSliderBottomSliderbox}>
//                 <Swiper {...swiperParams } getSwiper={updateSwiper}>
//                     {dataForBottom !== null && dataForBottom !== [] ?
//                         dataForBottom.map((dt, index) => (
//                             <div className={classes.servicesPageSliderBottomCard}
//                             key={index}>
//                                 <div className={classes.servicesPageSliderBottomCardImgbox}>
//                                     <img src={dt.coverDocument.source} alt=""
//                                     className={classes.servicesPageSliderBottomCardImage} />
//                                 </div>
//                                 <div className={classes.servicesPageSliderBottomCardBottom}>
//                                     <p className={classes.servicesPageSliderBottomCardTopTiltle}>
//                                         متخصصین ماهر
//                                     </p>
//                                     <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
//                                         {dt.title}
//                                     </h6>
//                                     <p className={classes.servicesPageSliderBottomCardDesc}>
//                                         {dt.abstract}
//                                     </p>
//                                     <Link
//                                 href={`/category/[...slug].js`} as={`/category/${dt.title.replace(/ /g,'-')}/${dt.categoryGuid}`}>
//                                         <a className={classes.servicesPageSliderBottomCardButton}>
//                                             جزئیات
//                                         </a>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))
//                         :null
//                     }
                
//                 </Swiper>
//             </div>
//             <img src="/LeftArrowGear.svg" alt="" onClick={goPrev}
//             className={classes.servicesPageSliderLeftArrowGear} />
//             <img src="/RightArrowGear.svg" alt="" onClick={goNext}
//             className={classes.servicesPageSliderRightArrowGear} />
//         </div>
//     )
// }

// export default BottomSlider


import React, {useState, useRef} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Swiper from 'react-id-swiper';
import Slider from "react-slick";
// import BottomCard from './BottomCard';

import classes from './servicesPage.module.scss'

class BottomSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.goNext = this.goNext.bind(this);
        this.goPrev = this.goPrev.bind(this);
    }

    goNext() {
        this.slider.slickNext();
    };

    goPrev() {
        this.slider.slickPrev();
    };

    render() {
        
        let settings = {
            className: "slider variable-width",
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            focusOnSelect: true,
            swipe: true,
            touchMove: true,
            swipeToSlide: true,
            useCSS: true,
            rtl: true,
            // responsive: [
            //     {
            //       breakpoint: 1024,
            //       settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //       }
            //     },
            //     {
            //       breakpoint: 600,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         initialSlide: 2
            //       }
            //     },
            //     {
            //       breakpoint: 400,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
        };
    
        const { dataForBottom } = this.props
    
        // dataForBottom , dataForBottom.length

        return (
        <div className={classes.servicesPageSliderBottom}>
            <div className={classes.servicesPageSliderBottomSliderbox}>
                <Slider ref={c => (this.slider = c)} {...settings} >
                {
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
                }
                </Slider>
            </div>
                <img src="/LeftArrowGear.svg" alt="" onClick={this.goPrev}
                className={classes.servicesPageSliderLeftArrowGear} />
                <img src="/RightArrowGear.svg" alt="" onClick={this.goNext}
                className={classes.servicesPageSliderRightArrowGear} />
        </div>
        )
    }
}

export default BottomSlider;