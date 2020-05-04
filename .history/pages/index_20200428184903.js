import React from 'react'
import Head from 'next/head'

import '../styles/index.module.scss'

const IndexPage = () => {

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>خونه</div>
      <a>test</a>
      <style global jsx>{`
        @font-face {
          font-family: Yekan;
          src: url("../assets/fonts/iran-yekan/iranyekan.woff2");
        }
        body {
          font-family: Yekan !important;
          padding: 0;
          margin: 0 auto;
        }
        * {
          box-sizing: border-box;
        }
        
        a {
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default IndexPage
