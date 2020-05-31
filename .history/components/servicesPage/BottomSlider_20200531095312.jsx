import React, {useState} from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper';
import BottomCard from './BottomCard';

import classes from './servicesPage.module.scss'

function BottomSlider(props) {
    console.log(props.givenGuid);
    const [swiper, updateSwiper] = useState(null);
    const [data, setData] = useState(['sad', 'sad']);

    React.useEffect(() => {
        axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=${props.givenGuid}`)
        .then(res => {
            console.log(res.data.primaryCategories);
            setData(res.data.primaryCategories)
        })
    }, [props.givenGuid])

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

    return (
        <>
         {data !== null && data !== [] && data.length > 2 ?
            <div className={classes.servicesPageSliderBottom}>
                <div className={classes.servicesPageSliderBottomSliderbox}>
                    <Swiper {...params } getSwiper={updateSwiper}>
                        {data !== null && data !== [] ?
                            data.map(ctg => (
                                <div className={classes.servicesPageSliderBottomCard}>
                                    <div className={classes.servicesPageSliderBottomCardImgbox}>
                                        <img src="/services-left.jpg" alt=""
                                        className={classes.servicesPageSliderBottomCardImage} />
                                    </div>
                                    <div className={classes.servicesPageSliderBottomCardBottom}>
                                        <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                                            متخصصین ماهر
                                        </p>
                                        <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                                            ساختمان
                                        </h6>
                                        <p className={classes.servicesPageSliderBottomCardDesc}>
                                            متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                                        </p>
                                        <button className={classes.servicesPageSliderBottomCardButton}>
                                            جزئیات
                                        </button>
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
            :
            <div className={classes.servicesPageLessItemsBoxBottom}>
                {data !== null && data !== [] ?
                    data.map(ctg => (
                        <div className={classes.servicesPageSliderBottomCardBottomSlider}>
                            <div className={classes.servicesPageSliderBottomCardImgbox}>
                                <img src="/services-left.jpg" alt=""
                                className={classes.servicesPageSliderBottomCardImage} />
                            </div>
                            <div className={classes.servicesPageSliderBottomCardBottom}>
                                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                                    متخصصین ماهر
                                </p>
                                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                                    ساختمان
                                </h6>
                                <p className={classes.servicesPageSliderBottomCardDesc}>
                                    متخصصین ماهر و با تجربه ما که به شما کمک میکنند ساختمان های خود را بسازید
                                </p>
                                <button className={classes.servicesPageSliderBottomCardButton}>
                                    جزئیات
                                </button>
                            </div>
                        </div>
                    ))
                    :null
                }
            </div>
         }
        </>
    )
}

export default BottomSlider
