import React, {useEffect, useRef} from 'react'
import anime from 'animejs'
import Head from 'next/head'
import classes from '../styles/index.module.scss'


const IndexPage = () => {

  const headerImage1 = useRef()
  const headerImage2 = useRef()

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
            <img src="/about-man.png" alt="img1" ref={headerImage1} />
            <img src="/about-man.png" alt="img2" ref={headerImage2} />
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
