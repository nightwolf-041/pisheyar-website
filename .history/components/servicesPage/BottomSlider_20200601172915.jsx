import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Swiper from 'react-id-swiper';
// import BottomCard from './BottomCard';

import classes from './servicesPage.module.scss'

function BottomSlider(props) {
    console.log(props.givenGuid);

    // const data = props.dataForBottom
    const [data, upDatedata] = useState(undefined);
    const [swiper, updateSwiper] = useState(null);

    React.useEffect(() => {
        if(props.givenGuid === undefined || props.givenGuid === null) {
            axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=f32c3568-d38a-42d2-9fbe-6d9bf40ec535`)
            .then(res => {
                console.log(res.data.primaryCategories);
                upDatedata(props.dataForBottom)
            })
        }else{
            upDatedata(props.dataForBottom)
        }
    }, [])

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
        containerModifierClass: 'services-bottomslider-swiper-container',
        loop: true,
        freeMode: false,
        grabCursor: true,
        lazy: true,
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination-bottomSlider',
          clickable: true,
        //   dynamicBullets: true
        },
        breakpoints: {
        400: {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
        300: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 15,
        },
    }
    }

    const renderByCountition = () => {
        if(data !== null && data !== [] && data !== undefined) {
            if(data.length > 2) {
                return(
                    <div className={classes.servicesPageSliderBottom}>
                        <div className={classes.servicesPageSliderBottomSliderbox}>
                            <Swiper {...params } getSwiper={updateSwiper}>
                                {data !== null && data !== [] ?
                                    data.map((dt, index) => (
                                        <div className={classes.servicesPageSliderBottomCard}
                                        key={index}>
                                            <div className={classes.servicesPageSliderBottomCardImgbox}>
                                                <img src="/services-left.jpg" alt=""
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
                        className={classes.servicesPageSliderLeftArrowGear} />
                        <img src="/RightArrowGear.svg" alt="" onClick={goNext}
                        className={classes.servicesPageSliderRightArrowGear} />
                    </div>
                )
            }else if(data.length <=2 && data.length > 0) {
                return (
                    <div className={classes.servicesPageLessItemsBoxBottom}>
                    {data !== null && data !== [] ?
                        data.map((dt, index) => (
                            <div className={classes.servicesPageSliderBottomCardBottomSlider}
                            key={index}>
                                <div className={classes.servicesPageSliderBottomCardImgbox}>
                                    <img src="/services-left.jpg" alt=""
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
