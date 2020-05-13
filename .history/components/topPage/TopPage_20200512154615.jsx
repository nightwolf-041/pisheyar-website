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


import React, {Component} from 'react';
import { TimelineLite, TweenLite, Bounce, Elastic } from "gsap";
import classes from './topPage.module.scss'


class TopPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      imgKey: 0
    }

    this.headerImage1 = null
    this.headerImage1Tween = null

    this.headerImage2 = null
    this.headerImage2Tween = null

    this.headerImage3 = null
    this.headerImage3Tween = null

    this.headerImage1box = null
    this.headerImage1boxTween = null

    this.headerImage2box = null
    this.headerImage2boxTween = null

    this.headerImage3box = null
    this.headerImage3boxTween = null


    this.headerTitle1 = null
    this.headerTitle1Tween = null

    this.headerTitle2 = null
    this.headerTitle2Tween = null

    this.headerTitle3 = null
    this.headerTitle3Tween = null

    this.headerTitle1box = null
    this.headerTitle1boxTween = null

    this.headerTitle2box = null
    this.headerTitle2boxTween = null

    this.headerTitle3box = null
    this.headerTitle3boxTween = null


    this.headerButtonbox1 = null
    this.headerButtonbox1Tween = null

    this.headerButtonbox2 = null
    this.headerButtonbox2Tween = null

    this.headerButtonbox3 = null
    this.headerButtonbox3Tween = null

    this.headerButtonbox1Box = null
    this.headerButtonbox1BoxTween = null

    this.headerButtonbox2Box = null
    this.headerButtonbox2BoxTween = null

    this.headerButtonbox3Box = null
    this.headerButtonbox3BoxTween = null

    this.paginate1 = null
    this.paginate1Tween = null

    this.paginate2 = null
    this.paginate2Tween = null

    this.paginate3 = null
    this.paginate3Tween = null

  }

  componentDidMount() {

    let myTimer = setInterval(() => {
      this.setState({imgKey: this.state.imgKey += 1})

        if(this.state.imgKey === 1){

          anime({
            targets: paginate2.current,
            width: 18,
            height: 18,
            backgroundColor: 'rgba(11, 16, 51, 1)'
          })
          anime({
            targets: paginate1.current,
            width: 10,
            height: 10,
            backgroundColor: 'rgba(11, 16, 51, 0.74)'
          })
          anime({
            targets: paginate3.current,
            width: 10,
            height: 10,
            backgroundColor: 'rgba(11, 16, 51, 0.74)'
          })

          let tl1for2 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          tl1for2
            .add({
              targets: headerImage2.current,
              translateY: -70,
              opacity: 0
            }, 0)
            .add({
              targets: headerImage2box.current,
              opacity: 0,
              // top: '14rem'
            }, 0)
            .add({
              targets: headerImage2.current,
              translateY: 0,
              opacity: 1
            }, 750)
            .add({
              targets: headerImage2box.current,
              opacity: 1,
              // top: '17rem',
              zIndex: 15
            }, 750)

          let tl1for3 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          tl1for3
            .add({
              targets: headerImage3.current,
              translateY: 120,
              opacity: 1
            })
            .add({
              targets: headerImage3box.current,
              opacity: 0,
              zIndex: 0
          })

          let tl1for1 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          tl1for1
            .add({
              targets: headerImage1.current,
              translateY: 120,
              opacity: 0
            })
            .add({
              targets: headerImage1box.current,
              opacity: 0,
              zIndex: 0
          })
          // title one
          // title one
          // title one
          // title one
          // title one
          // title one

          let title1for3 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          title1for3
            .add({
              targets: headerTitle3.current,
              translateY: 70,
              opacity: 0
            }, 0)
            .add({
              targets: headerTitle3box.current,
              opacity: 0,
              // top: '28rem'
            }, 0)
            .add({
              targets: headerTitle3.current,
              translateY: 0,
              opacity: 1
            }, 750)
            .add({
              targets: headerTitle3box.current,
              opacity: 1,
              // top: '25rem',
              zIndex: 15
            }, 750)

          let title1for2 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          title1for2
            .add({
              targets: headerTitle2.current,
              translateY: -80,
              opacity: 0
            })
            .add({
              targets: headerTitle2box.current,
              opacity: 0,
              zIndex: 0
          })

          let title1for1 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          title1for1
            .add({
              targets: headerTitle1.current,
              translateY: -80,
              opacity: 0
            })
            .add({
              targets: headerTitle1box.current,
              opacity: 0,
              zIndex: 0
          })

          // byttons one
          // byttons one
          // byttons one
          // byttons one
          // byttons one
          // headerButtonbox1
          // byttons one

          let btn1for3 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          btn1for3
            .add({
              targets: headerButtonbox3.current,
              translateY: -70,
              opacity: 0
            }, 0)
            .add({
              targets: headerButtonbox3Box.current,
              opacity: 0,
              // top: '33rem'
            }, 0)
            .add({
              targets: headerButtonbox3.current,
              translateY: 0,
              opacity: 1
            }, 750)
            .add({
              targets: headerButtonbox3Box.current,
              opacity: 1,
              // top: '37rem',
              zIndex: 15
            }, 750)

          let btn1for2 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          btn1for2
            .add({
              targets: headerButtonbox2.current,
              translateY: 80,
              opacity: 0
            })
            .add({
              targets: headerButtonbox2Box.current,
              opacity: 0,
              zIndex: 0
          })

          let btn1for1 = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
          btn1for1
            .add({
              targets: headerButtonbox1.current,
              translateY: 80,
              opacity: 0
            })
            .add({
              targets: headerButtonbox1Box.current,
              opacity: 0,
              zIndex: 0
          })
        }

          if(this.state.imgKey === 2) {

            anime({
            targets: paginate3.current,
            width: 18,
            height: 18,
            backgroundColor: 'rgba(11, 16, 51, 1)'
            })
            anime({
              targets: paginate1.current,
              width: 10,
              height: 10,
              backgroundColor: 'rgba(11, 16, 51, 0.74)'
            })
            anime({
              targets: paginate2.current,
              width: 10,
              height: 10,
              backgroundColor: 'rgba(11, 16, 51, 0.74)'
            })

            let tl2for3 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl2for3
              .add({
                targets: headerImage3.current,
                translateY: -70,
                opacity: 0
              }, 0)
              .add({
                targets: headerImage3box.current,
                opacity: 0,
                // top: '14rem'
              }, 0)
              .add({
                targets: headerImage3.current,
                translateY: 0,
                opacity: 1
              }, 750)
              .add({
                targets: headerImage3box.current,
                opacity: 1,
                // top: '17rem',
                zIndex: 15
              }, 750)

            let tl2for1 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl2for1
              .add({
                targets: headerImage1.current,
                translateY: 120,
                opacity: 0
              })
              .add({
                targets: headerImage1box.current,
                opacity: 0,
                zIndex: 0

            })
  
            let tl2for2 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl2for2
              .add({
                targets: headerImage2.current,
                translateY: 120,
                opacity: 0
              })
              .add({
                targets: headerImage2box.current,
                opacity: 0,
                zIndex: 0

            })

            // title two
            // title two
            // title two
            // title two

            let title2for2 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            title2for2
              .add({
                targets: headerTitle2.current,
                translateY: 70,
                opacity: 0
              }, 0)
              .add({
                targets: headerTitle2box.current,
                opacity: 0,
                // top: '28rem'
              }, 0)
              .add({
                targets: headerTitle2.current,
                translateY: 0,
                opacity: 1
              }, 750)
              .add({
                targets: headerTitle2box.current,
                opacity: 1,
                // top: '25rem',
                zIndex: 15
              }, 750)
  
            let title2for1 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            title2for1
              .add({
                targets: headerTitle1.current,
                translateY: -80,
                opacity: 0
              })
              .add({
                targets: headerTitle1box.current,
                opacity: 0,
                zIndex: 0

            })
  
            let title2for3 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            title2for3
              .add({
                targets: headerTitle3.current,
                translateY: -80,
                opacity: 0
              })
              .add({
                targets: headerTitle3box.current,
                opacity: 0,
                zIndex: 0

            })

            // buttons two 
            // buttons two 
            // buttons two 
            // buttons two 

            let btn2for2 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            btn2for2
              .add({
                targets: headerButtonbox2.current,
                translateY: -70,
                opacity: 0
              }, 0)
              .add({
                targets: headerButtonbox2Box.current,
                opacity: 0,
                // top: '33rem'
              }, 0)
              .add({
                targets: headerButtonbox2.current,
                translateY: 0,
                opacity: 1
              }, 750)
              .add({
                targets: headerButtonbox2Box.current,
                opacity: 1,
                // top: '37rem',
                zIndex: 15
              }, 750)
  
            let btn2for1= anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            btn2for1
              .add({
                targets: headerButtonbox1.current,
                translateY: 80,
                opacity: 0
              })
              .add({
                targets: headerButtonbox1Box.current,
                opacity: 0,
                zIndex: 0

            })
  
            let btn2for3 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            btn2for3
              .add({
                targets: headerButtonbox3.current,
                translateY: 80,
                opacity: 0
              })
              .add({
                targets: headerButtonbox3Box.current,
                opacity: 0,
                zIndex: 0

            })
        }

          if(this.state.imgKey === 3){
            imgKey = 0
            this.setState({imgKey: 0})

            anime({
              targets: paginate1.current,
              width: 18,
              height: 18,
              backgroundColor: 'rgba(11, 16, 51, 1)'
            })
            anime({
              targets: paginate2.current,
              width: 10,
              height: 10,
              backgroundColor: 'rgba(11, 16, 51, 0.74)'
            })
            anime({
              targets: paginate3.current,
              width: 10,
              height: 10,
              backgroundColor: 'rgba(11, 16, 51, 0.74)'
            })

            let tl3for1 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl3for1
              .add({
                targets: headerImage1.current,
                translateY: -70,
                opacity: 0
              }, 0)
              .add({
                targets: headerImage1box.current,
                opacity: 0,
                // top: '14rem'
              }, 0)
              .add({
                targets: headerImage1.current,
                translateY: 0,
                opacity: 1
              }, 750)
              .add({
                targets: headerImage1box.current,
                opacity: 1,
                // top: '17rem',
                zIndex: 15
              }, 750)

            let tl3for2 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl3for2
              .add({
                targets: headerImage2.current,
                translateY: 120,
                opacity: 0
              })
              .add({
                targets: headerImage2box.current,
                opacity: 0,
                zIndex: 0

            })
  
            let tl3for3 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            tl3for3
              .add({
                targets: headerImage3.current,
                translateY: 120,
                opacity: 0
              })
              .add({
                targets: headerImage3box.current,
                opacity: 0,
                zIndex: 0

            })

            // title three
            // title three
            // title three
            // title three

            let title3for1 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            title3for1
              .add({
                targets: headerTitle1.current,
                translateY: 70,
                opacity: 0
              }, 0)
              .add({
                targets: headerTitle1box.current,
                opacity: 0,
                // top: '28rem'
              }, 0)
              .add({
                targets: headerTitle1.current,
                translateY: 0,
                opacity: 1
              }, 750)
              .add({
                targets: headerTitle1box.current,
                opacity: 1,
                // top: '25rem',
                zIndex: 15
              }, 750)
  
            let title3for2 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            title3for2
              .add({
                targets: headerTitle2.current,
                translateY: -80,
                opacity: 0
              })
              .add({
                targets: headerTitle2box.current,
                opacity: 0,
                zIndex: 0

            })
  
            let title3for3 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            title3for3
              .add({
                targets: headerTitle3.current,
                translateY: -80,
                opacity: 0
              })
              .add({
                targets: headerTitle3box.current,
                opacity: 0,
                zIndex: 0

            })

            // buttons three 
            // buttons three 
            // buttons three 
            // buttons three 

            let btn3for1 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            btn3for1
              .add({
                targets: headerButtonbox1.current,
                translateY: -70,
                opacity: 0
              }, 0)
              .add({
                targets: headerButtonbox1Box.current,
                opacity: 0,
                // top: '33rem'
              }, 0)
              .add({
                targets: headerButtonbox1.current,
                translateY: 0,
                opacity: 1
              }, 750)
              .add({
                targets: headerButtonbox1Box.current,
                opacity: 1,
                // top: '37rem',
                zIndex: 15
              }, 750)
  
            let btn3for2= anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            btn3for2
              .add({
                targets: headerButtonbox2.current,
                translateY: 80,
                opacity: 0
              })
              .add({
                targets: headerButtonbox2Box.current,
                opacity: 0,
                zIndex: 0

            })
  
            let btn3for3 = anime.timeline({
              easing: 'easeOutExpo',
              duration: 750
            });
            btn3for3
              .add({
                targets: headerButtonbox3.current,
                translateY: 80,
                opacity: 0
              })
              .add({
                targets: headerButtonbox3Box.current,
                opacity: 0,
                zIndex: 0

            })
        }
      
    }, 8000); 

    // if(window.innerWidth <= 768) {
    //   clearInterval(myTimer)
    // }

  }


  jumpTo1 = () => {
    imgKey = 0

    anime({
      targets: paginate1.current,
      width: 18,
      height: 18,
      backgroundColor: 'rgba(11, 16, 51, 1)'
    })
    anime({
      targets: paginate2.current,
      width: 10,
      height: 10,
      backgroundColor: 'rgba(11, 16, 51, 0.74)'
    })
    anime({
      targets: paginate3.current,
      width: 10,
      height: 10,
      backgroundColor: 'rgba(11, 16, 51, 0.74)'
    })

    let tl1for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl1for1
      .add({
        targets: headerImage1.current,
        translateY: -70,
        opacity: 0
      }, 0)
      .add({
        targets: headerImage1box.current,
        opacity: 0,
        // top: '14rem'
      }, 0)
      .add({
        targets: headerImage1.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerImage1box.current,
        opacity: 1,
        // top: '17rem',
        zIndex: 15
      }, 750)

    let tl1for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl1for3
      .add({
        targets: headerImage3.current,
        translateY: 120,
        opacity: 0
      })
      .add({
        targets: headerImage3box.current,
        opacity: 0,
        zIndex: 0
    })

    let tl1for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl1for2
      .add({
        targets: headerImage2.current,
        translateY: 120,
        opacity: 0
      })
      .add({
        targets: headerImage2box.current,
        opacity: 0,
        zIndex: 0
    })
    // title one
    // title one
    // title one
    // title one
    // title one
    // title one

    let title1for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title1for1
      .add({
        targets: headerTitle1.current,
        translateY: 70,
        opacity: 0
      }, 0)
      .add({
        targets: headerTitle1box.current,
        opacity: 0,
        // top: '28rem'
      }, 0)
      .add({
        targets: headerTitle1.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerTitle1box.current,
        opacity: 1,
        // top: '25rem',
        zIndex: 15
      }, 750)

    let title1for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title1for2
      .add({
        targets: headerTitle2.current,
        translateY: -80,
        opacity: 0
      })
      .add({
        targets: headerTitle2box.current,
        opacity: 0,
        zIndex: 0
    })

    let title1for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title1for3
      .add({
        targets: headerTitle3.current,
        translateY: -80,
        opacity: 0
      })
      .add({
        targets: headerTitle3box.current,
        opacity: 0,
        zIndex: 0
    })

    // byttons one
    // byttons one
    // byttons one
    // byttons one
    // byttons one
    // headerButtonbox1
    // byttons one

    let btn1for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn1for1
      .add({
        targets: headerButtonbox1.current,
        translateY: -70,
        opacity: 0
      }, 0)
      .add({
        targets: headerButtonbox1Box.current,
        opacity: 0,
        // top: '33rem'
      }, 0)
      .add({
        targets: headerButtonbox1.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerButtonbox1Box.current,
        opacity: 1,
        // top: '37rem',
        zIndex: 15
      }, 750)

    let btn1for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn1for2
      .add({
        targets: headerButtonbox2.current,
        translateY: 80,
        opacity: 0
      })
      .add({
        targets: headerButtonbox2Box.current,
        opacity: 0,
        zIndex: 0
    })

    let btn1for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn1for3
      .add({
        targets: headerButtonbox3.current,
        translateY: 80,
        opacity: 0
      })
      .add({
        targets: headerButtonbox3Box.current,
        opacity: 0,
        zIndex: 0
    })
  }


  jumpTo2 = () => {
    imgKey = 1

    anime({
      targets: paginate2.current,
      width: 18,
      height: 18,
      backgroundColor: 'rgba(11, 16, 51, 1)'
    })
    anime({
      targets: paginate1.current,
      width: 10,
      height: 10,
      backgroundColor: 'rgba(11, 16, 51, 0.74)'
    })
    anime({
      targets: paginate3.current,
      width: 10,
      height: 10,
      backgroundColor: 'rgba(11, 16, 51, 0.74)'
    })

    let tl1for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl1for2
      .add({
        targets: headerImage2.current,
        translateY: -70,
        opacity: 0
      }, 0)
      .add({
        targets: headerImage2box.current,
        opacity: 0,
        // top: '14rem'
      }, 0)
      .add({
        targets: headerImage2.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerImage2box.current,
        opacity: 1,
        // top: '17rem',
        zIndex: 15
      }, 750)

    let tl1for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl1for3
      .add({
        targets: headerImage3.current,
        translateY: 120,
        opacity: 0
      })
      .add({
        targets: headerImage3box.current,
        opacity: 0,
        zIndex: 0
    })

    let tl1for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl1for1
      .add({
        targets: headerImage1.current,
        translateY: 120,
        opacity: 0
      })
      .add({
        targets: headerImage1box.current,
        opacity: 0,
        zIndex: 0
    })
    // title one
    // title one
    // title one
    // title one
    // title one
    // title one

    let title1for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title1for2
      .add({
        targets: headerTitle2.current,
        translateY: 70,
        opacity: 0
      }, 0)
      .add({
        targets: headerTitle2box.current,
        opacity: 0,
        // top: '28rem'
      }, 0)
      .add({
        targets: headerTitle2.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerTitle2box.current,
        opacity: 1,
        // top: '25rem',
        zIndex: 15
      }, 750)

    let title1for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title1for3
      .add({
        targets: headerTitle3.current,
        translateY: -80,
        opacity: 0
      })
      .add({
        targets: headerTitle3box.current,
        opacity: 0,
        zIndex: 0
    })

    let title1for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title1for1
      .add({
        targets: headerTitle1.current,
        translateY: -80,
        opacity: 0
      })
      .add({
        targets: headerTitle1box.current,
        opacity: 0,
        zIndex: 0
    })

    // byttons one
    // byttons one
    // byttons one
    // byttons one
    // byttons one
    // headerButtonbox1
    // byttons one

    let btn1for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn1for2
      .add({
        targets: headerButtonbox2.current,
        translateY: -70,
        opacity: 0
      }, 0)
      .add({
        targets: headerButtonbox2Box.current,
        opacity: 0,
        // top: '33rem'
      }, 0)
      .add({
        targets: headerButtonbox2.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerButtonbox2Box.current,
        opacity: 1,
        // top: '37rem',
        zIndex: 15
      }, 750)

    let btn1for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn1for3
      .add({
        targets: headerButtonbox3.current,
        translateY: 80,
        opacity: 0
      })
      .add({
        targets: headerButtonbox3Box.current,
        opacity: 0,
        zIndex: 0
    })

    let btn1for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn1for1
      .add({
        targets: headerButtonbox1.current,
        translateY: 80,
        opacity: 0
      })
      .add({
        targets: headerButtonbox1Box.current,
        opacity: 0,
        zIndex: 0
    })
  }

  jumpTo3 = () => {
    imgKey = 2

    anime({
      targets: paginate3.current,
      width: 18,
      height: 18,
      backgroundColor: 'rgba(11, 16, 51, 1)'
    })
    anime({
      targets: paginate1.current,
      width: 10,
      height: 10,
      backgroundColor: 'rgba(11, 16, 51, 0.74)'
    })
    anime({
      targets: paginate2.current,
      width: 10,
      height: 10,
      backgroundColor: 'rgba(11, 16, 51, 0.74)'
    })

    let tl3for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl3for3
      .add({
        targets: headerImage3.current,
        translateY: -70,
        opacity: 0
      }, 0)
      .add({
        targets: headerImage3box.current,
        opacity: 0,
        top: '14rem'
      }, 0)
      .add({
        targets: headerImage3.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerImage3box.current,
        opacity: 1,
        top: '17rem',
        zIndex: 15
      }, 750)

    let tl3for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl3for2
      .add({
        targets: headerImage2.current,
        translateY: 120,
        opacity: 0
      })
      .add({
        targets: headerImage2box.current,
        opacity: 0,
        zIndex: 0

    })

    let tl3for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    tl3for1
      .add({
        targets: headerImage1.current,
        translateY: 120,
        opacity: 0
      })
      .add({
        targets: headerImage1box.current,
        opacity: 0,
        zIndex: 0

    })

    // title three
    // title three
    // title three
    // title three

    let title3for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title3for3
      .add({
        targets: headerTitle3.current,
        translateY: 70,
        opacity: 0
      }, 0)
      .add({
        targets: headerTitle3box.current,
        opacity: 0,
        // top: '28rem'
      }, 0)
      .add({
        targets: headerTitle3.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerTitle3box.current,
        opacity: 1,
        // top: '25rem',
        zIndex: 15
      }, 750)

    let title3for2 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title3for2
      .add({
        targets: headerTitle2.current,
        translateY: -80,
        opacity: 0
      })
      .add({
        targets: headerTitle2box.current,
        opacity: 0,
        zIndex: 0

    })

    let title3for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    title3for1
      .add({
        targets: headerTitle1.current,
        translateY: -80,
        opacity: 0
      })
      .add({
        targets: headerTitle1box.current,
        opacity: 0,
        zIndex: 0

    })

    // buttons three 
    // buttons three 
    // buttons three 
    // buttons three 

    let btn3for3 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn3for3
      .add({
        targets: headerButtonbox3.current,
        translateY: -70,
        opacity: 0
      }, 0)
      .add({
        targets: headerButtonbox3Box.current,
        opacity: 0,
        // top: '33rem'
      }, 0)
      .add({
        targets: headerButtonbox3.current,
        translateY: 0,
        opacity: 1
      }, 750)
      .add({
        targets: headerButtonbox3Box.current,
        opacity: 1,
        // top: '37rem',
        zIndex: 15
      }, 750)

    let btn3for2= anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn3for2
      .add({
        targets: headerButtonbox2.current,
        translateY: 80,
        opacity: 0
      })
      .add({
        targets: headerButtonbox2Box.current,
        opacity: 0,
        zIndex: 0

    })

    let btn3for1 = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });
    btn3for1
      .add({
        targets: headerButtonbox1.current,
        translateY: 80,
        opacity: 0
      })
      .add({
        targets: headerButtonbox1Box.current,
        opacity: 0,
        zIndex: 0

    })
  }

  render() {
    return (
          <section name="topPage" className={classes.topPageSection}>
              <img src="/BackgroundEllipse.svg" alt="background"
              className={classes.homeBackgroundEllipse} />
            <div className="container">
              <div className={classes.homeHeaderPaginateBox}>
                <div className={classes.homeHeaderPaginate1} onClick={jumpTo1}
                ref={paginate1}></div>
                <div className={classes.homeHeaderPaginate2} onClick={jumpTo2}
                ref={paginate2}></div>
                <div className={classes.homeHeaderPaginate3} onClick={jumpTo3}
                ref={paginate3}></div>
              </div>
              <div id="headerImage1box" className={classes.homeHeaderImagesbox} ref={headerImage1box}>
                <img src="/about-man.png" alt="img1" ref={headerImage1}
                className={classes.headerImage1} />
              </div>
              <div id="headerImage2box" className={classes.homeHeaderImagesbox2} ref={headerImage2box}>
                <img src="/Background.png" alt="img2" ref={headerImage2}
                className={classes.headerImage2} />
              </div>
              <div id="headerImage3box" className={classes.homeHeaderImagesbox3} ref={headerImage3box}>
                <img src="/Einweganzug-Karneval.png" alt="img2" ref={headerImage3}
                className={classes.headerImage3} />
              </div>
              <div id="headerTitle1box" className={classes.homeHeaderTitlebox} ref={headerTitle1box}>
                <h1 ref={headerTitle1}>
                  با پیشه یار از خدمات متنوع صنعتی باخبر شوید
                </h1>
              </div>
              <div id="headerTitle2box" className={classes.homeHeaderTitlebox2} ref={headerTitle2box} >
                <h1 ref={headerTitle2}>
                  با پیشه یار از اخبار ما هم خبردار شید
                </h1>
              </div>
              <div id="headerTitle3box" className={classes.homeHeaderTitlebox3} ref={headerTitle3box} >
                <h1 ref={headerTitle3}>
                  با پیشه یار از اخبار ما هم خبردار شید
                </h1>
              </div>
              <div id="headerButtonbox1Box" className={classes.homeHeaderButtonbox} ref={headerButtonbox1Box}>
                <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox1}>
                  <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                  <p className={classes.homeHeaderButtonboxText}>
                    همین حالا از خدمات ما مطلع شوید
                  </p>
                </div>
              </div>
              <div id="headerButtonbox2Box" className={classes.homeHeaderButtonbox2} ref={headerButtonbox2Box}>
                <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox2}>
                  <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                  <p className={classes.homeHeaderButtonboxText}>
                    همین حالا از خدمات ما مطلع شوید
                  </p>
                </div>
              </div>
              <div id="headerButtonbox3Box" className={classes.homeHeaderButtonbox3} ref={headerButtonbox3Box}>
                <div className={classes.homeHeaderButtonboxKeeper} ref={headerButtonbox3}>
                  <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                  <p className={classes.homeHeaderButtonboxText}>
                    همین حالا از خدمات ما مطلع شوید
                  </p>
                </div>
              </div>
          </div>
        </section>
    )
  }
}

export default TopPage