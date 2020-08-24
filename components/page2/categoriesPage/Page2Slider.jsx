import React from 'react'
import Link from 'next/link'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

import classes from './categoriesPage.module.scss'

function Page2Slider(props) {

    const ref = React.useRef(null)

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
          containerModifierClass: 'services-swiper-container',
          loop: true,
          freeMode: false,
          grabCursor: true,
          lazy: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 20,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination-bottomSlider',
            clickable: true
          },
          breakpoints: {
            1320: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 20,
            },
            990: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            750: {
                // centeredSlides: false,
                // slidesPerView: 2,
                // spaceBetween: 20,
                centeredSlides: true,
                slidesPerView: 'auto',
            },
            500: {
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
            },
            300: {
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    }

    return (
        <>
        <div className="sliderContainer">
            {
                props.data !== null && props.data !== undefined && props.data !== [] ?

                props.data.length > 3 ?
                <div className={classes.page2SliderContainer}>
                        <div className={classes.page2Slider}>
                            <Swiper ref={ref} {...params }>
                            {props.data !== null && props.data !== undefined && props.data !== [] ?
                                props.data.map((dt, index) => (
                                    <div className={classes.page2SliderItem}
                                    key={index}>
                                        <div className={classes.page2SliderItemTop}>
                                            <div className={classes.page2SliderItemTopBackdrop}></div>
                                            <img src={dt.coverDocument.source} alt=""/>
                                            <h4 className={classes.page2SliderItemTopTitle}>
                                                {dt.title}
                                            </h4>
                                        </div>
                                        {/* <div className={classes.page2SliderItemPriceBox}>
                                            <span>از</span>
                                            <h5>770,000</h5>
                                            <span>تومان</span>
                                        </div> */}
                                        <div className={classes.page2SliderItemButtonBox}>
                                            <Link
                                            href={`/category/[...slug].js`} as={`/category/${dt.title.replace(/ /g,'-')}/${dt.categoryGuid}`}>
                                                <a className={classes.page2SliderItemButton}>
                                                    جزئیات
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                )) : null}
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
                    :
                    props.data.length <= 3 && props.data.length > 0 ?
                    <div className={classes.page2SliderLessItemsBox}>
                    {props.data !== null && props.data !== [] ?
                        props.data.map((dt, index) => (
                            <div className={classes.page2SliderItemLess}
                            key={index}>
                                <div className={classes.page2SliderItemTop}>
                                    <div className={classes.page2SliderItemTopBackdrop}></div>
                                    <img src={dt.coverDocument.source} alt=""/>
                                    <h4 className={classes.page2SliderItemTopTitle}>
                                        {dt.title}
                                    </h4>
                                </div>
                                {/* <div className={classes.page2SliderItemPriceBox}>
                                    <span>از</span>
                                    <h5>770,000</h5>
                                    <span>تومان</span>
                                </div> */}
                                
                                <div className={classes.page2SliderItemButtonBox}>
                                    <Link
                                    href={`/category/[...slug].js`} as={`/category/${dt.title.replace(/ /g,'-')}/${dt.categoryGuid}`}>
                                        <a className={classes.page2SliderItemButton}>
                                            جزئیات
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))
                        :null
                        }
                    </div>
                    :
                    <div className={classes.page2SliderEmptyMsg}>
                        موردی یافت نشد
                    </div>

                : 
                <div className={classes.page2SliderEmptyMsg}>
                    موردی یافت نشد
                </div>
            }
        </div>

        <div className="container">
            {props.description !== null && props.description !== undefined ?
                <div className={classes.page2RichTextbox}>
                    <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
                </div>
                : null
            }
        </div>

   </>
    )
}

export default Page2Slider
