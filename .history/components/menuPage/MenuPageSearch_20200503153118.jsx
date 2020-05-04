import React, {useEffect, useState, useRef, createRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

class MenuPageSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }

        this.searchRow = createRef()
        this.searchInputsbox = createRef()
        this.searchCharkhIcon = createRef()
    }

    componentDidMount() {

    }


    animateToggler = () => {
        let toggle = this.state.toggle
        this.setState({toggle: !toggle}, () => {
            if(toggle === true) {
                let rotateIcon = anime.timeline({
                    duration: 750
                })
                rotateIcon.add({
                    targets: this.searchCharkhIcon.current,
                    rotate: 360
                })
                .add({
                    targets: this.searchInputsbox.current,
                    width: '80%',
                    opacity: 1
                }, 750)
                .add({
                    targets: this.searchCharkhIcon.current,
                    marginLeft: '-3rem'
                }, 500)
                .add({
                    targets: this.searchRow.current,
                    left: 'calc(50% - 14.5rem)'
                }, 500)
                
            } 
            if(toggle === false) {
                let rotateIconClose = anime.timeline({
                    duration: 750,
                    easing: 'easeInOutElastic(1, 0.5)',
                })
                rotateIconClose.add({
                    targets: this.searchCharkhIcon.current,
                    rotate: -360
                })
                .add({
                    targets: this.searchInputsbox.current,
                    width: 0,
                    opacity: 0
                }, 650)
                .add({
                    targets: this.searchCharkhIcon.current,
                    marginLeft: 0
                }, 750)
                .add({
                    targets: this.searchRow.current,
                    left: 'calc(50% - 15rem)'
                }, 750)
            }
        })     
    }

render(){

    return(
        <div className={classes.menuPageSearchRow} ref={this.searchRow}>
            <div className={classes.menuPageSearchInputsbox} ref={this.searchInputsbox}>
                <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeft} />
                <input type="search" className={classes.menuPageSearchInputRight} />
            </div>
            <div className={classes.menuPageSearchLogobox}>
                <img src="/home-icon.png" alt="" ref={this.searchCharkhIcon}
                className={classes.menuPageSearchCharkhIcon} onClick={this.animateToggler} />
                {/* <span className={classes.menuPageSearchSerachIcon}>S</span> */}
            </div>
        </div>
    )
}
}

export default MenuPageSearch