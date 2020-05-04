import React, {useEffect, useState, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPageSearch = () => {

    const searchInputsbox = useRef()
    const searchCharkhIcon = useRef()

    let [toggle, setToggle] = useState(false)

    useEffect(() => {
        if(toggle) {
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
            }, 750)
            // let wideInputs = anime.timeline({
            //     duration: 750
            // })
            // wideInputs.add({
            //     targets: searchInputsbox.current,
            //     display: 'flex'
            // }, 0)
            // .add({
              
            // }, 500)
            
        } 
        // else{
        //     anime({
        //         targets: searchCharkhIcon.current,
        //         rotate: 360
        //     })
        //     anime({
        //         targets: searchInputsbox.current,
        //     })
        // }
    })

    const animateToggler = () => {
        setToggle(toggle => !toggle)
    }


    return(
        <div className={classes.menuPageSearchRow}>
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