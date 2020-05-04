import React, {useEffect} from 'react'
import anime from 'animejs'
import Head from 'next/head'
import classes from '../styles/index.module.scss'


const IndexPage = () => {

  useEffect(() => {
    // anime.timeline()
  })

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={classes.homeHeader}>
          <div className={classes.homeHeaderImagesbox}>
            <img src="../public/about-man.png" alt="dokhtar" ref={headerImage} />
            <img src="../public/about-man.png" alt="dokhtar" ref={headerImage} />
          </div>
          <div className={classes.homeHeaderTitlebox}>
            <h1>
              با پیشه یار از خدمات متنوع صنعتی باخبر شوید
            </h1>
          </div>
          <div className={classes.homeHeaderButtonbox}>
            <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
            <p className={classes.homeHeaderButtonboxText}>
              همین حالا از خدمات ما مطلع شوید
            </p>
          </div>
        </div>
    </>
  )
}

export default IndexPage
