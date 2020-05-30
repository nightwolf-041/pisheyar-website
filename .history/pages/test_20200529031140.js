import React, {useState} from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Page2TopPage from '../components/page2/page2TopPage/Page2TopPage'
import ContactUsPage from '../components/contactUsPage/ContactUsPage'
import Footer from '../components/footer/Footer'

import classes from '../styles/index.module.scss'


const IndexPage = () => {

  let [hamburgerToggler, setHamburgerToggler] = useState(false)

  const hamburgerToggleHandler = () => {
    setHamburgerToggler(hamburgerToggler => !hamburgerToggler)
  }

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Navbar hamburgerToggleHandler={hamburgerToggleHandler}
      indexPage={false}
      toggle={hamburgerToggler} />
      
      <Page2TopPage />
      <ContactUsPage />
      <Footer indexPage={false} />
    </>
  )
}

export default IndexPage