import React from 'react'
import Head from 'next/head'
import '../styles/index.module.scss'

import dokhtar from '../assets/images/about-man.png'


const IndexPage = () => {
  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.homeContainer}>
        <div className={classes.homeHeader}>
          <div className={classes.homeHeaderImagesbox}>
            <img src={dokhtar} alt="dokhtar" ref={headerImage} />
            <img src={dokhtar} alt="dokhtar" ref={headerImage} />
          </div>
          <div className={classes.homeHeaderTitlebox}>
            <h1></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
