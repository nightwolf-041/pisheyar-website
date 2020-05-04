import React, {useState, useEffect, useRef} from 'react';
import anime, { easings } from 'animejs'
import classes from './menuPage.module.scss'

const MenuPage = () => {

    const circleMenuMain = useRef()
    const circleMenuItem1 = useRef()

    let [degree, setDegre] = useState(0)

    let deg = 0
    let subDeg = 0
    let toggleOnce = true
    let index = 0
    useEffect(() => {
        
        // let degre = 0
        setInterval(() => {
            deg += 45
            subDeg += 45
            index += 1
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
                rotate: `-${deg}deg`,
                easings: 'easeInOutElastic(1, 0.5)',
            })
            
            if(deg === 360) {
                deg = 0
                index = 0
                subDeg = 0
            }

            if(subDeg === 0) {
                anime({
                    targets: '#imageee1', 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('imageee1').style.display = 'block'
                    }
                })
                anime({
                    targets: '#imageee2', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee2').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee3', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee3').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee4', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee4').style.display = 'none'
                    }
                })
            }

            if(subDeg === 45) {
                if(toggleOnce) {
                    anime({
                        targets: '#imageee4', 
                        opacity: 1,
                        scale: [
                            {value: 0.7}, 
                            {value: 1}, 
                        ],
                        easing: 'cubicBezier(.5, .05, .1, .3)',
                        begin: () => {
                            document.getElementById('imageee4').style.display = 'block';
                        }
                    })
                    toggleOnce = false
                }
                else{
                    anime({
                        targets: '#imageee4', 
                        opacity: 1,
                        scale: [
                            {value: 0.7}, 
                            {value: 1}, 
                        ],
                        begin: () => {
                            document.getElementById('imageee4').style.display = 'block';
                            document.getElementById('imageee4').style.animation = 'scal'
                        }
                    })
                }
                anime({
                    targets: '#imageee1', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee1').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee2', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee2').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee3', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee3').style.display = 'none'
                    }
                })
            }
            if(subDeg === 90) {
                anime({
                    targets: '#imageee2', 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('imageee2').style.display = 'block'
                    }
                })
                anime({
                    targets: '#imageee1', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee1').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee3', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee3').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee4', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee4').style.display = 'none'
                    }
                })
            }
            if(subDeg === 135) {
                anime({
                    targets: '#imageee3', 
                    opacity: 1,
                    easing: 'cubicBezier(.5, .05, .1, .3)',
                    begin: () => {
                        document.getElementById('imageee3').style.display = 'block'
                    }
                })
                anime({
                    targets: '#imageee1', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee1').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee2', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee2').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee4', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee4').style.display = 'none'
                    }
                })
            }
            if(subDeg === 180) {
                anime({
                    targets: '#imageee3', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee3').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee1', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee1').style.display = 'none'
                    }
                })
                anime({
                    targets: '#imageee2', 
                    opacity: 0,
                    begin: () => {
                        document.getElementById('imageee2').style.display = 'none'
                    }
                })
            }

        }, 3000);
    })

    

    console.log(deg);

    const handleTurn = () => {
        deg = -45
        index = -1
        subDeg = -45
        anime({
            targets: '#circleMenuMain',
            rotate: 0,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: '#imageee1', 
            opacity: 1,
            scale: [
                {value: 1.2}, 
                {value: 1, duration: 1000}, 
            ],
            begin: () => {
                document.getElementById('imageee1').style.display = 'block'
            }
        })
        anime({
            targets: '#imageee4', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee4').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee2', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee2').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee3', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee3').style.display = 'none'
            }
        })
    }
    const handleTurn2 = () => {
        deg = 0
        index = 1
        subDeg = 0
        anime({
            targets: '#circleMenuMain',
            rotate: -45,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: '#imageee4', 
            opacity: 1,
            scale: [
                {value: 1.2}, 
                {value: 1, duration: 1000}, 
            ],
            begin: () => {
                document.getElementById('imageee4').style.display = 'block'
            }
        })
        anime({
            targets: '#imageee1', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee1').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee2', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee2').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee3', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee3').style.display = 'none'
            }
        })
    }
    const handleTurn3 = () => {
        deg = 45
        index = 1
        subDeg = 45
        anime({
            targets: '#circleMenuMain',
            rotate: -90,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: '#imageee2', 
            opacity: 1,
            scale: [
                {value: 1.2}, 
                {value: 1, duration: 1000}, 
            ],
            begin: () => {
                document.getElementById('imageee2').style.display = 'block'
            }
        })
        anime({
            targets: '#imageee1', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee1').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee4', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee4').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee3', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee3').style.display = 'none'
            }
        })
    }
    const handleTurn4 = () => {
        deg = 90
        index = 2
        subDeg = 90
        anime({
            targets: '#circleMenuMain',
            rotate: -135,
            easing: 'easeInOutElastic(1, 0.5)',
        })
        anime({
            targets: '#imageee3', 
            opacity: 1,
            scale: [
                {value: 1.2}, 
                {value: 1, duration: 1000}, 
            ],
            begin: () => {
                document.getElementById('imageee3').style.display = 'block'
            }
        })
        anime({
            targets: '#imageee1', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee1').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee2', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee2').style.display = 'none'
            }
        })
        anime({
            targets: '#imageee4', 
            opacity: 0,
            begin: () => {
                document.getElementById('imageee4').style.display = 'none'
            }
        })
    }
    const handleTurn5 = () => {
        deg = 135
        anime({
            targets: '#circleMenuMain',
            rotate: -180,
            easing: 'easeInOutElastic(1, 0.5)',
        })
    }
    const handleTurn6 = () => {
        deg = 180
        anime({
            targets: '#circleMenuMain',
            rotate: -225,
            easing: 'easeInOutElastic(1, 0.5)',
        })
    }
    const handleTurn7 = () => {
        deg = 225
        anime({
            targets: '#circleMenuMain',
            rotate: -270,
            easing: 'easeInOutElastic(1, 0.5)',
        })
    }
    const handleTurn8 = () => {
        deg = 315
        anime({
            targets: '#circleMenuMain',
            rotate: -315,
            easing: 'easeInOutElastic(1, 0.5)',
        })
    }

    return(
        <div className={classes.circleMenuMainBox}>
             <img id="imageee1" src="/Einweganzug-Karneval.png" alt=""
             className={classes.circleMenuMainImage1} />
             <img id="imageee2" src="/about-man.png" alt=""
             className={classes.circleMenuMainImage2} />
             <img id="imageee3" src="/Background.png" alt=""
             className={classes.circleMenuMainImage2} />
             <img id="imageee4" src="/stock.jpg" alt=""
             className={classes.circleMenuMainImage2} />

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
    )
}

export default MenuPage