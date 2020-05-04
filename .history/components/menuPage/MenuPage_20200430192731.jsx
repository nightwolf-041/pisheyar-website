import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()
    const circleMenuItem1 = useRef()

    useEffect(() => {
        let deg = 0
        // setInterval(() => {
            deg + 45
            anime({
                targets: '#circleMenuMain',
                keyframes: [
                    {rotate: '45deg'},
                    {rotate: '90deg'},
                    {rotate: '135deg'},
                    {rotate: '180deg'},
                    {rotate: '225deg'},
                    {rotate: '270deg'},
                    {rotate: '315deg'},
                    {rotate: '360deg'},
                  ],
                  duration: 30000,
                  easing: 'inElastic(1, 0.5)',
                  loop: true
            })
        // }, 2000);
    })

    return(
        <div id="circleMenuMain" className={classes.circleMenuMain} ref={circleMenuMain}>
            <div className={classes.circleMenuItem1} ref={circleMenuItem1}>
                <div className={classes.circleMenuItemIconbox}></div>
            </div>
            <div className={classes.circleMenuItem2}>
                <div className={classes.circleMenuItemIconbox}></div>
            </div>
            <div className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox}></div>
            </div>
        </div>
    )
}

export default MenuPage