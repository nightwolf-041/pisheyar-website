import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Page2Navbar from '../../components/page2/page2Navbar/Page2Navbar'
import Page2TopPage from '../../components/page2/page2TopPage/Page2TopPage'
import CategoriesPage from '../../components/page2/categoriesPage/CategoriesPage'
import ContactUsPage from '../../components/contactUsPage/ContactUsPage'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from '../../styles/index.module.scss'


const IndexPage = () => {

  const router = useRouter()
  console.log(router.query);

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
      
      {/* <Navbar hamburgerToggleHandler={hamburgerToggleHandler}
      indexPage={false}
      toggle={hamburgerToggler} /> */}
      <Page2Navbar />
      
      <Page2TopPage />
      <CategoriesPage />
      <ContactUsPage />
      <Footer indexPage={false} />

      <div className={classes.page2PlusIocnBox}>
        <FontAwesomeIcon icon={faPlus} className={classes.page2PlusIocn} />
      </div>
    </>
  )
}

export default IndexPage