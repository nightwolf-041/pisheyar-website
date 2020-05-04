import React, {useState, useEffect, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()
    const circleMenuItem1 = useRef()

    let deg = 0
    useEffect(() => {
        
        // let degre = 0
        setInterval(() => {
            deg += 45
            console.log(deg);
            // anime({
            //     targets: '#circleMenuMain',
            //     keyframes: [
            //         {rotate: '45deg'},
            //         {rotate: '90deg'},
            //         {rotate: '135deg'},
            //         {rotate: '180deg'},
            //         {rotate: '225deg'},
            //         {rotate: '270deg'},
            //         {rotate: '315deg'},
            //         {rotate: '360deg'},
            //       ],
            //     // rotate: [
            //     //     { value: 50, duration: 500, delay: 2000 },
            //     //     { value: 90, duration: 500, delay: 2000 },
            //     //     { value: 135, duration: 500, delay: 2000 },
            //     //     { value: 180, duration: 500, delay: 2000 },
            //     //     { value: 225, duration: 500, delay: 2000 },
            //     //     { value: 270, duration: 500, delay: 2000 },
            //     //     { value: 315, duration: 500, delay: 2000 },
            //     //     { value: 360, duration: 500, delay: 2000 },
            //     //   ],
            //       duration: 30000,
            //       easing: 'easeInOutElastic(1, 0.5)',
            //       loop: true
            // })
            // let doc = document.getElementById('circleMenuMain')
            // doc.style.transform = `rotate(${deg}deg)`
            anime({
                targets: '#circleMenuMain',
                rotate: `${deg}deg`
            })
            if(deg === 360) {
                deg = 0
            }
        }, 3000);
    })

    const handleTurn = () => {
        deg = 0
        anime({
            targets: '#circleMenuMain',
            rotate: 0
        })
    }
    const handleTurn2 = () => {
        deg = -45
        anime({
            targets: '#circleMenuMain',
            rotate: -45
        })
    }
    const handleTurn3 = () => {
        deg = -90
        anime({
            targets: '#circleMenuMain',
            rotate: -90
        })
    }

    return(
        <div id="circleMenuMain" className={classes.circleMenuMain} ref={circleMenuMain}>
            <div id="circleMenuItem1" className={classes.circleMenuItem1} >
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn}>
                    <span>1</span>
                </div>
            </div>
            <div id="circleMenuItem2" className={classes.circleMenuItem2} >
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn2}>
                <span>2</span>
                </div>
            </div>
            <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn3}>
                <span>3</span>
                </div>
            </div>
            <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn4}>
                <span>4</span>
                </div>
            </div>
            <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn5}>
                <span>5</span>
                </div>
            </div>
            <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn6}>
                <span>6</span>
                </div>
            </div>
            <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn7}>
                <span>7</span>
                </div>
            </div>
            <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                <div className={classes.circleMenuItemIconbox} onClick={handleTurn8}>
                <span>8</span>
                </div>
            </div>
        </div>
    )
}

export default MenuPage