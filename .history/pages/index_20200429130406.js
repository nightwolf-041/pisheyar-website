import React, {useEffect, useRef} from 'react'
import anime from 'animejs'
import Head from 'next/head'
import classes from '../styles/index.module.scss'


const IndexPage = () => {

  const headerImage1 = useRef()
  const headerImage2 = useRef()
  const headerTitle1 = useRef()
  const headerTitle2 = useRef()
  const headerButtonbox1 = useRef()
  const headerButtonbox2 = useRef()

  useEffect(() => {

    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    let key = 0

    setInterval(() => {
      key++

      switch (key) {
        case 1:
          tl
          .add({
            targets: headerImage1.current,
            translateY: 50,
            opacity: 0,
            display: 'none'
          })
          .add({
            targets: headerImage2.current,
            translateY: -250,
            opacity: 1,
            display: 'block'
          })
          break;

          case 2:

            break

          case 3:
            key = 0
            break
      
        default:
          break;
      }

    }, 4000);
    
    

  })

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="سایت رسمی پیشه یار" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className={classes.homeHeader}>
          <img src="/BackgroundEllipse.svg" alt="background"
          className={classes.homeBackgroundEllipse} />
          <div className="container">
            <div className={classes.homeHeaderImagesbox}>
              <img src="/about-man.png" alt="img1" ref={headerImage1}
              className={classes.headerImage1} />
            </div>
            <div className={classes.homeHeaderImagesbox}>
              <img src="/about-man.png" alt="img2" ref={headerImage2}
              className={classes.headerImage2} />
            </div>
            <div className={classes.homeHeaderTitlebox}>
              <h1 ref={headerTitle1}>
                با پیشه یار از خدمات متنوع صنعتی باخبر شوید
              </h1>
              <h1 ref={headerTitle2}>
                با پیشه یار از اخبار ما هم خبردار شید
              </h1>
            </div>
            <div className={classes.homeHeaderButtonbox}>
              <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox1}>
                <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                <p className={classes.homeHeaderButtonboxText}>
                  همین حالا از خدمات ما مطلع شوید
                </p>
              </div>
              <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox2}>
                <button className={classes.homeHeaderButtonboxBtn}>ثبتنام</button>
                <p className={classes.homeHeaderButtonboxText}>
                  همین حالا از به روز ها بروز شوید
                </p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
