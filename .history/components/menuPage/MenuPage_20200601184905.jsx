
import React, {Component} from 'react';
import { TimelineMax, TweenMax, Bounce, Elastic } from "gsap";
import MenuPageSearch from './MenuPageSearch'
import classes from './menuPage.module.scss'

import {CSSPlugin} from 'gsap';
const C = CSSPlugin;

class MenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deg: 0,
            toggleOnce: true
        }

        this.circleMenuMain = null;
        this.circleMenuMainTween = null;

        this.centerBox1 = null
        this.centerBox1Tween = null

        this.centerBox2 = null
        this.centerBox2Tween = null

        this.centerBox3 = null
        this.centerBox3Tween = null

        this.centerBox4 = null
        this.centerBox4Tween = null

        this.centerBox5 = null
        this.centerBox5Tween = null

        this.centerBox6 = null
        this.centerBox6Tween = null

        this.centerBox7 = null
        this.centerBox7Tween = null

        this.centerBox8 = null
        this.centerBox8Tween = null

        this.circleMenuItemIconbox1 = null
        this.circleMenuItemIconbox1Tween = null

        this.circleMenuItemIconbox2 = null
        this.circleMenuItemIconbox2Tween = null

        this.circleMenuItemIconbox3 = null
        this.circleMenuItemIconbox3Tween = null

        this.circleMenuItemIconbox4 = null
        this.circleMenuItemIconbox4Tween = null

        this.circleMenuItemIconbox5 = null
        this.circleMenuItemIconbox5Tween = null

        this.circleMenuItemIconbox6 = null
        this.circleMenuItemIconbox6Tween = null

        this.circleMenuItemIconbox7 = null
        this.circleMenuItemIconbox7Tween = null

        this.circleMenuItemIconbox8 = null
        this.circleMenuItemIconbox8Tween = null
        
        
    }

    componentDidMount() {

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'block', autoAlpha: 1});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 0.3, {rotation: `-${this.state.deg}deg`, ease: Bounce.easeOut});

        this.menuPageInterval = setInterval(() => {
            this.setState({deg: this.state.deg += 45})
            
            this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1, {rotation: -this.state.deg, ease: Elastic.easeOut.config( 1, 0.5)});
            
            if(this.state.deg === 360) {
                this.setState({deg: 0})
            }

            if(this.state.deg === 0) {
                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'block', autoAlpha: 1});

                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(this.state.deg === 45) {
                if(this.state.toggleOnce) {
                    this.centerBox2Tween = new TimelineMax()
                    .to(this.centerBox2, 0.3, {display: 'block', autoAlpha: 1, scale: 1.2})
                    .to(this.centerBox2, 0.4, {scale: 0.7})
                    .to(this.centerBox2, 0.4, {scale: 1})
                    this.setState({toggleOnce: false})
                }
                else{
                    this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'block', autoAlpha: 1});
                }

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(this.state.deg === 90) {
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'block', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(this.state.deg === 135) {
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'block', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(this.state.deg === 180) {
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'block', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(this.state.deg === 225) {
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'block', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(this.state.deg === 270) {
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'block', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
            }

            if(this.state.deg === 315) {
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'block', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#ffd617'})

                this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
                this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
            }

        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.menuPageInterval)
    }


    handleTurn1 = () => {
        this.setState({deg: this.state.deg = -45})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: 0, ease: Elastic.easeOut.config( 0.8, 0.3)});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'block', autoAlpha: 1});

        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
    }

    handleTurn2 = () => {
        this.setState({deg: this.state.deg = 0})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: -45, ease: Elastic.easeOut.config( 0.8, 0.3)});

        if(this.state.toggleOnce) {
            this.centerBox2Tween = new TimelineMax()
            .to(this.centerBox2, 0.3, {display: 'block', autoAlpha: 1, scale: 1.2})
            .to(this.centerBox2, 0.4, {scale: 0.7})
            .to(this.centerBox2, 0.4, {scale: 1})
            this.setState({toggleOnce: false})
        }
        else{
            this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'block', autoAlpha: 1});
        }

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
    }

    handleTurn3 = () => {
        this.setState({deg: this.state.deg = 45})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: -90, ease: Elastic.easeOut.config( 0.8, 0.3)});

        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'block', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
    }
    handleTurn4 = () => {
        this.setState({deg: this.state.deg = 90})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: -135, ease: Elastic.easeOut.config( 0.8, 0.3)});

        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'block', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
    }

    handleTurn5 = () => {
        this.setState({deg: this.state.deg = 135})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: -180, ease: Elastic.easeOut.config( 0.8, 0.3)});

        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'block', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
    }

    handleTurn6 = () => {
        this.setState({deg: this.state.deg = 180})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: -225, ease: Elastic.easeOut.config( 0.8, 0.3)});

        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'block', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
    }

    handleTurn7 = () => {
        this.setState({deg: this.state.deg = 225})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: -270, ease: Elastic.easeOut.config( 0.8, 0.3)});

        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'block', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#0b1033'})
    }
    handleTurn8 = () => {
        this.setState({deg: this.state.deg = 270})

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1.2, {rotation: -315, ease: Elastic.easeOut.config( 0.8, 0.3)});

        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'block', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
    }


    render() {
        return(
            <section name="categoryPage" className={classes.menuPageSection}>

                <MenuPageSearch />

                <div id="centerBox1" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox1].join(' ')}
                ref={div => this.centerBox1 = div}>
                    <h5>خدمات</h5>
                </div>
                <div id="centerBox2" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox2].join(' ')}
                ref={div => this.centerBox2 = div}>
                     <h5>خدمات</h5>
                </div>
                <div id="centerBox3" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox3].join(' ')}
                ref={div => this.centerBox3 = div}>
                     <h5>خدمات</h5>
                </div>
                <div id="centerBox4" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox4].join(' ')}
                ref={div => this.centerBox4 = div}>
                     <h5>خدمات</h5>
                </div>
                <div id="centerBox5" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox5].join(' ')}
                ref={div => this.centerBox5 = div}>
                     <h5>خدمات</h5>
                </div>
                <div id="centerBox6" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox6].join(' ')}
                ref={div => this.centerBox6 = div}>
                     <h5>خدمات</h5>
                </div>
                <div id="centerBox7" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox7].join(' ')}
                ref={div => this.centerBox7 = div}>
                     <h5>خدمات</h5>
                </div>
                <div id="centerBox8" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox8].join(' ')}
                ref={div => this.centerBox8 = div}>
                     <h5>خدمات</h5>
                </div>

                <div id="circleMenuMain" className={classes.circleMenuMain} ref={div => this.circleMenuMain = div}>

                    <div id="circleMenuItem1" className={classes.circleMenuItem1} >
                        <div className={[classes.circleMenuItemIconbox, classes.circleMenuItemIconbox1].join(' ')} ref={div => this.circleMenuItemIconbox1 = div}
                        onClick={() => this.handleTurn1()}>
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

