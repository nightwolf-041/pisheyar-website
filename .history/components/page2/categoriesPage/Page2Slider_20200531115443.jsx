import React from 'react'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

import classes from './categoriesPage.module.scss'

function Page2Slider(props) {
    console.log(props.data);
    const [swiper, updateSwiper] = React.useState(null);

    // React.useEffect(() => {
    //     axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=c265fd02-0194-4d38-83e8-a93bc3698fcc`)
    //     .then(res => {
    //         // console.log(res.data.primaryCategories);
    //         setCategories(res.data.primaryCategories)
    //     })
    // }, [])

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

    return (
        <>
        <div className="sliderContainer">
        {categories !== null && categories !== [] && categories.length > 5 ?
        <div className={classes.page2SliderContainer}>
                <div className={classes.page2Slider}>
                    <Swiper {...params} getSwiper={updateSwiper}>
                        {categories !== null && categories !== [] ?
                            data.map(dt => {
                                <div className={classes.page2SliderItem}>
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
                                        <button className={classes.page2SliderItemButton}>
                                            جزئیات
                                        </button>
                                    </div>
                                </div>
                            })
                        :null
                        }
                        
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
            
        }
        </div>

        <div className="container">
            <div className={classes.page2RichTextbox}></div>
        </div>

   </>
    )
}

export default Page2Slider
