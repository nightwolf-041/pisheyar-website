import React from 'react'
import Head from 'next/head'
import '../styles/index.module.scss'

import dokhtar from '../assets/images/'

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
          <img src={dokhtar} alt="" />
        </div>
      </div>
    </>
  )
}

export default IndexPage
