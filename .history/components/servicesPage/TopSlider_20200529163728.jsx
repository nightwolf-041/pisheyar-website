import React from 'react'

function TopSlider() {
    return (
        <div className={classes.servicesPageSliderTop}>
                        <Swiper {...params} getSwiper={updateSwiper}>
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
