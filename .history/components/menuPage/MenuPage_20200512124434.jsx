
import React, {Component} from 'react';
import anime from 'animejs'
import { TimelineLite, TimelineMax, CSSPlugin, TweenLite, Elastic, Power1, Bounce } from "gsap";
// import {SlowMo} from 'gsap/all'
import MenuPageSearch from './MenuPageSearch'
import classes from './menuPage.module.scss'

class MenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}

        this.circleMenuMain = null;
        this.circleMenuMainTween = null;

        this.centerBox1 = null
        this.centerBox2 = null
        this.centerBox3 = null
        this.centerBox4 = null
        this.centerBox5 = null
        this.centerBox6 = null
        this.centerBox7 = null
        this.centerBox8 = null

        this.singleCenterBoxTween = null;
        this.allCenterBoxTween = null;

        this.circleMenuItemIconbox1 = null
        this.circleMenuItemIconbox2 = null
        this.circleMenuItemIconbox3 = null
        this.circleMenuItemIconbox4 = null
        this.circleMenuItemIconbox5 = null
        this.circleMenuItemIconbox6 = null
        this.circleMenuItemIconbox7 = null
        this.circleMenuItemIconbox8 = null

        this.singleCircleMenuItemIconboxTween = null;
        this.allCircleMenuItemIconboxTween = null;
    }

    deg = 0
    subDeg = 0
    toggleOnce = true
    index = 0

    componentDidMount() {

        this.circleMenuMainTween = TweenLite.to(this.circleMenuMain, 0.3, {rotation: -deg, ease: Bounce.easeOut});
        // console.log(deg);
        setInterval(() => {
            deg += 45
            subDeg += 45
            index += 1
            
            this.circleMenuMainTween = TweenLite.to(this.circleMenuMain, 0.3, {rotation: -deg, ease: Bounce.easeOut});
            
            if(deg === 360) {
                deg = 0
                index = 0
                subDeg = 0
            }

            if(subDeg === 0) {
                this.singleCenterBoxTween = TweenLite.to(this.centerBox1, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox2, this.centerBox3, this.centerBox4, this.centerBox5, this.centerBox6, this.centerBox7, this.centerBox8, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox2, this.circleMenuItemIconbox3, this.circleMenuItemIconbox4, this.circleMenuItemIconbox5,this.circleMenuItemIconbox6, this.circleMenuItemIconbox7, this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(subDeg === 45) {
                // if(toggleOnce) {
                //     anime({
                //         targets: centerBox2.current, 
                //         opacity: 1,
                //         scale: [
                //             {value: 1.2}, 
                //             {value: 0.7}, 
                //             {value: 1},
                //         ],
                //         easing: 'linear',
                //         update: () => {
                //             toggleOnce = false
                //             document.getElementById('centerBox2').style.display = 'block';
                //         }
                //     })
                //     toggleOnce = false
                // }
                // else{
                //     anime({
                //         targets: centerBox2.current, 
                //         opacity: 1,
                //         easing: 'cubicBezier(.5, .05, .1, .3)',
                //         update: () => {
                //             document.getElementById('centerBox2').style.display = 'block';
                //         }
                //     })
                // }
                this.singleCenterBoxTween = TweenLite.to(this.centerBox2, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox1, this.centerBox3, this.centerBox4, this.centerBox5, this.centerBox6, this.centerBox7, this.centerBox8, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, this.circleMenuItemIconbox3, this.circleMenuItemIconbox4, this.circleMenuItemIconbox5,this.circleMenuItemIconbox6, this.circleMenuItemIconbox7, this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(subDeg === 90) {
                this.singleCenterBoxTween = TweenLite.to(this.centerBox3, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox1, this.centerBox2, this.centerBox4, this.centerBox5, this.centerBox6, this.centerBox7, this.centerBox8, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, this.circleMenuItemIconbox2, this.circleMenuItemIconbox4, this.circleMenuItemIconbox5,this.circleMenuItemIconbox6, this.circleMenuItemIconbox7, this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(subDeg === 135) {
                this.singleCenterBoxTween = TweenLite.to(this.centerBox4, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox1, this.centerBox2, this.centerBox3, this.centerBox5, this.centerBox6, this.centerBox7, this.centerBox8, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, this.circleMenuItemIconbox2, this.circleMenuItemIconbox3, this.circleMenuItemIconbox5,this.circleMenuItemIconbox6, this.circleMenuItemIconbox7, this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(subDeg === 180) {
                this.singleCenterBoxTween = TweenLite.to(this.centerBox5, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox1, this.centerBox2, this.centerBox3, this.centerBox4, this.centerBox6, this.centerBox7, this.centerBox8, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, this.circleMenuItemIconbox2, this.circleMenuItemIconbox3, this.circleMenuItemIconbox4,this.circleMenuItemIconbox6, this.circleMenuItemIconbox7, this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(subDeg === 225) {
                this.singleCenterBoxTween = TweenLite.to(this.centerBox6, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox1, this.centerBox2, this.centerBox3, this.centerBox4, this.centerBox5, this.centerBox7, this.centerBox8, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, this.circleMenuItemIconbox2, this.circleMenuItemIconbox3, this.circleMenuItemIconbox4,this.circleMenuItemIconbox5, this.circleMenuItemIconbox7, this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(subDeg === 270) {
                this.singleCenterBoxTween = TweenLite.to(this.centerBox7, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox1, this.centerBox2, this.centerBox3, this.centerBox4, this.centerBox5, this.centerBox6, this.centerBox8, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, this.circleMenuItemIconbox2, this.circleMenuItemIconbox3, this.circleMenuItemIconbox4,this.circleMenuItemIconbox5, this.circleMenuItemIconbox6, this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(subDeg === 315) {
                this.singleCenterBoxTween = TweenLite.to(this.centerBox8, 0.3, {display: 'block', autoAlpha: 1, ease: Bounce.easeOut});

                this.allCenterBoxTween = TweenLite.to(this.centerBox1, this.centerBox2, this.centerBox3, this.centerBox4, this.centerBox5, this.centerBox6, this.centerBox7, 
                0.3, {display: 'none', autoAlpha: 0});

                this.singleCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#ffd617'})

                this.allCircleMenuItemIconboxTween = TweenLite.to(this.circleMenuItemIconbox1, this.circleMenuItemIconbox2, this.circleMenuItemIconbox3, this.circleMenuItemIconbox4,this.circleMenuItemIconbox5, this.circleMenuItemIconbox6, this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
            }

        }, 3000);

        // prevHandlerFunc()
        // nextHandlerFunc()

    }

    

    // console.log(deg);
    // console.log('object');

    handleTurn = () => {
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
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox1').style.display = 'block'
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
            targets: centerBox8.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox8').style.display = 'none'
            }
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
    handleTurn2 = () => {
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
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox2').style.display = 'block'
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
            targets: centerBox8.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox8').style.display = 'none'
            }
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
    handleTurn3 = () => {
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
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox3').style.display = 'block'
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
            targets: centerBox8.current, 
            opacity: 0,
            begin: () => {
                document.getElementById('centerBox8').style.display = 'none'
            }
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
    handleTurn4 = () => {
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
            easing: 'cubicBezier(.5, .05, .1, .3)',
            begin: () => {
                document.getElementById('centerBox4').style.display = 'block'
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
    handleTurn5 = () => {
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
    handleTurn6 = () => {
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
    handleTurn7 = () => {
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
    handleTurn8 = () => {
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


    prevHandlerFunc = (e) => {
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

    nextHandlerFunc = () => {
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

    render() {
    
        return(
            <section name="categoryPage" className={classes.menuPageSection}>

                <MenuPageSearch />

                <div id="centerBox1" className={classes.circleMenuMainCenterBoxStart}
                ref={div => this.centerBox1 = div}></div>
                <div id="centerBox2" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox2].join(' ')}
                ref={div => this.centerBox2 = div}></div>
                <div id="centerBox3" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox3].join(' ')}
                ref={div => this.centerBox3 = div}></div>
                <div id="centerBox4" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox4].join(' ')}
                ref={div => this.centerBox4 = div}></div>
                <div id="centerBox5" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox5].join(' ')}
                ref={div => this.centerBox5 = div}></div>
                <div id="centerBox6" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox6].join(' ')}
                ref={div => this.centerBox6 = div}></div>
                <div id="centerBox7" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox7].join(' ')}
                ref={div => this.centerBox7 = div}></div>
                <div id="centerBox8" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox8].join(' ')}
                ref={div => this.centerBox8 = div}></div>

                <div id="circleMenuMain" className={classes.circleMenuMain} ref={div => this.circleMenuMain = div}>
                    <div id="circleMenuItem1" className={classes.circleMenuItem1} >
                        <div className={[classes.circleMenuItemIconbox, classes.circleMenuItemIconbox1].join(' ')} ref={div => this.circleMenuItemIconbox1 = div}
                        onClick={() => this.handleTurn()}>
                            <img src="/menuCtg-1.svg" alt=""
                            className={classes.circleMenuItemIconbox1Image} />
                        </div>
                    </div>
                    <div id="circleMenuItem2" className={classes.circleMenuItem2} >
                        <div className={classes.circleMenuItemIconbox}ref={div => this.circleMenuItemIconbox2 = div}
                        onClick={() => this.handleTurn2()}>
                            <img src="/menuCtg-2.svg" alt=""
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox3 = div}
                        onClick={() => this.handleTurn3()}>
                        <img src="/menuCtg-3.svg" alt=""
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem4" className={classes.circleMenuItem4}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox4 = div}
                        onClick={() => this.handleTurn4()}>
                        <img src="/menuCtg-4.svg" alt=""
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem5" className={classes.circleMenuItem5}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox5 = div}
                        onClick={() => this.handleTurn5()}>
                            <img src="/menuCtg-5.svg" alt=""
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem6" className={classes.circleMenuItem6}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox6 = div}
                        onClick={() => this.handleTurn6()}>
                        <img src="/menuCtg-6.svg" alt=""
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem7" className={classes.circleMenuItem7}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox7 = div}
                        onClick={() => this.handleTurn7()}>
                        <img src="/menuCtg-7.svg" alt=""
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem8" className={classes.circleMenuItem8}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox8 = div}
                        onClick={() => this.handleTurn8()}>
                        <img src="/menuCtg-8.svg" alt=""
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default MenuPage

