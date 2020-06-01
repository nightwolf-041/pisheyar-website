import React from 'react';
import classes from './page2TopPage.module.scss'


const Page2TopPage = (props) => {
    console.log(props.categoryData);
    const categoryInfo = props.categoryInfo
    let coverDoc = {...categoryInfo.coverDocument}
    let source = coverDoc.source

    return(
        <section className={classes.page2TopPage}>
            <img src={source} alt=""
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