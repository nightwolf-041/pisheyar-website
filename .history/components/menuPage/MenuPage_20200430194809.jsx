import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()
    const circleMenuItem1 = useRef()

    useEffect(() => {
        // let deg
        // let degre = 0
        // setInterval(() => {
        //     deg += 45
            anime({
                targets: '#circleMenuMain',
                // keyframes: [
                //     {rotate: '45deg'},
                //     {rotate: '90deg'},
                //     {rotate: '135deg'},
                //     {rotate: '180deg'},
                //     {rotate: '225deg'},
                //     {rotate: '270deg'},
                //     {rotate: '315deg'},
                //     {rotate: '360deg'},
                //   ],
                rotate: [
                    { value: 50, duration: 500, delay: 2000 },
                    { value: 90, duration: 500, delay: 2000 },
                    { value: 135, duration: 500, delay: 2000 },
                    { value: 180, duration: 500, delay: 2000 },
                    { value: 225, duration: 500, delay: 2000 },
                    { value: 270, duration: 500, delay: 2000 },
                    { value: 315, duration: 500, delay: 2000 },
                    { value: 360, duration: 500, delay: 2000 },
                  ],
                //   duration: 30000,
                  easing: 'easeInOutElastic(1, 0.5)',
                  loop: true
            })
            let doc = document.getElementById('circleMenuMain')
            alert(doc.style.transform)
        //     anime({
        //         targets: '#circleMenuMain',
        //         rotate: `${deg}deg`
        //     })
        // }, 3000);
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