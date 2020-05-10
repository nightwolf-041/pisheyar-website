import React, {useState} from 'react'
import Swiper from 'react-id-swiper';
import BottomCard from './BottomCard';

import classes from './servicesPage.module.scss'

function BottomSlider() {

    const [swiper, updateSwiper] = useState(null);

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
          el: '.swiper-pagination',
          clickable: true,
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
        <div className={classes.servicesPageSliderBottom}>
            <div className={classes.servicesPageSliderBottomSliderbox}>
                <Swiper {...params } getSwiper={updateSwiper}>
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
                </Swiper>
            </div>
            <img src="/LeftArrowGear.svg" alt="" onClick={goPrev}
            className={classes.servicesPageSliderLeftArrowGear} />
            <img src="/RightArrowGear.svg" alt="" onClick={goNext}
            className={classes.servicesPageSliderRightArrowGear} />
        </div>
    )
}

export default BottomSlider
