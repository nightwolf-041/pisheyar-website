import React, {useRef, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TweenMax } from "gsap";
import {CSSPlugin} from 'gsap';
import classes from './page2PlusIocn.module.scss'

const C = CSSPlugin;
function Page2PlusIocn() {
    const page2PlusIocnBox = useRef()
    const page2PlusIocnSpan = useRef()
    let [toggle, setToggle] = useState(false)

    const mouseEnterPlus = () => {
        setToggle(true)
        TweenMax.to(page2PlusIocnSpan.current, 0, {
            display: 'block',
            opacity: 0,
            delay: 0
        }, 0);
        TweenMax.to(page2PlusIocnSpan.current, 0.3, {
            opacity: 1,
            delay: 0.6
        });
    }

    const mouseLeavePlus = () => {
        setToggle(false)
        TweenMax.to(page2PlusIocnSpan.current, 0.1, {
            display: 'none',
            opacity: 0,
        }, 0.4);
    }

    const hoverOnPlus = () => {
        // setToggle(false)
        TweenMax.to(page2PlusIocnSpan.current, 0, {
            display: 'block',
            opacity: 0,
            delay: 0.4
        }, 0);
        TweenMax.to(page2PlusIocnSpan.current, 0.4, {
            opacity: 1,
            delay: 0.4
        }, 0.4);
    }

    // if(toggle) {
    //     TweenMax.to(page2PlusIocnSpan.current, 0, {
    //         display: 'block',
    //         opacity: 0,
    //         delay: 0.4
    //     }, 0);
    //     TweenMax.to(page2PlusIocnSpan.current, 0.4, {
    //         opacity: 1,
    //         delay: 0.4
    //     }, 0.4);
    // }
    // if(!toggle) {
    //     TweenMax.to(page2PlusIocnSpan.current, 0.1, {
    //         display: 'none',
    //         opacity: 0,
    //     }, 0.4);
    // }

    return (
       <div className={classes.page2PlusIocnBox}
       onMouseEnter={mouseEnterPlus}
       onMouseLeave={mouseLeavePlus}
       ref={element => {page2PlusIocnBox.current = element}}>
         <FontAwesomeIcon icon={faPlus} className={classes.page2PlusIocn} />
         <span className={classes.page2PlusIocnSpan}
         ref={element => {page2PlusIocnSpan.current = element}}>
            افزودن سفارش جدید
         </span>
       </div>
    )
}

export default Page2PlusIocn
