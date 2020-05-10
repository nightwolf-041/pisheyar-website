import React from 'react'
import classes from './servicesPage.module.scss'

function BottomCard(props) {
    return (
        <div className={classes.servicesPageSliderBottomCard}>
            <div className={classes.servicesPageSliderBottomCardImgbox}>
                <img src={props.source} alt=""
                className={classes.servicesPageSliderBottomCardImage} />
            </div>
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
    )
}

export default BottomCard
