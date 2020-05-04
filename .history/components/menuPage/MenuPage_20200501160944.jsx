import React, {useState, useEffect, useRef} from 'react';
import anime, { easings } from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()

    const centerBox1 = useRef()
    const centerBox2 = useRef()
    const centerBox3 = useRef()
    const centerBox4 = useRef()
    const centerBox5 = useRef()
    const centerBox6 = useRef()
    const centerBox7 = useRef()
    const centerBox8 = useRef()

    const prevHandler = useRef()
    const nextHandler = useRef()

    let [deg, setDeg] = useState(0)
    let [subDeg, setSubDeg] = useState(0)

    // let deg = 0
    // let subDeg = 0
    let toggleOnce = true
    let index = 0

    useEffect(() => {
        
        setInterval(() => {
            deg += 45
            subDeg += 45
            index += 1
            
            anime({
                targets: circleMenuMain.current,
                rotate: `-${deg}deg`,
                easings: 'easeInOutElastic(1, 0.5)',
            })
            
            if(deg === 360) {
                setDeg(0)
                index = 0
                setSubDeg(0)
            }

            if(subDeg === 0) {
                anime({
                    targets: centerBox1.current, 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'block'
                    }
                })
                anime({
                    targets: [centerBox2.current,centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox2').style.display = 'none'
                        document.getElementById('centerBox3').style.display = 'none'
                        document.getElementById('centerBox4').style.display = 'none'
                        document.getElementById('centerBox5').style.display = 'none'
                        document.getElementById('centerBox6').style.display = 'none'
                        document.getElementById('centerBox7').style.display = 'none'
                        document.getElementById('centerBox8').style.display = 'none'
                    }
                })
            }

            if(subDeg === 45) {
                if(toggleOnce) {
                    anime({
                        targets: centerBox2.current, 
                        opacity: 1,
                        scale: [
                            {value: 1.2}, 
                            {value: 0.7}, 
                            {value: 1},
                        ],
                        // easing: 'cubicBezier(.5, .05, .1, .3)',
                        easing: 'linear',
                        update: () => {
                            toggleOnce = false
                            document.getElementById('centerBox2').style.display = 'block';
                        }
                    })
                    toggleOnce = false
                }
                else{
                    anime({
                        targets: centerBox2.current, 
                        opacity: 1,
                        easing: 'cubicBezier(.5, .05, .1, .3)',
                        update: () => {
                            document.getElementById('centerBox2').style.display = 'block';
                        }
                    })
                }
                anime({
                    targets: [centerBox1.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'none'
                        document.getElementById('centerBox3').style.display = 'none'
                        document.getElementById('centerBox4').style.display = 'none'
                        document.getElementById('centerBox5').style.display = 'none'
                        document.getElementById('centerBox6').style.display = 'none'
                        document.getElementById('centerBox7').style.display = 'none'
                        document.getElementById('centerBox8').style.display = 'none'
                    }
                })
            }
            if(subDeg === 90) {
                anime({
                    targets: centerBox3.current, 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('centerBox3').style.display = 'block'
                    }
                })
                anime({
                    targets: [centerBox1.current, centerBox2.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'none'
                        document.getElementById('centerBox2').style.display = 'none'
                        document.getElementById('centerBox4').style.display = 'none'
                        document.getElementById('centerBox5').style.display = 'none'
                        document.getElementById('centerBox6').style.display = 'none'
                        document.getElementById('centerBox7').style.display = 'none'
                        document.getElementById('centerBox8').style.display = 'none'
                    }
                })
            }
            if(subDeg === 135) {
                anime({
                    targets: centerBox4.current, 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('centerBox4').style.display = 'block'
                    }
                })
                anime({
                    targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'none'
                        document.getElementById('centerBox2').style.display = 'none'
                        document.getElementById('centerBox3').style.display = 'none'
                        document.getElementById('centerBox5').style.display = 'none'
                        document.getElementById('centerBox6').style.display = 'none'
                        document.getElementById('centerBox7').style.display = 'none'
                        document.getElementById('centerBox8').style.display = 'none'
                    }
                })
            }
            if(subDeg === 180) {
                anime({
                    targets: centerBox5.current, 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('centerBox5').style.display = 'block'
                    }
                })
                anime({
                    targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox6.current, centerBox7.current, centerBox8.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'none'
                        document.getElementById('centerBox2').style.display = 'none'
                        document.getElementById('centerBox3').style.display = 'none'
                        document.getElementById('centerBox4').style.display = 'none'
                        document.getElementById('centerBox6').style.display = 'none'
                        document.getElementById('centerBox7').style.display = 'none'
                        document.getElementById('centerBox8').style.display = 'none'
                    }
                })
            }

            if(subDeg === 225) {
                anime({
                    targets: centerBox6.current, 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('centerBox6').style.display = 'block'
                    }
                })
                anime({
                    targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox7.current, centerBox8.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'none'
                        document.getElementById('centerBox2').style.display = 'none'
                        document.getElementById('centerBox3').style.display = 'none'
                        document.getElementById('centerBox4').style.display = 'none'
                        document.getElementById('centerBox5').style.display = 'none'
                        document.getElementById('centerBox7').style.display = 'none'
                        document.getElementById('centerBox8').style.display = 'none'
                    }
                })
            }

            if(subDeg === 270) {
                anime({
                    targets: centerBox7.current, 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('centerBox7').style.display = 'block'
                    }
                })
                anime({
                    targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox8.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'none'
                        document.getElementById('centerBox2').style.display = 'none'
                        document.getElementById('centerBox3').style.display = 'none'
                        document.getElementById('centerBox4').style.display = 'none'
                        document.getElementById('centerBox5').style.display = 'none'
                        document.getElementById('centerBox6').style.display = 'none'
                        document.getElementById('centerBox8').style.display = 'none'
                    }
                })
            }

            if(subDeg === 315) {
                anime({
                    targets: centerBox8.current, 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('centerBox8').style.display = 'block'
                    }
                })
                anime({
                    targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current], 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('centerBox1').style.display = 'none'
                        document.getElementById('centerBox2').style.display = 'none'
                        document.getElementById('centerBox3').style.display = 'none'
                        document.getElementById('centerBox4').style.display = 'none'
                        document.getElementById('centerBox5').style.display = 'none'
                        document.getElementById('centerBox6').style.display = 'none'
                        document.getElementById('centerBox7').style.display = 'none'
                    }
                })
            }

        }, 3000);
    })

    

    console.log(deg);

    const handleTurn = () => {
        setDeg(-45)
        index = -1
        setSubDeg(-45)
        anime({
            targets: circleMenuMain.current,
            rotate: 0,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox1.current, 
            opacity: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1, duration: 1000}, 
            // ],
            begin: () => {
                document.getElementById('centerBox1').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current], 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
    }
    const handleTurn2 = () => {
        setDeg(0)
        index = 0
        setSubDeg(0)
        anime({
            targets: circleMenuMain.current,
            rotate: -45,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox2.current, 
            opacity: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            // easing: 'linear',
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1}, 
            //     {value: 0.7}, 
            //     {value: 1}, 
            // ],
            begin: () => {
                document.getElementById('centerBox2').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox1.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current], 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
    }
    const handleTurn3 = () => {
        setDeg(45)
        index = 1
        setSubDeg(45)
        anime({
            targets: circleMenuMain.current,
            rotate: -90,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox3.current, 
            opacity: 1,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1, duration: 1000}, 
            // ],
            begin: () => {
                document.getElementById('centerBox3').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox1.current, centerBox2.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current],  
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
    }
    const handleTurn4 = () => {
        setDeg(90)
        index = 2
        setSubDeg(90)
        anime({
            targets: circleMenuMain.current,
            rotate: -135,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox4.current, 
            opacity: 1,
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1, duration: 1000}, 
            // ],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox4').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox5.current, centerBox6.current, centerBox7.current, centerBox8.current],  
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
    }
    const handleTurn5 = () => {
        setDeg(135)
        index = 3
        setSubDeg(135)
        anime({
            targets: circleMenuMain.current,
            rotate: -180,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox5.current, 
            opacity: 1,
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1, duration: 1000}, 
            // ],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox5').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox6.current, centerBox7.current, centerBox8.current],  
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
    }
    const handleTurn6 = () => {
        setDeg(180)
        index = 4
        setSubDeg(180)
        anime({
            targets: circleMenuMain.current,
            rotate: -225,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox6.current, 
            opacity: 1,
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1, duration: 1000}, 
            // ],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox6').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox7.current, centerBox8.current],  
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
    }
    const handleTurn7 = () => {
        setDeg(225)
        index = 5
        setSubDeg(225)
        anime({
            targets: circleMenuMain.current,
            rotate: -270,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox7.current, 
            opacity: 1,
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1, duration: 1000}, 
            // ],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox7').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox8.current],  
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox8').style.display = 'none'
            }
        })
    }
    const handleTurn8 = () => {
        setDeg(270)
        index = 6
        setSubDeg(270)
        console.log(subDeg);
        anime({
            targets: circleMenuMain.current,
            rotate: -315,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: centerBox8.current, 
            opacity: 1,
            // scale: [
            //     {value: 1.2}, 
            //     {value: 1, duration: 1000}, 
            // ],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox8').style.display = 'block'
            }
        })
        anime({
            targets: [centerBox1.current, centerBox2.current, centerBox3.current, centerBox4.current, centerBox5.current, centerBox6.current, centerBox7.current],  
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox1').style.display = 'none'
                document.getElementById('centerBox2').style.display = 'none'
                document.getElementById('centerBox3').style.display = 'none'
                document.getElementById('centerBox4').style.display = 'none'
                document.getElementById('centerBox5').style.display = 'none'
                document.getElementById('centerBox6').style.display = 'none'
                document.getElementById('centerBox7').style.display = 'none'
            }
        })
    }

    const prevHandlerFunc = () => {
        setDeg(deg + 45)
        index = index-1
        setSubDeg(setSubDeg + 45)
        // anime({
        //     targets: circleMenuMain.current,
        //     rotate: deg,
        //     easing: 'easeInOutElastic(1, 0.5)',
        // })
        console.log(subDeg, deg);
    }

    const nextHandlerFunc = () => {
        setDeg(deg - 45)
        index = index+1
        setSubDeg(setSubDeg - 45)
        // anime({
        //     targets: circleMenuMain.current,
        //     rotate: deg,
        //     easing: 'easeInOutElastic(1, 0.5)',
        // })
        console.log(subDeg, deg);
    }

    return(
        <>
        <button className={classes.circleMenuMainBoxPrev} onClick={prevHandlerFunc}
        ref={prevHandler}>قبلی</button>
        <button className={classes.circleMenuMainBoxNext} onClick={nextHandlerFunc}
        ref={nextHandler}>بعدی</button>
        <div className={classes.circleMenuMainBox}>

             <div id="centerBox1" className={classes.circleMenuMainCenterBoxStart}
             ref={centerBox1}></div>
             <div id="centerBox2" className={classes.circleMenuMainCenterBox}
             ref={centerBox2}></div>
             <div id="centerBox3" className={classes.circleMenuMainCenterBox}
             ref={centerBox3}></div>
             <div id="centerBox4" className={classes.circleMenuMainCenterBox}
             ref={centerBox4}></div>
             <div id="centerBox5" className={classes.circleMenuMainCenterBox}
             ref={centerBox5}></div>
             <div id="centerBox6" className={classes.circleMenuMainCenterBox}
             ref={centerBox6}></div>
             <div id="centerBox7" className={classes.circleMenuMainCenterBox}
             ref={centerBox7}></div>
             <div id="centerBox8" className={classes.circleMenuMainCenterBox}
             ref={centerBox8}></div>

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
                <div id="circleMenuItem4" className={classes.circleMenuItem4}>
                    <div className={classes.circleMenuItemIconbox} onClick={handleTurn4}>
                    <span>4</span>
                    </div>
                </div>
                <div id="circleMenuItem5" className={classes.circleMenuItem5}>
                    <div className={classes.circleMenuItemIconbox} onClick={handleTurn5}>
                    <span>5</span>
                    </div>
                </div>
                <div id="circleMenuItem6" className={classes.circleMenuItem6}>
                    <div className={classes.circleMenuItemIconbox} onClick={handleTurn6}>
                    <span>6</span>
                    </div>
                </div>
                <div id="circleMenuItem7" className={classes.circleMenuItem7}>
                    <div className={classes.circleMenuItemIconbox} onClick={handleTurn7}>
                    <span>7</span>
                    </div>
                </div>
                <div id="circleMenuItem8" className={classes.circleMenuItem8}>
                    <div className={classes.circleMenuItemIconbox} onClick={handleTurn8}>
                    <span>8</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MenuPage