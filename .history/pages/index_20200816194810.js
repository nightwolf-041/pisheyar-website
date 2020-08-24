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
        <meta name="description" content="سایت رسمی پیشه پلاس" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://static4.donya-e-eqtesad.com/thumbnail/VCkkaIIsP2aP/vXJwwA1o8rIoZ7wrPHPV-QYqssTF6UH1BwhMCHO9O4SdbVkfXsgGzjZ-xtESNlJvlBH-hXHgenSPkchyUb3fFQ8Bvzddp2ShjgXsqOmeCXKxt08T-VF9RA,,/03-01.jpg" />
        <meta property="og:title" content="اولین سامانه ارتباط دهنده مستقیم بین خدمات دهنده و گیرنده صنعتی" />
        <meta property="og:description" content="ما در پیشه پلاس برای اولین بار در ایران با هدف سهولت در ارتباط آسان و پویا میان خدمات دهندگان و خدمات گیرندگان صنعتی توانستیم، با ایجاد بستری مناسب قدمی هر چند کوچک در پیشرفت و سهولت خدمات دهی صنعتی برداریم." />
        <link rel="icon" href="/favicon.ico" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-175550184-1%22%3E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-175550184-1');
</script>
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