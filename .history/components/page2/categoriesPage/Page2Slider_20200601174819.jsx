import React from 'react'
import Link from 'next/link'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

import classes from './categoriesPage.module.scss'

function Page2Slider(props) {
    console.log(props.data);
    console.log(props.data.description);
    const dataa = props.data
    console.log(dataa);
    const description = dataa.description
    console.log(description);
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
          grabCursor: true,
          lazy: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination-bottomSlider',
            clickable: true,
          //   dynamicBullets: true
          },
          breakpoints: {
            1280: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 20,
            },
            950: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            750: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 20,
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


    const renderByCoundition = () => {
        if(props.data !== null && props.data !== [] && props.data !== undefined) {
            if(props.data.length > 3){
                return(
                    <div className={classes.page2SliderContainer}>
                        <div className={classes.page2Slider}>
                            <Swiper {...params} getSwiper={updateSwiper}>
                                {props.data.map((dt, index) => {
                                    <div className={classes.page2SliderItem}
                                    key={index}>
                                        <div className={classes.page2SliderItemTop}>
                                            <div className={classes.page2SliderItemTopBackdrop}></div>
                                            <img src="/slab-crane-700-2.jpg" alt=""/>
                                            <h4 className={classes.page2SliderItemTopTitle}>
                                                {dt.title}
                                            </h4>
                                        </div>
                                        <div className={classes.page2SliderItemPriceBox}>
                                            <span>از</span>
                                            <h5>770,000</h5>
                                            <span>تومان</span>
                                        </div>
                                        <div className={classes.page2SliderItemButtonBox}>
                                            <Link
                                            href={`/category/[...slug].js`} as={`/category/${dt.title.replace(/ /g,'-')}/${dt.categoryGuid}`}>
                                                <a className={classes.page2SliderItemButton}>
                                                    جزئیات
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                })}
                                
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
            }else if(props.data.length <= 3 && props.data.length > 0) {
               return (
                    <div className={classes.page2SliderLessItemsBox}>
                    {props.data !== null && props.data !== [] ?
                        props.data.map((dt, index) => (
                            <div className={classes.page2SliderItemLess}
                            key={index}>
                                <div className={classes.page2SliderItemTop}>
                                    <div className={classes.page2SliderItemTopBackdrop}></div>
                                    <img src="/slab-crane-700-2.jpg" alt=""/>
                                    <h4 className={classes.page2SliderItemTopTitle}>
                                        {dt.title}
                                    </h4>
                                </div>
                                <div className={classes.page2SliderItemPriceBox}>
                                    <span>از</span>
                                    <h5>770,000</h5>
                                    <span>تومان</span>
                                </div>
                                
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
               )
            }else{
                return(
                    <div className={classes.page2SliderEmptyMsg}>
                        موردی یافت نشد
                    </div>
                )
            }
        }else{
            return(
                <div className={classes.page2SliderEmptyMsg}>
                    موردی یافت نشد
                </div>
            )
        }
    }

    return (
        <>
        <div className="sliderContainer">
            {renderByCoundition()}
        </div>

        <div className="container">
            {description !== null && description !== undefined ?
                <div className={classes.page2RichTextbox}>
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
                : null
            }
        </div>

   </>
    )
}

export default Page2Slider
