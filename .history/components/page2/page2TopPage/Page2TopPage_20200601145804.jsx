import React from 'react';
import classes from './page2TopPage.module.scss'


const Page2TopPage = (props) => {
    console.log(props.bigData);
    return(
        <section className={classes.page2TopPage}>
            <img src="/valle-fantoni-designboom-06.jpg" alt=""
            className={classes.page2TopPageImage} />
            <div className={classes.page2TopPageBackdrop}></div>
            <img src="/Worker.png" alt="" className={classes.page2TopPageManShape} />
            <div className={classes.page2TopPageTitleBox}>
                <h1 className={classes.page2TopPageTitle}>
                    {props.givenTitle}
                </h1>
            </div>
        </section>
    )
}

export default Page2TopPage