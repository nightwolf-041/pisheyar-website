import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import TopPage from '../components/topPage/TopPage'
import MenuPage from '../components/menuPage/MenuPage'
import AboutUsPage from '../components/aboutUsPage/AboutUsPage'
import ServicesPage from '../components/servicesPage/ServicesPage'
import AppPageSection from '../components/AppPageSection/AppPage'

import classes from '../styles/index.module.scss'


const IndexPage = () => {

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <TopPage />
      <MenuPage />
      <AboutUsPage />
      <ServicesPage />
      <AppPageSection />
    </>
  )
}

export default IndexPage











// const IndexPage = () => {

//   const params = {
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true
//     // },
//       loop: true,
//       freeMode: false,
//       grabCursor: false,
//       lazy: true,
//       centeredSlides: true,
//       slidesPerView: 1,
//       autoPlay: true,
//       spaceBetween: 0,
//       // navigation: {
//       //   nextEl: '.swiper-button-next',
//       //   prevEl: '.swiper-button-prev'
//       // },
//       // breakpoints: {
//       //     420: {
//       //         slidesPerView: 'auto',
//       //         centeredSlides: true,
//       //         spaceBetween: 30
//       //     },
//       //     300: {
//       //       effect: 'fade',
//       //       centeredSlides: true,
//       //       slidesPerView: 1,
//       //       spaceBetween: 0,
//       //       pagination: {
//       //         el: '.swiper-pagination',
//       //         clickable: true
//       //       },
//       //     },
//       // }
//     }

//   return (
//     <>
//       <Head>
//         <title>صفحه اصلی</title>
//         <meta name="description" content="سایت رسمی پیشه یار" />
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//         <div className={classes.homeHeader}>
//           <img src="/BackgroundEllipse.svg" alt="background"
//             className={classes.homeBackgroundEllipse} />
       
//           <div className="container">
//           <div className={classes.homeHeaderImagesbox}>
//             <Swiper {...params}>
//                 <img src="/about-man.png" alt="img1"
//                 className={classes.headerImage1} />
//                 <img src="/about-man.png" alt="img1"
//                 className={classes.headerImage1} />
//             </Swiper>
//           </div>
            
//           <div className={classes.homeHeaderTitlebox}>
//             <h1>
//               با پیشه یار از خدمات متنوع صنعتی باخبر شوید
//             </h1>
//           </div>
//           <div className={classes.homeHeaderButtonbox}>
//             <div className={classes.homeHeaderButtonboxKeeper}>
//               <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
//               <p className={classes.homeHeaderButtonboxText}>
//                 همین حالا از خدمات ما مطلع شوید
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


// export default IndexPage
