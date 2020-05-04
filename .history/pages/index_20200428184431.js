import React from 'react'
import Head from 'next/head'

const IndexPage = () => {

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>خونه</div>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </>
  )
}

export default IndexPage
