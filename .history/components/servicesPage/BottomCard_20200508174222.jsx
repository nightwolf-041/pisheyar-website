import React from 'react'
import classes from

function BottomCard() {
    return (
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src="/" alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
            <p className={classes.servicesPageSliderBottomCardTopTiltle}>
                مهندسین ماهر
            </p>
            <h6 className={classes.servicesPageSliderBottomCardBottomTiltle}>
                ساختمان
            </h6>
            <p className={classes.servicesPageSliderBottomCardDesc}>
                انواع متخصصین حرفه ای و با تجربه حوضه جوشکاری صنعتی و جزئیات و مشخصات آنها
            </p>
            <button className={classes.servicesPageSliderBottomCardButton}>
                جزئیات
            </button>
        </div>
    )
}

export default BottomCard
