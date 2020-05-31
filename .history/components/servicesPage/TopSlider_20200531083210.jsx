import React from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

import classes from './servicesPage.module.scss'

function TopSlider() {

    const [swiper, updateSwiper] = React.useState(null);
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=c265fd02-0194-4d38-83e8-a93bc3698fcc`)
        .then(res => {
            // console.log(res.data.primaryCategories);
            setCategories(res.data.primaryCategories)
        })
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
          containerModifierClass: 'services-swiper-container',
          loop: true,
          freeMode: false,
          grabCursor: false,
          lazy: false,
          centeredSlides: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
        //   breakpoints: {
        //     576: {
        //         centeredSlides: true,
        //         slidesPerView: 'auto',
        //         spaceBetween: 0,
        //     },
        //     300: {
        //         centeredSlides: true,
        //         slidesPerView: 'auto',
        //         spaceBetween: 0,
        //     },
        // }
        }

    return (
        <div className={classes.servicesPageSliderTopContainer}>
            <div className={classes.servicesPageSliderTop}>
                <Swiper {...params} getSwiper={updateSwiper}>
                    {categories !== null && categories !== [] ?
                        categories.map(ctg => (
                            <div className={classes.servicesPageSliderTopItem}>
                                <h6 className={classes.servicesPageSliderTopItemTitle}>
                                    {ctg.title}
                                </h6>
                                <FontAwesomeIcon icon={faToolbox}
                                className={classes.servicesPageSliderTopItemIcon} />
                            </div>
                        ))
                        :null
                    }
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>کالا و خدمات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>مواد آلی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>مصنوعات صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>ابزار و لوازم صنعتی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>مواد شیمیایی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>ابزار باغبانی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                    <div className={classes.servicesPageSliderTopItem}>
                        <h6 className={classes.servicesPageSliderTopItemTitle}>مواد سمی کشاورزی</h6>
                        <FontAwesomeIcon icon={faToolbox}
                        className={classes.servicesPageSliderTopItemIcon} />
                    </div>
                </Swiper>
            </div>
            <button className={classes.servicesPageSliderTopPrev}
            onClick={goPrev}>
                <FontAwesomeIcon icon={faAngleLeft}
                className={classes.servicesPageSliderTopPrevIcon} />
                <FontAwesomeIcon icon={faAngleLeft}
                className={classes.servicesPageSliderTopPrevIcon2} />
            </button>
            <button className={classes.servicesPageSliderTopNext}
            onClick={goNext}>
                <FontAwesomeIcon icon={faAngleRight}
                className={classes.servicesPageSliderTopNextIcon} />
                <FontAwesomeIcon icon={faAngleRight}
                className={classes.servicesPageSliderTopNextIcon2} />
            </button>
        </div>
    )
}

export default TopSlider