import React, {useEffect, useState, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPageSearch = () => {

    const searchRow = useRef()
    const searchInputsbox = useRef()
    const searchCharkhIcon = useRef()

    let [toggle, setToggle] = useState(true)


    const animateToggler = () => {
        setToggle(!toggle)
        if(toggle === true) {
            let rotateIcon = anime.timeline({
                duration: 750
            })
            rotateIcon.add({
                targets: searchCharkhIcon.current,
                rotate: 360
            })
            .add({
                targets: searchInputsbox.current,
                width: '80%',
                opacity: 1
            }, 750)
            .add({
                targets: searchCharkhIcon.current,
                marginLeft: '-3rem'
            }, 500)
            // .add({
            //     targets: searchRow.current,
            //     left: 'calc(50% - 14.5rem)'
            // }, 500)
            anime({
                targets: searchRow.current,
                left: 'calc(50% - 14.5rem)',
                delay: 500
            })
            
        } 
        if(toggle === false) {
            let rotateIconClose = anime.timeline({
                duration: 750,
                easing: 'easeInOutElastic(1, 0.5)',
            })
            rotateIconClose.add({
                targets: searchCharkhIcon.current,
                rotate: -360
            })
            .add({
                targets: searchInputsbox.current,
                width: 0,
                opacity: 0
            }, 650)
            .add({
                targets: searchCharkhIcon.current,
                marginLeft: 0
            }, 750)
            // .add({
            //     targets: searchRow.current,
            //     left: 'calc(50% - 15rem)'
            // }, 750)
            anime({
                targets: searchRow.current,
                left: 'calc(50% - 15rem)',
                delay: 500
            })
        }

       
    }


    return(
        <div className={classes.menuPageSearchRow} ref={searchRow}>
            <div className={classes.menuPageSearchInputsbox} ref={searchInputsbox}>
                <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeft} />
                <input type="search" className={classes.menuPageSearchInputRight} />
            </div>
            <div className={classes.menuPageSearchLogobox}>
                <img src="/home-icon.png" alt="" ref={searchCharkhIcon}
                className={classes.menuPageSearchCharkhIcon} onClick={animateToggler} />
                {/* <span className={classes.menuPageSearchSerachIcon}>S</span> */}
            </div>
        </div>
    )
}

export default MenuPageSearch