import React, {useEffect, useRef} from 'react'
import anime from 'animejs'
import Head from 'next/head'
import classes from '../styles/index.module.scss'


const IndexPage = () => {

  const headerImage1 = useRef()
  const headerImage2 = useRef()
  const headerImage3 = useRef()
  const headerImage1box = useRef()
  const headerImage2box = useRef()
  const headerImage3box = useRef()

  const headerTitle1 = useRef()
  const headerTitle2 = useRef()
  const headerButtonbox1 = useRef()
  const headerButtonbox2 = useRef()


  useEffect(() => {
    let imgKey = 0

    let topImgSlider = setInterval(() => {
      imgKey++
      switch (imgKey) {
        case 1:
          let tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          tl
          .add({
            targets: headerImage1.current,
            translateY: 120,
            opacity: 0
          })
          .add({
            targets: headerImage1box.current,
            display: 'none'
          })
          .add({
            targets: headerImage2box.current,
            top: "14rem"
          }, '-=1000')
          .add({
            targets: headerImage2.current,
            translateY: -70,
            display: 'block'
          }, '-=1000')
          .add({
            targets: headerImage2.current,
            translateY: 0,
            opacity: 1
          }, 650)
          .add({
            targets: headerImage2box.current,
            top: "18rem",
            opacity: 1,
            display: 'block'
          }, 650)

          let timeLTitle = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
          })
          timeLTitle
          .add({
            targets: headerTitle1.current,
            translateY: 80,
            opacity: 0
          })
          .add({
            targets: headerTitle1.current,
            display: 'none'
          })
          .add({
            targets: headerTitle2.current,
            translateY: -80,
          }, '-=750')
          .add({
            targets: headerTitle2.current,
            translateY: 0,
            opacity: 1,
            display: 'block'
          }, 1000)
          break;

          case 2:
            let tl2 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl2
            .add({
              targets: headerImage2.current,
              translateY: 120,
              opacity: 0
            })
            .add({
              targets: headerImage2box.current,
              display: 'none'
            })
            .add({
              targets: headerImage3box.current,
              top: "14rem"
            }, '-=1000')
            .add({
              targets: headerImage3.current,
              translateY: -70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: headerImage3.current,
              translateY: 0,
              opacity: 1
            }, 650)
            .add({
              targets: headerImage3box.current,
              top: "18rem",
              opacity: 1,
              display: 'block'
            }, 650)

            break

          case 3:
            imgKey = 0

            let tl3 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl3
            .add({
              targets: headerImage3.current,
              translateY: 120,
              opacity: 0
            })
            .add({
              targets: headerImage3box.current,
              display: 'none'
            })
            .add({
              targets: headerImage1box.current,
              top: "14rem"
            }, '-=1000')
            .add({
              targets: headerImage1.current,
              translateY: -70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: headerImage1.current,
              translateY: 0,
              opacity: 1
            }, 650)
            .add({
              targets: headerImage1box.current,
              top: "18rem",
              opacity: 1,
              display: 'block'
            }, 650)
            break
      
        default:
          break;
      }
    }, 5000); 
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
            <div className={classes.homeHeaderImagesbox} ref={headerImage1box}>
              <img src="/about-man.png" alt="img1" ref={headerImage1}
              className={classes.headerImage1} />
            </div>
            <div className={classes.homeHeaderImagesbox2} ref={headerImage2box}>
              <img src="/Background.png" alt="img2" ref={headerImage2}
              className={classes.headerImage2} />
            </div>
            <div className={classes.homeHeaderImagesbox3} ref={headerImage3box}>
              <img src="/Einweganzug-Karneval.png" alt="img2" ref={headerImage3}
              className={classes.headerImage3} />
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
