import React, {useState} from 'react'
import axios from 'axios'
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


const page2 = (props) => {

  const router = useRouter()
  const givenGuid =  router.query.id

  let [hamburgerToggler, setHamburgerToggler] = useState(false)

  const hamburgerToggleHandler = () => {
    setHamburgerToggler(hamburgerToggler => !hamburgerToggler)
  }

  console.log(props.data);

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
      
      <Page2TopPage bigData={props.bigData} data={props.data} />
      <CategoriesPage bigData={props.bigData} data={props.data} givenGuid={givenGuid} />
      <ContactUsPage />
      <Footer indexPage={false} />

      <div className={classes.page2PlusIocnBox}>
        <FontAwesomeIcon icon={faPlus} className={classes.page2PlusIocn} />
      </div>
    </>
  )
}

page2.getInitialProps = async ({query}) => {
  const { givenGuid } = query

  const res = await axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=${givenGuid}`)
  const bigData = await res.data
  const data = await res.data.primaryCategories

  return { data, bigData  }
}

export default page2