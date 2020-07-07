import React, {useEffect, useRef} from 'react';
import { TweenMax } from "gsap";
import {CSSPlugin} from 'gsap';
import classes from './page2TopPage.module.scss'

const C = CSSPlugin;

const Page2TopPage = (props) => {
    const imageRight = useRef()
    const titleLeft = useRef()
    console.log(props.categoryInfo)

    useEffect(() => {
        TweenMax.to(imageRight.current, 1, {
            marginRight: 0,
        }, 0.5);
        TweenMax.to(titleLeft.current, 1, {
            marginLeft: 0,
        }, 0.5);
    }, [])

    let background, title, secondCover
    if(props.categoryInfo !== undefined && props.categoryInfo !== null && props.categoryInfo !== []){
        const categoryInfo = props.categoryInfo
        let coverDoc = {...categoryInfo.coverDocument}
        background = coverDoc.source
        let secondCoverDoc = {...categoryInfo.secondPageCoverDocument}
        secondCover = secondCoverDoc.source
        title = props.categoryInfo.title
    }

    return(
        <section className={classes.page2TopPage}>
            <img src={background} alt="category background"
            className={classes.page2TopPageImage} />
            <div className={classes.page2TopPageBackdrop}></div>
            <img src={secondCover} alt="category image"
            ref={element => {imageRight.current = element}}
            className={classes.page2TopPageManShape} />
            <div className={classes.page2TopPageTitleBox}>
                <h1 className={classes.page2TopPageTitle}
            ref={element => {titleLeft.current = element}}>
                    {title}
                </h1>
            </div>
        </section>
    )
}

export default Page2TopPage