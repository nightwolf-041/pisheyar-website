import React, {useState} from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import HamburgerMenu from '../components/hamburgerMenu/HamburgerMenu'
import TopPage from '../components/topPage/TopPage'
import MenuPage from '../components/menuPage/MenuPage'
import AboutUsPage from '../components/aboutUsPage/AboutUsPage'
import ServicesPage from '../components/servicesPage/ServicesPage'
import AppPageSection from '../components/AppPageSection/AppPage'
import BlogPage from '../components/blogPage/BlogPage'
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
        <title>پیشه پلاس</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar hamburgerToggleHandler={hamburgerToggleHandler}
      indexPage={true}
      toggle={hamburgerToggler} />
      <HamburgerMenu toggle={hamburgerToggler} />
      <TopPage />
      <MenuPage />
      <AboutUsPage />
      <ServicesPage />
      <AppPageSection />
      <BlogPage />
      <ContactUsPage />
      <Footer indexPage={true} />
    </>
  )
}

export default IndexPage