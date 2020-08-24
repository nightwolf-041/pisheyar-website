
import React, {Component} from 'react';
import axios from 'axios'
import Link from 'next/link'
import { TimelineMax, TweenMax, Bounce, Elastic } from "gsap";
import classes from './menuPage.module.scss'

import {CSSPlugin} from 'gsap';
const C = CSSPlugin;

class MenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            centerBoxes: [],
            icons: [],
            deg: 0,
            toggleOnce: true,

            centerBox1Doc: {},
            centerBox1ActiveIconDoc: {},
            centerBox1InActiveIconDoc: {},
            centerBox1Title: '',
            centerBox1Guid: '',

            centerBox2Doc: {},
            centerBox2ActiveIconDoc: {},
            centerBox2InActiveIconDoc: {},
            centerBox2Title: '',
            centerBox2Guid: '',

            centerBox3Doc: {},
            centerBox3ActiveIconDoc: {},
            centerBox3InActiveIconDoc: {},
            centerBox3Title: '',
            centerBox3Guid: '',

            centerBox4Doc: {},
            centerBox4ActiveIconDoc: {},
            centerBox4InActiveIconDoc: {},
            centerBox4Title: '',
            centerBox4Guid: '',

            centerBox5Doc: {},
            centerBox5ActiveIconDoc: {},
            centerBox5InActiveIconDoc: {},
            centerBox5Title: '',
            centerBox5Guid: '',

            centerBox6Doc: {},
            centerBox6ActiveIconDoc: {},
            centerBox6InActiveIconDoc: {},
            centerBox6Title: '',
            centerBox6Guid: '',

            centerBox7Doc: {},
            centerBox7ActiveIconDoc: {},
            centerBox7InActiveIconDoc: {},
            centerBox7Title: '',
            centerBox7Guid: '',

            centerBox8Doc: {},
            centerBox8ActiveIconDoc: {},
            centerBox8InActiveIconDoc: {},
            centerBox8Title: '',
            centerBox8Guid: '',
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

        this.circleMenuItemIconbox1Image = null
        this.circleMenuItemIconbox1ImageTween = null

        this.circleMenuItemIconbox2Image = null
        this.circleMenuItemIconbox2ImageTween = null

        this.circleMenuItemIconbox3Image = null
        this.circleMenuItemIconbox3ImageTween = null

        this.circleMenuItemIconbox4Image = null
        this.circleMenuItemIconbox4ImageTween = null

        this.circleMenuItemIconbox5Image = null
        this.circleMenuItemIconbox5ImageTween = null

        this.circleMenuItemIconbox6Image = null
        this.circleMenuItemIconbox6ImageTween = null

        this.circleMenuItemIconbox7Image = null
        this.circleMenuItemIconbox7ImageTween = null

        this.circleMenuItemIconbox8Image = null
        this.circleMenuItemIconbox8ImageTween = null
        
        
    }

    componentDidMount() {

        axios.get(`http://185.211.59.237/Category/GetPrimaries?guid=c265fd02-0194-4d38-83e8-a93bc3698fcc`)
        .then(res => {
            console.log(res.data);

            //  centerBox8Doc: {},
            // centerBox8ActiveIconDoc: {},
            // centerBox8InActiveIconDoc: {},
            // centerBox8Title: '',

            const centerBox1Destructure  = {...res.data.primaryCategories[0]}
            const centerBox1Doc = {...centerBox1Destructure.quadMenuDocument}
            const centerBox1ActiveIconDoc = {...centerBox1Destructure.activeIconDocument}
            const centerBox1InActiveIconDoc = {...centerBox1Destructure.inactiveIconDocument}
            const centerBox1Title = centerBox1Destructure.title
            const centerBox1Guid = centerBox1Destructure.categoryGuid

            const centerBox2Destructure  = {...res.data.primaryCategories[1]}
            const centerBox2Doc = {...centerBox2Destructure.quadMenuDocument}
            const centerBox2ActiveIconDoc = {...centerBox2Destructure.activeIconDocument}
            const centerBox2InActiveIconDoc = {...centerBox2Destructure.inactiveIconDocument}
            const centerBox2Title = centerBox2Destructure.title
            const centerBox2Guid = centerBox2Destructure.categoryGuid

            const centerBox3Destructure  = {...res.data.primaryCategories[2]}
            const centerBox3Doc = {...centerBox3Destructure.quadMenuDocument}
            const centerBox3ActiveIconDoc = {...centerBox3Destructure.activeIconDocument}
            const centerBox3InActiveIconDoc = {...centerBox3Destructure.inactiveIconDocument}
            const centerBox3Title = centerBox3Destructure.title
            const centerBox3Guid = centerBox3Destructure.categoryGuid

            const centerBox4Destructure  = {...res.data.primaryCategories[3]}
            const centerBox4Doc = {...centerBox4Destructure.quadMenuDocument}
            const centerBox4ActiveIconDoc = {...centerBox4Destructure.activeIconDocument}
            const centerBox4InActiveIconDoc = {...centerBox4Destructure.inactiveIconDocument}
            const centerBox4Title = centerBox4Destructure.title
            const centerBox4Guid = centerBox4Destructure.categoryGuid

            const centerBox5Destructure  = {...res.data.primaryCategories[4]}
            const centerBox5Doc = {...centerBox5Destructure.quadMenuDocument}
            const centerBox5ActiveIconDoc = {...centerBox5Destructure.activeIconDocument}
            const centerBox5InActiveIconDoc = {...centerBox5Destructure.inactiveIconDocument}
            const centerBox5Title = centerBox5Destructure.title
            const centerBox5Guid = centerBox5Destructure.categoryGuid

            const centerBox6Destructure  = {...res.data.primaryCategories[5]}
            const centerBox6Doc = {...centerBox6Destructure.quadMenuDocument}
            const centerBox6ActiveIconDoc = {...centerBox6Destructure.activeIconDocument}
            const centerBox6InActiveIconDoc = {...centerBox6Destructure.inactiveIconDocument}
            const centerBox6Title = centerBox6Destructure.title
            const centerBox6Guid = centerBox6Destructure.categoryGuid

            const centerBox7Destructure  = {...res.data.primaryCategories[6]}
            const centerBox7Doc = {...centerBox7Destructure.quadMenuDocument}
            const centerBox7ActiveIconDoc = {...centerBox7Destructure.activeIconDocument}
            const centerBox7InActiveIconDoc = {...centerBox7Destructure.inactiveIconDocument}
            const centerBox7Title = centerBox7Destructure.title
            const centerBox7Guid = centerBox7Destructure.categoryGuid

            const centerBox8Destructure  = {...res.data.primaryCategories[7]}
            const centerBox8Doc = {...centerBox8Destructure.quadMenuDocument}
            const centerBox8ActiveIconDoc = {...centerBox8Destructure.activeIconDocument}
            const centerBox8InActiveIconDoc = {...centerBox8Destructure.inactiveIconDocument}
            const centerBox8Title = centerBox8Destructure.title
            const centerBox8Guid = centerBox8Destructure.categoryGuid


            this.setState({
                centerBoxes: res.data.primaryCategories,
                
                centerBox1Doc,
                centerBox1ActiveIconDoc,
                centerBox1InActiveIconDoc,
                centerBox1Title,
                centerBox1Guid,

                centerBox2Doc,
                centerBox2ActiveIconDoc,
                centerBox2InActiveIconDoc,
                centerBox2Title,
                centerBox2Guid,

                centerBox3Doc,
                centerBox3ActiveIconDoc,
                centerBox3InActiveIconDoc,
                centerBox3Title,
                centerBox3Guid,

                centerBox4Doc,
                centerBox4ActiveIconDoc,
                centerBox4InActiveIconDoc,
                centerBox4Title,
                centerBox4Guid,

                centerBox5Doc,
                centerBox5ActiveIconDoc,
                centerBox5InActiveIconDoc,
                centerBox5Title,
                centerBox5Guid,

                centerBox6Doc,
                centerBox6ActiveIconDoc,
                centerBox6InActiveIconDoc,
                centerBox6Title,
                centerBox6Guid,

                centerBox7Doc,
                centerBox7ActiveIconDoc,
                centerBox7InActiveIconDoc,
                centerBox7Title,
                centerBox7Guid,

                centerBox8Doc,
                centerBox8ActiveIconDoc,
                centerBox8InActiveIconDoc,
                centerBox8Title,
                centerBox8Guid
            })
        }).catch(err => {
            console.log(err)
        })

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'flex', autoAlpha: 1});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1InActiveIconDoc.source}});
        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

        this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 0.3, {rotation: `-${this.state.deg}deg`, ease: Bounce.easeOut});

        this.menuPageInterval = setInterval(() => {
            this.setState({deg: this.state.deg += 45})
            
            this.circleMenuMainTween = TweenMax.to(this.circleMenuMain, 1, {rotation: -this.state.deg, ease: Elastic.easeOut.config( 1, 0.5)});
            
            if(this.state.deg === 360) {
                this.setState({deg: 0})
            }

            if(this.state.deg === 0) {
                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'flex', autoAlpha: 1});

                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1InActiveIconDoc.source}});

                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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
                    .to(this.centerBox2, 0.3, {display: 'flex', autoAlpha: 1, scale: 1.2})
                    .to(this.centerBox2, 0.4, {scale: 0.7})
                    .to(this.centerBox2, 0.4, {scale: 1})
                    this.setState({toggleOnce: false})
                }
                else{
                    this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'flex', autoAlpha: 1});
                }

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2InActiveIconDoc.source}});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'flex', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3InActiveIconDoc.source}});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'flex', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4InActiveIconDoc.source}});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'flex', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5InActiveIconDoc.source}});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'flex', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6InActiveIconDoc.source}});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'flex', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7InActiveIconDoc.source}});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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
                this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'flex', autoAlpha: 1});

                this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
                this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});

                this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8InActiveIconDoc.source}});

                this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
                this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
                this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
                this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
                this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
                this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
                this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});

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

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'flex', autoAlpha: 1});

        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

         this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1InActiveIconDoc.source}});

        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});


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
            .to(this.centerBox2, 0.3, {display: 'flex', autoAlpha: 1, scale: 1.2})
            .to(this.centerBox2, 0.4, {scale: 0.7})
            .to(this.centerBox2, 0.4, {scale: 1})
            this.setState({toggleOnce: false})
        }
        else{
            this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'flex', autoAlpha: 1});
        }

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2InActiveIconDoc.source}});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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

        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'flex', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3InActiveIconDoc.source}});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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

        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'flex', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4InActiveIconDoc.source}});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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

        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'flex', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5InActiveIconDoc.source}});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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

        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'flex', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6InActiveIconDoc.source}});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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

        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'flex', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7InActiveIconDoc.source}});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8ActiveIconDoc.source}});

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

        this.centerBox8Tween = TweenMax.to(this.centerBox8, 0.3, {display: 'flex', autoAlpha: 1});

        this.centerBox1Tween = TweenMax.to(this.centerBox1, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox2Tween = TweenMax.to(this.centerBox2, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox3Tween = TweenMax.to(this.centerBox3, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox4Tween = TweenMax.to(this.centerBox4, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox5Tween = TweenMax.to(this.centerBox5, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox6Tween = TweenMax.to(this.centerBox6, 0.3, {display: 'none', autoAlpha: 0});
        this.centerBox7Tween = TweenMax.to(this.centerBox7, 0.3, {display: 'none', autoAlpha: 0});

        this.circleMenuItemIconbox8ImageTween = TweenMax.set(this.circleMenuItemIconbox8Image, {attr: {src: this.state.centerBox8InActiveIconDoc.source}});

        this.circleMenuItemIconbox1ImageTween = TweenMax.set(this.circleMenuItemIconbox1Image, {attr: {src: this.state.centerBox1ActiveIconDoc.source}});
        this.circleMenuItemIconbox2ImageTween = TweenMax.set(this.circleMenuItemIconbox2Image, {attr: {src: this.state.centerBox2ActiveIconDoc.source}});
        this.circleMenuItemIconbox3ImageTween = TweenMax.set(this.circleMenuItemIconbox3Image, {attr: {src: this.state.centerBox3ActiveIconDoc.source}});
        this.circleMenuItemIconbox4ImageTween = TweenMax.set(this.circleMenuItemIconbox4Image, {attr: {src: this.state.centerBox4ActiveIconDoc.source}});
        this.circleMenuItemIconbox5ImageTween = TweenMax.set(this.circleMenuItemIconbox5Image, {attr: {src: this.state.centerBox5ActiveIconDoc.source}});
        this.circleMenuItemIconbox6ImageTween = TweenMax.set(this.circleMenuItemIconbox6Image, {attr: {src: this.state.centerBox6ActiveIconDoc.source}});
        this.circleMenuItemIconbox7ImageTween = TweenMax.set(this.circleMenuItemIconbox7Image, {attr: {src: this.state.centerBox7ActiveIconDoc.source}});

        this.circleMenuItemIconbox8Tween = TweenMax.to(this.circleMenuItemIconbox8, 0.3, {backgroundColor: '#ffd617'})

        this.circleMenuItemIconbox1Tween = TweenMax.to(this.circleMenuItemIconbox1, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox2Tween = TweenMax.to(this.circleMenuItemIconbox2, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox3Tween = TweenMax.to(this.circleMenuItemIconbox3, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox4Tween = TweenMax.to(this.circleMenuItemIconbox4, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox5Tween = TweenMax.to(this.circleMenuItemIconbox5, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox6Tween = TweenMax.to(this.circleMenuItemIconbox6, 0.3, {backgroundColor: '#0b1033'})
        this.circleMenuItemIconbox7Tween = TweenMax.to(this.circleMenuItemIconbox7, 0.3, {backgroundColor: '#0b1033'})
    }

    centerBoxDocGenerator = box => {
        const centerBox1Doc = {...box.quadMenuDocument}
        return centerBox1Doc.source
    }


    render() {

        return(
              <>

                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox1Title.replace(/ /g,'-')}/${this.state.centerBox1Guid}`}>
                    <div id="centerBox1" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox1].join(' ')}
                    ref={div => this.centerBox1 = div}>
                        <img src={this.state.centerBox1Doc.source} alt=""
                        className={classes.circleMenuMainCenterBoxImage}/>
                        <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                        <div className={classes.circleMenuMainCenterBoxText}>
                            {this.state.centerBox1Title}
                        </div>
                    </div>
                </Link>
                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox2Title.replace(/ /g,'-')}/${this.state.centerBox2Guid}`}>
                <div id="centerBox2" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox2].join(' ')}
                ref={div => this.centerBox2 = div}>
                     <img src={this.state.centerBox2Doc.source} alt=""
                    className={classes.circleMenuMainCenterBoxImage}/>
                    <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                    <div className={classes.circleMenuMainCenterBoxText}>
                        {this.state.centerBox2Title}
                    </div>
                </div>
                </Link>
                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox3Title.replace(/ /g,'-')}/${this.state.centerBox3Guid}`}>
                <div id="centerBox3" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox3].join(' ')}
                ref={div => this.centerBox3 = div}>
                    <img src={this.state.centerBox3Doc.source} alt=""
                    className={classes.circleMenuMainCenterBoxImage}/>
                    <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                    <div className={classes.circleMenuMainCenterBoxText}>
                        {this.state.centerBox3Title}
                    </div>
                </div>
                </Link>
                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox4Title.replace(/ /g,'-')}/${this.state.centerBox4Guid}`}>
                <div id="centerBox4" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox4].join(' ')}
                ref={div => this.centerBox4 = div}>
                    <img src={this.state.centerBox4Doc.source} alt=""
                    className={classes.circleMenuMainCenterBoxImage}/>
                    <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                    <div className={classes.circleMenuMainCenterBoxText}>
                        {this.state.centerBox4Title}
                    </div>
                </div>
                </Link>
                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox5Title.replace(/ /g,'-')}/${this.state.centerBox5Guid}`}>
                <div id="centerBox5" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox5].join(' ')}
                ref={div => this.centerBox5 = div}>
                    <img src={this.state.centerBox5Doc.source} alt=""
                    className={classes.circleMenuMainCenterBoxImage}/>
                    <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                    <div className={classes.circleMenuMainCenterBoxText}>
                        {this.state.centerBox5Title}
                    </div>
                </div>
                </Link>
                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox6Title.replace(/ /g,'-')}/${this.state.centerBox6Guid}`}>
                <div id="centerBox6" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox6].join(' ')}
                ref={div => this.centerBox6 = div}>
                    <img src={this.state.centerBox6Doc.source} alt=""
                    className={classes.circleMenuMainCenterBoxImage}/>
                    <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                    <div className={classes.circleMenuMainCenterBoxText}>
                        {this.state.centerBox6Title}
                    </div>
                </div>
                </Link>
                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox7Title.replace(/ /g,'-')}/${this.state.centerBox7Guid}`}>
                <div id="centerBox7" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox7].join(' ')}
                ref={div => this.centerBox7 = div}>
                    <img src={this.state.centerBox7Doc.source} alt=""
                    className={classes.circleMenuMainCenterBoxImage}/>
                    <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                    <div className={classes.circleMenuMainCenterBoxText}>
                        {this.state.centerBox7Title}
                    </div>
                </div>
                </Link>
                <Link
                href={`/category/[...slug].js`} as={`/category/${this.state.centerBox8Title.replace(/ /g,'-')}/${this.state.centerBox8Guid}`}>
                <div id="centerBox8" className={[classes.circleMenuMainCenterBox, classes.circleMenuMainCenterBox8].join(' ')}
                ref={div => this.centerBox8 = div}>
                    <img src={this.state.centerBox8Doc.source} alt=""
                    className={classes.circleMenuMainCenterBoxImage}/>
                    <div className={classes.circleMenuMainCenterBoxBackdrop}></div>
                    <div className={classes.circleMenuMainCenterBoxText}>
                        {this.state.centerBox8Title}
                    </div>
                </div>
                </Link>

                <div id="circleMenuMain" className={classes.circleMenuMain} ref={div => this.circleMenuMain = div}>

                    <div id="circleMenuItem1" className={classes.circleMenuItem1} >
                        <div className={[classes.circleMenuItemIconbox, classes.circleMenuItemIconbox1].join(' ')} ref={div => this.circleMenuItemIconbox1 = div}
                        onClick={() => this.handleTurn1()}>
                            <img src={this.state.centerBox1InActiveIconDoc.source} alt=""
                            ref={img => this.circleMenuItemIconbox1Image = img}
                            className={classes.circleMenuItemIconbox1Image} />
                        </div>
                    </div>
                    <div id="circleMenuItem2" className={classes.circleMenuItem2} >
                        <div className={classes.circleMenuItemIconbox}ref={div => this.circleMenuItemIconbox2 = div}
                        onClick={() => this.handleTurn2()}>
                            <img src={this.state.centerBox2ActiveIconDoc.source} alt=""
                            ref={img => this.circleMenuItemIconbox2Image = img}
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem3" className={classes.circleMenuItem3}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox3 = div}
                        onClick={() => this.handleTurn3()}>
                        <img src={this.state.centerBox3ActiveIconDoc.source} alt=""
                        ref={img => this.circleMenuItemIconbox3Image = img}
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem4" className={classes.circleMenuItem4}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox4 = div}
                        onClick={() => this.handleTurn4()}>
                        <img src={this.state.centerBox4ActiveIconDoc.source} alt=""
                        ref={img => this.circleMenuItemIconbox4Image = img}
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem5" className={classes.circleMenuItem5}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox5 = div}
                        onClick={() => this.handleTurn5()}>
                            <img src={this.state.centerBox5ActiveIconDoc.source} alt=""
                            ref={img => this.circleMenuItemIconbox5Image = img}
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem6" className={classes.circleMenuItem6}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox6 = div}
                        onClick={() => this.handleTurn6()}>
                        <img src={this.state.centerBox6ActiveIconDoc.source} alt=""
                        ref={img => this.circleMenuItemIconbox6Image = img}
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem7" className={classes.circleMenuItem7}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox7 = div}
                        onClick={() => this.handleTurn7()}>
                        <img src={this.state.centerBox7ActiveIconDoc.source} alt=""
                        ref={img => this.circleMenuItemIconbox7Image = img}
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                    <div id="circleMenuItem8" className={classes.circleMenuItem8}>
                        <div className={classes.circleMenuItemIconbox} ref={div => this.circleMenuItemIconbox8 = div}
                        onClick={() => this.handleTurn8()}>
                        <img src={this.state.centerBox8ActiveIconDoc.source} alt=""
                        ref={img => this.circleMenuItemIconbox8Image = img}
                            className={classes.circleMenuItemIconboxImage} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MenuPage

