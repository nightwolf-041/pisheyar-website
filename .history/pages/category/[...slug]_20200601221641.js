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
  const givenTitle =  router.query.slug[0]
  let rgxedTitle = givenTitle.replace(/-/g, ' ')

  const description = props.categoryData.description

  let [hamburgerToggler, setHamburgerToggler] = useState(false)

  const hamburgerToggleHandler = () => {
    setHamburgerToggler(hamburgerToggler => !hamburgerToggler)
  }
  // var newStr = str.replace(/_/g, "");
  return (
    <>
      <Head>
        <title>{rgxedTitle}</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Page2Navbar />
      
      <Page2TopPage 
      givenTitle={givenTitle}
      categoryInfo={props.categoryData}
      data={props.data} />

      <CategoriesPage
      givenTitle={givenTitle}
      categoryInfo={props.categoryData}
      data={props.data}
      description={description}
      // givenGuid={givenGuid}
      />

      <ContactUsPage />
      <Footer indexPage={false} />

      <div className={classes.page2PlusIocnBox}>
        <FontAwesomeIcon icon={faPlus} className={classes.page2PlusIocn} />
      </div>
    </>
  )
}

page2.getInitialProps = async ({query}) => {
  const { slug } = query

  const res = await axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=${slug[1]}`)
  const bigData = await res.data
  const data = await res.data.primaryCategories
  // axiosConfig.get('/Category/' + guid, {
  const currentData = await axios.get(`http://185.94.97.164/api/Category/${slug[1]}?includeChildren=false`)
  const currentDataBigData = await currentData.data
  const categoryData = await currentData.data.category

  return { data, bigData, categoryData }
}

export default page2