import React from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPageSearch = () => {
    return(
        <div className={classes.menuPageSearchRow}>
            <div className={classes.menuPageSearchInputsbox}>
                <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={menuPageSearchInputLeft} />
                <input type="search" className={menuPageSearchInputRight} />
            </div>
            <div className={classes.menuPageSearchLogobox}>
                <img src="/home-icon.png" alt="" className={classes.menuPageSearchCharkhIcon} />
                {/* <span className={classes.menuPageSearchSerachIcon}>S</span> */}
            </div>
        </div>
    )
}

export default MenuPageSearch