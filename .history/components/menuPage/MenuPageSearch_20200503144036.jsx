import React, {useEffect} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPageSearch = () => {

    useEffect(() => {
        
    })


    return(
        <div className={classes.menuPageSearchRow}>
            <div className={classes.menuPageSearchInputsbox}>
                <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeft} />
                <input type="search" className={classes.menuPageSearchInputRight} />
            </div>
            <div className={classes.menuPageSearchLogobox}>
                <img src="/home-icon.png" alt="" className={classes.menuPageSearchCharkhIcon} />
                {/* <span className={classes.menuPageSearchSerachIcon}>S</span> */}
            </div>
        </div>
    )
}

export default MenuPageSearch