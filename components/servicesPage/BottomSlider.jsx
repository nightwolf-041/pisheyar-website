
import React, {useState, useRef} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Swiper from 'react-id-swiper';
import Slider from "react-slick";

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
            // focusOnSelect: true,
            swipe: true,
            touchMove: true,
            swipeToSlide: true,
            useCSS: true,
            rtl: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
    
        const { dataForBottom } = this.props

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