import React, {useEffect, useState, useRef} from 'react';
import anime from 'animejs'
import classes from './menuPage.module.scss'

class MenuPageSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }

        this.searchRow = useRef()
        this.searchInputsbox = useRef()
        this.searchCharkhIcon = useRef()
    }

    componentDidMount() {

    }


    animateToggler = () => {
        let toggle = this.state.toggle
        this.setState({toggle: !toggle}, () => {

        })     
    }


    return(
        <div className={classes.menuPageSearchRow} ref={searchRow}>
            <div className={classes.menuPageSearchInputsbox} ref={searchInputsbox}>
                <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeft} />
                <input type="search" className={classes.menuPageSearchInputRight} />
            </div>
            <div className={classes.menuPageSearchLogobox}>
                <img src="/home-icon.png" alt="" ref={searchCharkhIcon}
                className={classes.menuPageSearchCharkhIcon} onClick={animateToggler} />
                {/* <span className={classes.menuPageSearchSerachIcon}>S</span> */}
            </div>
        </div>
    )
}

export default MenuPageSearch