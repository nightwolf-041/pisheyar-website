import React, {useState, useEffect, useRef} from 'react';
import anime, { easings } from 'animejs'
import MenuPageSearch from './MenuPageSearch'
import classes from './menuPage.module.scss'

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

const MenuPage = () => {

    const forceUpdate = useForceUpdate();

    let [stateDeg, setStateDeg] = useState(0)

    const circleMenuMain = useRef()

    const centerBox1 = useRef()
    const centerBox2 = useRef()
    const centerBox3 = useRef()
    const centerBox4 = useRef()
    const centerBox5 = useRef()
    const centerBox6 = useRef()
    const centerBox7 = useRef()
    const centerBox8 = useRef()

    const circleMenuItemIconbox1 = useRef()
    const circleMenuItemIconbox2 = useRef()
    const circleMenuItemIconbox3 = useRef()
    const circleMenuItemIconbox4 = useRef()
    const circleMenuItemIconbox5 = useRef()
    const circleMenuItemIconbox6 = useRef()
    const circleMenuItemIconbox7 = useRef()
    const circleMenuItemIconbox8 = useRef()

    const prevHandler = useRef()
    const nextHandler = useRef()

    let deg = 0
    let subDeg = 0
    let toggleOnce = true
    let index = 0

    useEffect(() => {
        anime({
            targets: circleMenuMain.current,
            rotate: `-${deg}deg`,
            // easings: 'easeInOutElastic(1, 0.5)',
        })
        // console.log(deg);
        setInterval(() => {
            deg += 45
            subDeg += 45
            index += 1
            
            // setStateDeg(stateDeg += 45)
            
            anime({
                targets: circleMenuMain.current,
                rotate: `-${deg}deg`,
                // easings: 'easeInOutElastic(1, 0.5)',
            })
            
            if(deg === 360) {
                deg = 0
                index = 0
                subDeg = 0
                // forceUpdate();
            }

            if(subDeg === 0) {
                anime({
                    targets: centerBox1.current, 
                    opacity: 1,
                    zIndex: 15,
                    delay: -500,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'block'
                    // }
                })
                anime({
                    targets: centerBox2.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox2').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox3.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox4.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox5.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox6.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox7.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox8.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#ffd617'
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#0b1033'
                })
            }

            if(subDeg === 45) {
                if(toggleOnce) {
                    anime({
                        targets: centerBox2.current, 
                        opacity: 1,
                        zIndex: 15,
                        scale: [
                            {value: 1.2}, 
                            {value: 0.7}, 
                            {value: 1},
                        ],
                        easing: 'linear',
                        // begin: () => {
                        //     toggleOnce = false
                        //     document.getElementById('centerBox2').style.display = 'block';
                        // }
                    })
                    toggleOnce = false
                }
                else{
                    anime({
                        targets: centerBox2.current, 
                        opacity: 1,
                        zIndex: 15,
                        easing: 'cubicBezier(.5, .05, .1, .3)',
                        // begin: () => {
                        //     document.getElementById('centerBox2').style.display = 'block';
                        // }
                    })
                }
                anime({
                    targets: centerBox1.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox3.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox4.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox5.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox6.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox7.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox8.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#ffd617'
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#0b1033'
                })
            }
            if(subDeg === 90) {
                anime({
                    targets: centerBox3.current, 
                    opacity: 1,
                    zIndex: 15,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'block'
                    // }
                })
                anime({
                    targets: centerBox1.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox2.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox2').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox4.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox5.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox6.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox7.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox8.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#ffd617'
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#0b1033'
                })
            }
            if(subDeg === 135) {
                anime({
                    targets: centerBox4.current, 
                    opacity: 1,
                    zIndex: 15,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'block'
                    // }
                })
                anime({
                    targets: centerBox1.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox2.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox2').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox3.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox5.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox6.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox7.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox8.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#ffd617',
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#0b1033'
                })
            }
            if(subDeg === 180) {
                anime({
                    targets: centerBox5.current, 
                    opacity: 1,
                    zIndex: 15,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'block'
                    // }
                })
                anime({
                    targets: centerBox1.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox2.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox2').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox3.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox4.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox6.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox7.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox8.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#ffd617',
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#0b1033'
                })
            }

            if(subDeg === 225) {
                anime({
                    targets: centerBox6.current, 
                    opacity: 1,
                    zIndex: 15,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'block'
                    // }
                })
                anime({
                    targets: centerBox1.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox2.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox2').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox3.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox4.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox5.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox7.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox8.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#ffd617'
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#0b1033'
                })
            }

            if(subDeg === 270) {
                anime({
                    targets: centerBox7.current, 
                    opacity: 1,
                    zIndex: 15,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'block'
                    // }
                })
                anime({
                    targets: centerBox1.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox2.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox2').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox3.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox4.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox5.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox6.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox8.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#ffd617'
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#0b1033'
                })
            }

            if(subDeg === 315) {
                anime({
                    targets: centerBox8.current, 
                    opacity: 1,
                    zIndex: 15,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    // begin: () => {
                    //     document.getElementById('centerBox8').style.display = 'block'
                    // }
                })
                anime({
                    targets: centerBox1.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox1').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox2.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox2').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox3.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox3').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox4.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox4').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox5.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox5').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox6.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox6').style.display = 'none'
                    // }
                })
                anime({
                    targets: centerBox7.current, 
                    opacity: 0,
                    zIndex: -5,
                    // begin: () => {
                    //     document.getElementById('centerBox7').style.display = 'none'
                    // }
                })
                anime({
                    targets: circleMenuItemIconbox8.current,
                    backgroundColor: '#ffd617',
                })
                anime({
                    targets: circleMenuItemIconbox1.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox2.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox3.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox4.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox5.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox6.current,
                    backgroundColor: '#0b1033'
                })
                anime({
                    targets: circleMenuItemIconbox7.current,
                    backgroundColor: '#0b1033'
                })
            }

        }, 3000);

        // prevHandlerFunc()
        // nextHandlerFunc()

    })

    

    // console.log(deg);
    console.log('sd')

    const handleTurn = () => {
        deg = -45
        index = -1
        subDeg = -45
        anime({
            targets: circleMenuMain.current,
            rotate: 0,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox1.current, 
            opacity: 1,
            zIndex: 15,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            // begin: () => {
            //     document.getElementById('centerBox1').style.display = 'block'
            // }
        })
        anime({
            targets: centerBox2.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox2').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox3.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox3').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox4.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox4').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox5.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox5').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox6.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox6').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox7.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox7').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox8.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox8').style.display = 'none'
            // }
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#ffd617'
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#0b1033'
        })
    }
    const handleTurn2 = () => {
        deg = 0
        index = 1
        subDeg = 0
        anime({
            targets: circleMenuMain.current,
            rotate: -45,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox2.current, 
            opacity: 1,
            zIndex: 15,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            // begin: () => {
            //     document.getElementById('centerBox2').style.display = 'block'
            // }
        })
        anime({
            targets: centerBox1.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox1').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox3.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox3').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox4.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox4').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox5.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox5').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox6.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox6').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox7.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox7').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox8.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox8').style.display = 'none'
            // }
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#ffd617'
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#0b1033'
        })
    }
    const handleTurn3 = () => {
        deg = 45
        index = 1
        subDeg = 45
        anime({
            targets: circleMenuMain.current,
            rotate: -90,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox3.current, 
            opacity: 1,
            zIndex: 15,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            // begin: () => {
            //     document.getElementById('centerBox3').style.display = 'block'
            // }
        })
        anime({
            targets: centerBox1.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox1').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox2.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox2').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox4.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox4').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox5.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox5').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox6.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox6').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox7.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox7').style.display = 'none'
            // }
        })
        anime({
            targets: centerBox8.current, 
            opacity: 0,
            zIndex: -5,
            // begin: () => {
            //     document.getElementById('centerBox8').style.display = 'none'
            // }
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#ffd617'
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#0b1033'
        })
    }
    const handleTurn4 = () => {
        deg = 90
        index = 2
        subDeg = 90
        anime({
            targets: circleMenuMain.current,
            rotate: -135,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox4.current, 
            opacity: 1,
            zIndex: 15,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            // begin: () => {
            //     document.getElementById('centerBox4').style.display = 'block'
            // }
        })
        anime({
            targets: centerBox1.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
            }
        })
        anime({
            targets: centerBox2.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox2').style.display = 'none'
            }
        })
        anime({
            targets: centerBox3.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox3').style.display = 'none'
            }
        })
        anime({
            targets: centerBox5.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox5').style.display = 'none'
            }
        })
        anime({
            targets: centerBox6.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox6').style.display = 'none'
            }
        })
        anime({
            targets: centerBox7.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox7').style.display = 'none'
            }
        })
        anime({
            targets: centerBox8.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#ffd617',
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#0b1033'
        })
    }
    const handleTurn5 = () => {
        deg = 135
        index = 3
        subDeg = 135
        anime({
            targets: circleMenuMain.current,
            rotate: -180,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox5.current, 
            opacity: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox5').style.display = 'block'
            }
        })
        anime({
            targets: centerBox1.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
            }
        })
        anime({
            targets: centerBox2.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox2').style.display = 'none'
            }
        })
        anime({
            targets: centerBox3.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox3').style.display = 'none'
            }
        })
        anime({
            targets: centerBox4.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox4').style.display = 'none'
            }
        })
        anime({
            targets: centerBox6.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox6').style.display = 'none'
            }
        })
        anime({
            targets: centerBox7.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox7').style.display = 'none'
            }
        })
        anime({
            targets: centerBox8.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#ffd617',
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#0b1033'
        })
    }
    const handleTurn6 = () => {
        deg = 180
        index = 4
        subDeg = 180
        anime({
            targets: circleMenuMain.current,
            rotate: -225,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox6.current, 
            opacity: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox6').style.display = 'block'
            }
        })
        anime({
            targets: centerBox1.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
            }
        })
        anime({
            targets: centerBox2.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox2').style.display = 'none'
            }
        })
        anime({
            targets: centerBox3.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox3').style.display = 'none'
            }
        })
        anime({
            targets: centerBox4.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox4').style.display = 'none'
            }
        })
        anime({
            targets: centerBox5.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox5').style.display = 'none'
            }
        })
        anime({
            targets: centerBox7.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox7').style.display = 'none'
            }
        })
        anime({
            targets: centerBox8.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#ffd617'
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#0b1033'
        })
    }
    const handleTurn7 = () => {
        deg = 225
        index = 5
        subDeg = 225
        anime({
            targets: circleMenuMain.current,
            rotate: -270,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox7.current, 
            opacity: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox7').style.display = 'block'
            }
        })
        anime({
            targets: centerBox1.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
            }
        })
        anime({
            targets: centerBox2.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox2').style.display = 'none'
            }
        })
        anime({
            targets: centerBox3.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox3').style.display = 'none'
            }
        })
        anime({
            targets: centerBox4.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox4').style.display = 'none'
            }
        })
        anime({
            targets: centerBox5.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox5').style.display = 'none'
            }
        })
        anime({
            targets: centerBox6.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox6').style.display = 'none'
            }
        })
        anime({
            targets: centerBox8.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#ffd617'
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#0b1033'
        })
    }
    const handleTurn8 = () => {
        deg = 270
        index = 6
        subDeg = 270
        // console.log(subDeg);
        anime({
            targets: circleMenuMain.current,
            rotate: -315,
            // easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox8.current, 
            opacity: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox8').style.display = 'block'
            }
        })
        anime({
            targets: centerBox1.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
            }
        })
        anime({
            targets: centerBox2.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox2').style.display = 'none'
            }
        })
        anime({
            targets: centerBox3.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox3').style.display = 'none'
            }
        })
        anime({
            targets: centerBox4.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox4').style.display = 'none'
            }
        })
        anime({
            targets: centerBox5.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox5').style.display = 'none'
            }
        })
        anime({
            targets: centerBox6.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox6').style.display = 'none'
            }
        })
        anime({
            targets: centerBox7.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox7').style.display = 'none'
            }
        })
        anime({
            targets: circleMenuItemIconbox8.current,
            backgroundColor: '#ffd617',
        })
        anime({
            targets: circleMenuItemIconbox1.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox2.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox3.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox4.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox5.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox6.current,
            backgroundColor: '#0b1033'
        })
        anime({
            targets: circleMenuItemIconbox7.current,
            backgroundColor: '#0b1033'
        })
    }


    const prevHandlerFunc = (e) => {
        index - 1
        if(deg === 0) {
            deg += 270
            subDeg += 270
        }else{
            deg -= 90
            subDeg -= 90
        }

        let timeln = anime.timeline({
            duration: 500,
            easing: 'easeInElastic(1, .2)',
        })
        timeln.add({
            targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current],  
            opacity: 0,
            easing: 'linear',
            duration: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        }, '-=750')
        .add({
            targets: circleMenuMain.current,
            rotate: `-${deg + 45}deg`,
            delay: 500
        })
    }

    const nextHandlerFunc = () => {
        index - 1
        if(deg === 360) {
            deg -= 270
            subDeg -= 270
        }else{
            deg += 0
            subDeg += 0
        }

        let timeln = anime.timeline({
            duration: 500,
            easing: 'easeInElastic(1, .2)',
        })
        timeln.add({
            targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current],  
            opacity: 0,
            easing: 'linear',
            duration: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        }, '-=750')
        .add({
            targets: circleMenuMain.current,
            rotate: `-${deg + 45}deg`,
            delay: 500
        })
    }


    return(
        <section name="categoryPage" className={classes.menuPageSection}>
            {/* <a className={classes.circleMenuMainBoxPrev} onClick={(e) => prevHandlerFunc(e)}
            ref={prevHandler}>قبلی</a>
            <a className={classes.circleMenuMainBoxNext} onClick={(e) => nextHandlerFunc(e)}
            ref={nextHandler}>بعدی</a> */}
            <MenuPageSearch />

             <div id="centerBox1" className={classes.circleMenuMainCenterBoxStart}
             ref={centerBox1}></div>
             <div id="centerBox2" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox2].join(' ')}
             ref={centerBox2}></div>
             <div id="centerBox3" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox3].join(' ')}
             ref={centerBox3}></div>
             <div id="centerBox4" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox4].join(' ')}
             ref={centerBox4}></div>
             <div id="centerBox5" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox5].join(' ')}
             ref={centerBox5}></div>
             <div id="centerBox6" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox6].join(' ')}
             ref={centerBox6}></div>
             <div id="centerBox7" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox7].join(' ')}
             ref={centerBox7}></div>
             <div id="centerBox8" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox8].join(' ')}
             ref={centerBox8}></div>

            <div id="circleMenuMain" className={classes.circleMenuMain} ref={circleMenuMain}>
                <div id="circleMenuItem1" className={classes.circleMenuItem1} >
                    <div className={[classes.circleMenuItemIconbox, classes.circleMenuItemIconbox1].join(' ')} ref={circleMenuItemIconbox1}
                    onClick={() => handleTurn()}>
                        <img src="/menuCtg-1.svg" alt=""
                        className={classes.circleMenuItemIconbox1Image} />
                    </div>
                </div>
                <div id="circleMenuItem2" className={classes.circleMenuItem2} >
                    <div className={classes.circleMenuItemIconbox}ref={circleMenuItemIconbox2}
                    onClick={() => handleTurn2()}>
                        <img src="/menuCtg-2.svg" alt=""
                        className={classes.circleMenuItemIconboxImage} />
                    </div>
                </div>
                <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                    <div className={classes.circleMenuItemIconbox} ref={circleMenuItemIconbox3}
                    onClick={() => handleTurn3()}>
                      <img src="/menuCtg-3.svg" alt=""
                        className={classes.circleMenuItemIconboxImage} />
                    </div>
                </div>
                <div id="circleMenuItem4" className={classes.circleMenuItem4}>
                    <div className={classes.circleMenuItemIconbox} ref={circleMenuItemIconbox4}
                    onClick={() => handleTurn4()}>
                       <img src="/menuCtg-4.svg" alt=""
                        className={classes.circleMenuItemIconboxImage} />
                    </div>
                </div>
                <div id="circleMenuItem5" className={classes.circleMenuItem5}>
                    <div className={classes.circleMenuItemIconbox} ref={circleMenuItemIconbox5}
                    onClick={() => handleTurn5()}>
                        <img src="/menuCtg-5.svg" alt=""
                        className={classes.circleMenuItemIconboxImage} />
                    </div>
                </div>
                <div id="circleMenuItem6" className={classes.circleMenuItem6}>
                    <div className={classes.circleMenuItemIconbox} ref={circleMenuItemIconbox6}
                    onClick={() => handleTurn6()}>
                       <img src="/menuCtg-6.svg" alt=""
                        className={classes.circleMenuItemIconboxImage} />
                    </div>
                </div>
                <div id="circleMenuItem7" className={classes.circleMenuItem7}>
                    <div className={classes.circleMenuItemIconbox} ref={circleMenuItemIconbox7}
                    onClick={() => handleTurn7()}>
                       <img src="/menuCtg-7.svg" alt=""
                        className={classes.circleMenuItemIconboxImage} />
                    </div>
                </div>
                <div id="circleMenuItem8" className={classes.circleMenuItem8}>
                    <div className={classes.circleMenuItemIconbox} ref={circleMenuItemIconbox8}
                    onClick={() => handleTurn8()}>
                       <img src="/menuCtg-8.svg" alt=""
                        className={classes.circleMenuItemIconboxImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuPage