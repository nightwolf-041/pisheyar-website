// import React, {useEffect, useRef, createRef} from 'react'
// import anime from 'animejs'
// import Head from 'next/head'
// // import Swiper from 'react-id-swiper';
// // import '';
// import classes from './topPage.module.scss'


// const TopPage = () => {

//   const headerImage1 = useRef()
//   const headerImage2 = useRef()
//   const headerImage3 = useRef()
//   const headerImage1box = useRef()
//   const headerImage2box = useRef()
//   const headerImage3box = useRef()

//   const headerTitle1 = useRef()
//   const headerTitle2 = useRef()
//   const headerTitle3 = useRef()
//   const headerTitle1box = useRef()
//   const headerTitle2box = useRef()
//   const headerTitle3box = useRef()

//   const headerButtonbox1 = useRef()
//   const headerButtonbox2 = useRef()
//   const headerButtonbox3 = useRef()
//   const headerButtonbox1Box = useRef()
//   const headerButtonbox2Box = useRef()
//   const headerButtonbox3Box = useRef()


//   let imgKey = 0

//   useEffect(() => {

//     setInterval(() => {
//       imgKey++
//       switch (imgKey) {

//         case 0:
//           let tl0 = anime.timeline({
//             easing: 'easeOutExpo',
//             duration: 750
//           });
//           tl0
//           .add({
//             targets: headerImage1.current,
//             translateY: 120,
//             opacity: 0
//           })
//           .add({
//             targets: headerImage1box.current,
//             display: 'none',
//             opacity: 0
//           })
//           .add({
//             targets: headerImage2box.current,
//             top: "14rem"
//           }, '-=1000')
//           .add({
//             targets: headerImage2.current,
//             translateY: -70,
//             display: 'block'
//           }, '-=1000')
//           .add({
//             targets: headerImage2.current,
//             translateY: 0,
//             opacity: 1
//           }, 650)
//           .add({
//             targets: headerImage2box.current,
//             top: "18rem",
//             opacity: 1,
//             display: 'block'
//           }, 650)

//           let timeLTitle0 = anime.timeline({
//             easing: 'easeOutExpo',
//             duration: 750
//           })
//           timeLTitle0
//           .add({
//             targets: headerTitle1.current,
//             translateY: -80,
//             opacity: 0
//           })
//           .add({
//             targets: headerTitle1box.current,
//             display: 'none',
//             opacity: 0
//           })
//           .add({
//             targets: headerTitle2box.current,
//             top: "28rem"
//           }, '-=1000')
//           .add({
//             targets: headerTitle2.current,
//             translateY: 70,
//             display: 'block'
//           }, '-=1000')
//           .add({
//             targets: headerTitle2.current,
//             translateY: 0,
//             opacity: 1
//           }, 650)
//           .add({
//             targets: headerTitle2box.current,
//             top: "25rem",
//             opacity: 1,
//             display: 'block'
//           }, 650)

//           let timeLButtons0 = anime.timeline({
//             easing: 'easeOutExpo',
//             duration: 750
//           })
//           timeLButtons0
//           .add({
//             targets: headerButtonbox1.current,
//             translateX: 140,
//             opacity: 0
//           })
//           .add({
//             targets: headerButtonbox1Box.current,
//             display: 'none',
//             opacity: 0
//           })
//           .add({
//             targets: headerButtonbox2Box.current,
//             right: "38%"
//           }, '-=1000')
//           .add({
//             targets: headerButtonbox2.current,
//             translateX: -70,
//             display: 'block'
//           }, '-=1000')
//           .add({
//             targets: headerButtonbox2.current,
//             translateX: 0,
//             opacity: 1
//           }, 650)
//           .add({
//             targets: headerButtonbox2Box.current,
//             right: "45%",
//             opacity: 1,
//             display: 'block'
//           }, 650)
//           break;

//         case 1:
//           let tl = anime.timeline({
//             easing: 'easeOutExpo',
//             duration: 750
//           });
//           tl
//           .add({
//             targets: headerImage1.current,
//             translateY: 120,
//             opacity: 0
//           })
//           .add({
//             targets: headerImage1box.current,
//             display: 'none',
//             opacity: 0
//           })
//           .add({
//             targets: headerImage2box.current,
//             top: "14rem"
//           }, '-=1000')
//           .add({
//             targets: headerImage2.current,
//             translateY: -70,
//             display: 'block'
//           }, '-=1000')
//           .add({
//             targets: headerImage2.current,
//             translateY: 0,
//             opacity: 1
//           }, 650)
//           .add({
//             targets: headerImage2box.current,
//             top: "18rem",
//             opacity: 1,
//             display: 'block'
//           }, 650)

//           let timeLTitle = anime.timeline({
//             easing: 'easeOutExpo',
//             duration: 750
//           })
//           timeLTitle
//           .add({
//             targets: headerTitle1.current,
//             translateY: -80,
//             opacity: 0
//           })
//           .add({
//             targets: headerTitle1box.current,
//             display: 'none',
//             opacity: 0
//           })
//           .add({
//             targets: headerTitle2box.current,
//             top: "28rem"
//           }, '-=1000')
//           .add({
//             targets: headerTitle2.current,
//             translateY: 70,
//             display: 'block'
//           }, '-=1000')
//           .add({
//             targets: headerTitle2.current,
//             translateY: 0,
//             opacity: 1
//           }, 650)
//           .add({
//             targets: headerTitle2box.current,
//             top: "25rem",
//             opacity: 1,
//             display: 'block'
//           }, 650)

//           let timeLButtons = anime.timeline({
//             easing: 'easeOutExpo',
//             duration: 750
//           })
//           timeLButtons
//           .add({
//             targets: headerButtonbox1.current,
//             translateX: 140,
//             opacity: 0
//           })
//           .add({
//             targets: headerButtonbox1Box.current,
//             display: 'none',
//             opacity: 0
//           })
//           .add({
//             targets: headerButtonbox2Box.current,
//             right: "38%"
//           }, '-=1000')
//           .add({
//             targets: headerButtonbox2.current,
//             translateX: -70,
//             display: 'block'
//           }, '-=1000')
//           .add({
//             targets: headerButtonbox2.current,
//             translateX: 0,
//             opacity: 1
//           }, 650)
//           .add({
//             targets: headerButtonbox2Box.current,
//             right: "45%",
//             opacity: 1,
//             display: 'block'
//           }, 650)
//           break;

//           case 2:
//             let tl2 = anime.timeline({
//               easing: 'easeOutExpo',
//               duration: 750
//             });
//             tl2
//             .add({
//               targets: headerImage2.current,
//               translateY: 120,
//               opacity: 0
//             })
//             .add({
//               targets: headerImage2box.current,
//               display: 'none',
//               opacity: 0
//             })
//             .add({
//               targets: headerImage3box.current,
//               top: "14rem"
//             }, '-=1000')
//             .add({
//               targets: headerImage3.current,
//               translateY: -70,
//               display: 'block'
//             }, '-=1000')
//             .add({
//               targets: headerImage3.current,
//               translateY: 0,
//               opacity: 1
//             }, 650)
//             .add({
//               targets: headerImage3box.current,
//               top: "18rem",
//               opacity: 1,
//               display: 'block'
//             }, 650)

//             let timeLTitle2 = anime.timeline({
//               easing: 'easeOutExpo',
//               duration: 750
//             })
//             timeLTitle2
//             .add({
//               targets: headerTitle2.current,
//               translateY: -80,
//               opacity: 0
//             })
//             .add({
//               targets: headerTitle2box.current,
//               display: 'none',
//               opacity: 0
//             })
//             .add({
//               targets: headerTitle3box.current,
//               top: "28rem"
//             }, '-=1000')
//             .add({
//               targets: headerTitle3.current,
//               translateY: 70,
//               display: 'block'
//             }, '-=1000')
//             .add({
//               targets: headerTitle3.current,
//               translateY: 0,
//               opacity: 1
//             }, 650)
//             .add({
//               targets: headerTitle3box.current,
//               top: "25rem",
//               opacity: 1,
//               display: 'block'
//             }, 650)

//             let timeLButtons2 = anime.timeline({
//               easing: 'easeOutExpo',
//               duration: 750
//             })
//             timeLButtons2
//             .add({
//               targets: headerButtonbox2.current,
//               translateX: 140,
//               opacity: 0
//             })
//             .add({
//               targets: headerButtonbox2Box.current,
//               display: 'none',
//               opacity: 0
//             })
//             .add({
//               targets: headerButtonbox3Box.current,
//               right: "38%"
//             }, '-=1000')
//             .add({
//               targets: headerButtonbox3.current,
//               translateX: -70,
//               display: 'block'
//             }, '-=1000')
//             .add({
//               targets: headerButtonbox3.current,
//               translateX: 0,
//               opacity: 1
//             }, 650)
//             .add({
//               targets: headerButtonbox3Box.current,
//               right: "45%",
//               opacity: 1,
//               display: 'block'
//             }, 650)

//             break

//           case 3:
//             imgKey = 0

//             let tl3 = anime.timeline({
//               easing: 'easeOutExpo',
//               duration: 750
//             });
//             tl3
//             .add({
//               targets: headerImage3.current,
//               translateY: 120,
//               opacity: 0
//             })
//             .add({
//               targets: headerImage3box.current,
//               display: 'none',
//               opacity: 0
//             })
//             .add({
//               targets: headerImage1box.current,
//               top: "14rem"
//             }, '-=1000')
//             .add({
//               targets: headerImage1.current,
//               translateY: -70,
//               display: 'block'
//             }, '-=1000')
//             .add({
//               targets: headerImage1.current,
//               translateY: 0,
//               opacity: 1
//             }, 650)
//             .add({
//               targets: headerImage1box.current,
//               top: "18rem",
//               opacity: 1,
//               display: 'block'
//             }, 650)

//           let timeLTitle3 = anime.timeline({
//               easing: 'easeOutExpo',
//               duration: 750
//             })
//             timeLTitle3
//             .add({
//               targets: headerTitle3.current,
//               translateY: -80,
//               opacity: 0
//             })
//             .add({
//               targets: headerTitle3box.current,
//               display: 'none',
//               opacity: 0
//             })
//             .add({
//               targets: headerTitle1box.current,
//               top: "28rem"
//             }, '-=1000')
//             .add({
//               targets: headerTitle1.current,
//               translateY: 70,
//               display: 'block'
//             }, '-=1000')
//             .add({
//               targets: headerTitle1.current,
//               translateY: 0,
//               opacity: 1
//             }, 650)
//             .add({
//               targets: headerTitle1box.current,
//               top: "25rem",
//               opacity: 1,
//               display: 'block'
//             }, 650)

//             let timeLButtons3 = anime.timeline({
//               easing: 'easeOutExpo',
//               duration: 750
//             })
//             timeLButtons3
//             .add({
//               targets: headerButtonbox3.current,
//               translateX: 140,
//               opacity: 0
//             })
//             .add({
//               targets: headerButtonbox3Box.current,
//               display: 'none',
//               opacity: 0
//             })
//             .add({
//               targets: headerButtonbox1Box.current,
//               right: "38%"
//             }, '-=1000')
//             .add({
//               targets: headerButtonbox1.current,
//               translateX: -70,
//               display: 'block'
//             }, '-=1000')
//             .add({
//               targets: headerButtonbox1.current,
//               translateX: 0,
//               opacity: 1
//             }, 650)
//             .add({
//               targets: headerButtonbox1Box.current,
//               right: "45%",
//               opacity: 1,
//               display: 'block'
//             }, 650)
//             break
      
//         default:
//           break;
//       }
//     }, 8000); 
//   }, [])

//   return (
//     <>
//       <Head>
//         <title>صفحه اصلی</title>
//         <meta name="description" content="سایت رسمی پیشه یار" />
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//         <div className={classes.homeHeader}>
//             <img src="/BackgroundEllipse.svg" alt="background"
//             className={classes.homeBackgroundEllipse} />
//           <div className="container">
//             <div className={classes.homeHeaderImagesbox} ref={headerImage1box}>
//               <img src="/about-man.png" alt="img1" ref={headerImage1}
//               className={classes.headerImage1} />
//             </div>
//             <div className={classes.homeHeaderImagesbox2} ref={headerImage2box}>
//               <img src="/Background.png" alt="img2" ref={headerImage2}
//               className={classes.headerImage2} />
//             </div>
//             <div className={classes.homeHeaderImagesbox3} ref={headerImage3box}>
//               <img src="/Einweganzug-Karneval.png" alt="img2" ref={headerImage3}
//               className={classes.headerImage3} />
//             </div>
//             <div className={classes.homeHeaderTitlebox} ref={headerTitle1box}>
//               <h1 ref={headerTitle1}>
//                 با پیشه یار از خدمات متنوع صنعتی باخبر شوید
//               </h1>
//             </div>
//             <div className={classes.homeHeaderTitlebox2} ref={headerTitle2box} >
//               <h1 ref={headerTitle2}>
//                 با پیشه یار از اخبار ما هم خبردار شید
//               </h1>
//             </div>
//             <div className={classes.homeHeaderTitlebox3} ref={headerTitle3box} >
//               <h1 ref={headerTitle3}>
//                 با پیشه یار از اخبار ما هم خبردار شید
//               </h1>
//             </div>
//             <div className={classes.homeHeaderButtonbox} ref={headerButtonbox1Box}>
//               <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox1}>
//                 <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
//                 <p className={classes.homeHeaderButtonboxText}>
//                   همین حالا از خدمات ما مطلع شوید
//                 </p>
//               </div>
//             </div>
//             <div className={classes.homeHeaderButtonbox2} ref={headerButtonbox2Box}>
//               <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox2}>
//                 <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
//                 <p className={classes.homeHeaderButtonboxText}>
//                   همین حالا از خدمات ما مطلع شوید
//                 </p>
//               </div>
//             </div>
//             <div className={classes.homeHeaderButtonbox3} ref={headerButtonbox3Box}>
//               <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox3}>
//                 <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
//                 <p className={classes.homeHeaderButtonboxText}>
//                   همین حالا از خدمات ما مطلع شوید
//                 </p>
//               </div>
//             </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default TopPage


import React, {useEffect, useRef, createRef} from 'react'
import anime from 'animejs'
import Head from 'next/head'
// import Swiper from 'react-id-swiper';
// import '';
import classes from './topPage.module.scss'


class TopPage extends React.Component {

    constructor(props) {
        super(props);

        this.headerImage1 = createRef()
        this.headerImage2 = createRef()
        this.headerImage3 = createRef()
        this.headerImage1box = createRef()
        this.headerImage2box = createRef()
        this.headerImage3box = createRef()

        this.headerTitle1 = createRef()
        this.headerTitle2 = createRef()
        this.headerTitle3 = createRef()
        this.headerTitle1box = createRef()
        this.headerTitle2box = createRef()
        this.headerTitle3box = createRef()

        this.headerButtonbox1 = createRef()
        this.headerButtonbox2 = createRef()
        this.headerButtonbox3 = createRef()
        this.headerButtonbox1Box = createRef()
        this.headerButtonbox2Box = createRef()
        this.headerButtonbox3Box = createRef()
    }


 componentDidMount() {
    let imgKey = 0
    setInterval(() => {
        imgKey++
        switch (imgKey) {
  
          case 0:
            let tl0 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl0
            .add({
              targets: this.headerImage1.current,
              translateY: 120,
              opacity: 0
            })
            .add({
              targets: this.headerImage1box.current,
              display: 'none',
              opacity: 0
            })
            .add({
              targets: this.headerImage2box.current,
              top: "14rem"
            }, '-=1000')
            .add({
              targets: this.headerImage2.current,
              translateY: -70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: this.headerImage2.current,
              translateY: 0,
              opacity: 1
            }, 650)
            .add({
              targets: this.headerImage2box.current,
              top: "18rem",
              opacity: 1,
              display: 'block'
            }, 650)
  
            let timeLTitle0 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            })
            timeLTitle0
            .add({
              targets: this.headerTitle1.current,
              translateY: -80,
              opacity: 0
            })
            .add({
              targets: this.headerTitle1box.current,
              display: 'none',
              opacity: 0
            })
            .add({
              targets: this.headerTitle2box.current,
              top: "28rem"
            }, '-=1000')
            .add({
              targets: this.headerTitle2.current,
              translateY: 70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: this.headerTitle2.current,
              translateY: 0,
              opacity: 1
            }, 650)
            .add({
              targets: this.headerTitle2box.current,
              top: "25rem",
              opacity: 1,
              display: 'block'
            }, 650)
  
            let timeLButtons0 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            })
            timeLButtons0
            .add({
              targets: this.headerButtonbox1.current,
              translateX: 140,
              opacity: 0
            })
            .add({
              targets: this.headerButtonbox1Box.current,
              display: 'none',
              opacity: 0
            })
            .add({
              targets: this.headerButtonbox2Box.current,
              right: "38%"
            }, '-=1000')
            .add({
              targets: this.headerButtonbox2.current,
              translateX: -70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: this.headerButtonbox2.current,
              translateX: 0,
              opacity: 1
            }, 650)
            .add({
              targets: this.headerButtonbox2Box.current,
              right: "45%",
              opacity: 1,
              display: 'block'
            }, 650)
            break;
  
          case 1:
            let tl = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl
            .add({
              targets: this.headerImage1.current,
              translateY: 120,
              opacity: 0
            })
            .add({
              targets: this.headerImage1box.current,
              display: 'none',
              opacity: 0
            })
            .add({
              targets: this.headerImage2box.current,
              top: "14rem"
            }, '-=1000')
            .add({
              targets: this.headerImage2.current,
              translateY: -70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: this.headerImage2.current,
              translateY: 0,
              opacity: 1
            }, 650)
            .add({
              targets: this.headerImage2box.current,
              top: "18rem",
              opacity: 1,
              display: 'block'
            }, 650)
  
            let timeLTitle = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            })
            timeLTitle
            .add({
              targets: this.headerTitle1.current,
              translateY: -80,
              opacity: 0
            })
            .add({
              targets: this.headerTitle1box.current,
              display: 'none',
              opacity: 0
            })
            .add({
              targets: this.headerTitle2box.current,
              top: "28rem"
            }, '-=1000')
            .add({
              targets: this.headerTitle2.current,
              translateY: 70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: this.headerTitle2.current,
              translateY: 0,
              opacity: 1
            }, 650)
            .add({
              targets: this.headerTitle2box.current,
              top: "25rem",
              opacity: 1,
              display: 'block'
            }, 650)
  
            let timeLButtons = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            })
            timeLButtons
            .add({
              targets: this.headerButtonbox1.current,
              translateX: 140,
              opacity: 0
            })
            .add({
              targets: this.headerButtonbox1Box.current,
              display: 'none',
              opacity: 0
            })
            .add({
              targets: this.headerButtonbox2Box.current,
              right: "38%"
            }, '-=1000')
            .add({
              targets: this.headerButtonbox2.current,
              translateX: -70,
              display: 'block'
            }, '-=1000')
            .add({
              targets: this.headerButtonbox2.current,
              translateX: 0,
              opacity: 1
            }, 650)
            .add({
              targets: this.headerButtonbox2Box.current,
              right: "45%",
              opacity: 1,
              display: 'block'
            }, 650)
            break;
  
            case 2:
              let tl2 = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750
              });
              tl2
              .add({
                targets: this.headerImage2.current,
                translateY: 120,
                opacity: 0
              })
              .add({
                targets: this.headerImage2box.current,
                display: 'none',
                opacity: 0
              })
              .add({
                targets: this.headerImage3box.current,
                top: "14rem"
              }, '-=1000')
              .add({
                targets: this.headerImage3.current,
                translateY: -70,
                display: 'block'
              }, '-=1000')
              .add({
                targets: this.headerImage3.current,
                translateY: 0,
                opacity: 1
              }, 650)
              .add({
                targets: this.headerImage3box.current,
                top: "18rem",
                opacity: 1,
                display: 'block'
              }, 650)
  
              let timeLTitle2 = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750
              })
              timeLTitle2
              .add({
                targets: this.headerTitle2.current,
                translateY: -80,
                opacity: 0
              })
              .add({
                targets: this.headerTitle2box.current,
                display: 'none',
                opacity: 0
              })
              .add({
                targets: this.headerTitle3box.current,
                top: "28rem"
              }, '-=1000')
              .add({
                targets: this.headerTitle3.current,
                translateY: 70,
                display: 'block'
              }, '-=1000')
              .add({
                targets: this.headerTitle3.current,
                translateY: 0,
                opacity: 1
              }, 650)
              .add({
                targets: this.headerTitle3box.current,
                top: "25rem",
                opacity: 1,
                display: 'block'
              }, 650)
  
              let timeLButtons2 = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750
              })
              timeLButtons2
              .add({
                targets: this.headerButtonbox2.current,
                translateX: 140,
                opacity: 0
              })
              .add({
                targets: this.headerButtonbox2Box.current,
                display: 'none',
                opacity: 0
              })
              .add({
                targets: this.headerButtonbox3Box.current,
                right: "38%"
              }, '-=1000')
              .add({
                targets: this.headerButtonbox3.current,
                translateX: -70,
                display: 'block'
              }, '-=1000')
              .add({
                targets: this.headerButtonbox3.current,
                translateX: 0,
                opacity: 1
              }, 650)
              .add({
                targets: this.headerButtonbox3Box.current,
                right: "45%",
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
                targets: this.headerImage3.current,
                translateY: 120,
                opacity: 0
              })
              .add({
                targets: this.headerImage3box.current,
                display: 'none',
                opacity: 0
              })
              .add({
                targets: this.headerImage1box.current,
                top: "14rem"
              }, '-=1000')
              .add({
                targets: this.headerImage1.current,
                translateY: -70,
                display: 'block'
              }, '-=1000')
              .add({
                targets: this.headerImage1.current,
                translateY: 0,
                opacity: 1
              }, 650)
              .add({
                targets: this.headerImage1box.current,
                top: "18rem",
                opacity: 1,
                display: 'block'
              }, 650)
  
            let timeLTitle3 = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750
              })
              timeLTitle3
              .add({
                targets: this.headerTitle3.current,
                translateY: -80,
                opacity: 0
              })
              .add({
                targets: this.headerTitle3box.current,
                display: 'none',
                opacity: 0
              })
              .add({
                targets: this.headerTitle1box.current,
                top: "28rem"
              }, '-=1000')
              .add({
                targets: this.headerTitle1.current,
                translateY: 70,
                display: 'block'
              }, '-=1000')
              .add({
                targets: this.headerTitle1.current,
                translateY: 0,
                opacity: 1
              }, 650)
              .add({
                targets: this.headerTitle1box.current,
                top: "25rem",
                opacity: 1,
                display: 'block'
              }, 650)
  
              let timeLButtons3 = anime.timeline({
                easing: 'easeOutExpo',
                duration: 750
              })
              timeLButtons3
              .add({
                targets: this.headerButtonbox3.current,
                translateX: 140,
                opacity: 0
              })
              .add({
                targets: this.headerButtonbox3Box.current,
                display: 'none',
                opacity: 0
              })
              .add({
                targets: this.headerButtonbox1Box.current,
                right: "38%"
              }, '-=1000')
              .add({
                targets: this.headerButtonbox1.current,
                translateX: -70,
                display: 'block'
              }, '-=1000')
              .add({
                targets: this.headerButtonbox1.current,
                translateX: 0,
                opacity: 1
              }, 650)
              .add({
                targets: this.headerButtonbox1Box.current,
                right: "45%",
                opacity: 1,
                display: 'block'
              }, 650)
              break
        
          default:
            break;
        }
      }, 8000); 
 }

  render() {

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
                <div className={classes.homeHeaderImagesbox} ref={this.headerImage1box}>
                  <img src="/about-man.png" alt="img1" ref={this.headerImage1}
                  className={classes.headerImage1} />
                </div>
                <div className={classes.homeHeaderImagesbox2} ref={this.headerImage2box}>
                  <img src="/Background.png" alt="img2" ref={this.headerImage2}
                  className={classes.headerImage2} />
                </div>
                <div className={classes.homeHeaderImagesbox3} ref={this.headerImage3box}>
                  <img src="/Einweganzug-Karneval.png" alt="img2" ref={this.headerImage3}
                  className={classes.headerImage3} />
                </div>
                <div className={classes.homeHeaderTitlebox} ref={this.headerTitle1box}>
                  <h1 ref={this.headerTitle1}>
                    با پیشه یار از خدمات متنوع صنعتی باخبر شوید
                  </h1>
                </div>
                <div className={classes.homeHeaderTitlebox2} ref={this.headerTitle2box} >
                  <h1 ref={this.headerTitle2}>
                    با پیشه یار از اخبار ما هم خبردار شید
                  </h1>
                </div>
                <div className={classes.homeHeaderTitlebox3} ref={this.headerTitle3box} >
                  <h1 ref={this.headerTitle3}>
                    با پیشه یار از اخبار ما هم خبردار شید
                  </h1>
                </div>
                <div className={classes.homeHeaderButtonbox} ref={this.headerButtonbox1Box}>
                  <div className={classes.homeHeaderButtonboxKeeper} ref={this.headerButtonbox1}>
                    <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                    <p className={classes.homeHeaderButtonboxText}>
                      همین حالا از خدمات ما مطلع شوید
                    </p>
                  </div>
                </div>
                <div className={classes.homeHeaderButtonbox2} ref={this.headerButtonbox2Box}>
                  <div className={classes.homeHeaderButtonboxKeeper} ref={this.headerButtonbox2}>
                    <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                    <p className={classes.homeHeaderButtonboxText}>
                      همین حالا از خدمات ما مطلع شوید
                    </p>
                  </div>
                </div>
                <div className={classes.homeHeaderButtonbox3} ref={this.headerButtonbox3Box}>
                  <div className={classes.homeHeaderButtonboxKeeper} ref={this.headerButtonbox3}>
                    <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                    <p className={classes.homeHeaderButtonboxText}>
                      همین حالا از خدمات ما مطلع شوید
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </>
      )
  }
 
}

export default TopPage