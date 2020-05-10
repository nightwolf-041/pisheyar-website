import React from 'react'
import Swiper from 'react-id-swiper';
import BottomCard from './BottomCard';

function BottomSlider() {

    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }

    return (
        <Swiper {...params}>
            <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <div className={classes.servicesPageSliderBottomCardBottom}>
                <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                    {props.topTitle}
                </p>
                <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                    {props.bottomTitle}
                </h6>
                <p className={classes.servicesPageSliderBottomCardDesc}>
                    {props.description}
                </p>
                <button className={classes.servicesPageSliderBottomCardButton}>
                    جزئیات
                </button>
            </div>
        </div>
    </Swiper>
    )
}

export default BottomSlider
