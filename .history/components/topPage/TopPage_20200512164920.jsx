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

    this.headerImage1box = null
    this.headerImage1boxTween = null

    this.headerImage2box = null
    this.headerImage2boxTween = null

    this.headerImage3box = null
    this.headerImage3boxTween = null


    this.headerTitle1box = null
    this.headerTitle1boxTween = null

    this.headerTitle2box = null
    this.headerTitle2boxTween = null

    this.headerTitle3box = null
    this.headerTitle3boxTween = null


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

    this.headerImage2boxTween = new TimelineLite()
    .to(this.headerImage2box, 0.5, {autoAlpha: 0, top: '19rem'})
    .to(this.headerImage2box, 0.5, {top: '14rem', display: 'none'})

    this.headerTitle2boxTween = new TimelineLite()
    .to(this.headerTitle2box, 0.5, {autoAlpha: 0, y: -30})
    .to(this.headerTitle2box, 0.5, {y: 30, display: 'none'})

    this.headerButtonbox2BoxTween = new TimelineLite()
    .to(this.headerButtonbox2Box, 0.5, {autoAlpha: 0, y: 30})
    .to(this.headerButtonbox2Box, 0.5, {y: -30, display: 'none'})

    let myTimer = setInterval(() => {
      this.setState({imgKey: this.state.imgKey += 1})

        if(this.state.imgKey === 1){
          // pagination 
          this.paginate2Tween = TweenLite.to(this.paginate2, 0.3, {backgroundColor: 'rgba(11, 16, 51, 1)', width: 18, height: 18})
          this.paginate1Tween = TweenLite.to(this.paginate1, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})
          this.paginate3Tween = TweenLite.to(this.paginate3, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})

          // image 
          this.headerImage2boxTween = TweenLite
          .to(this.headerImage2box, 0.5, {autoAlpha: 1, top: '17rem', display: 'block', delay: 0.5})

          this.headerImage1boxTween = new TimelineLite()
          .to(this.headerImage1box, 0.5, {autoAlpha: 0, top: '19rem'})
          .to(this.headerImage1box, 0.5, {top: '14rem', display: 'none'})
          this.headerImage3boxTween = new TimelineLite()
          .to(this.headerImage3box, 0.5, {autoAlpha: 0, top: '19rem'})
          .to(this.headerImage3box, 0.5, {top: '14rem', display: 'none'})

          // title 
          this.headerTitle2boxTween = TweenLite
          .to(this.headerTitle2box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

          this.headerTitle1boxTween = new TimelineLite()
          .to(this.headerTitle1box, 0.5, {autoAlpha: 0, y: -30})
          .to(this.headerTitle1box, 0.5, {y: 30, display: 'none'})
          this.headerTitle3boxTween = new TimelineLite()
          .to(this.headerTitle3box, 0.5, {autoAlpha: 0, y: -30})
          .to(this.headerTitle3box, 0.5, {y: 30, display: 'none'})

          // button 
          this.headerButtonbox2BoxTween = TweenLite
          .to(this.headerButtonbox2Box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

          this.headerButtonbox1BoxTween = new TimelineLite()
          .to(this.headerButtonbox1Box, 0.5, {autoAlpha: 0, y: 30})
          .to(this.headerButtonbox1Box, 0.5, {y: -30, display: 'none'})
          this.headerButtonbox3BoxTween = new TimelineLite()
          .to(this.headerButtonbox3Box, 0.5, {autoAlpha: 0, y: 30})
          .to(this.headerButtonbox3Box, 0.5, {y: -30, display: 'none'})
        }

        if(this.state.imgKey === 2){
          // pagination 
          this.paginate3Tween = TweenLite.to(this.paginate3, 0.3, {backgroundColor: 'rgba(11, 16, 51, 1)', width: 18, height: 18})
          this.paginate1Tween = TweenLite.to(this.paginate1, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})
          this.paginate2Tween = TweenLite.to(this.paginate2, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})

          // image 
          this.headerImage3boxTween = TweenLite
          .to(this.headerImage3box, 0.5, {autoAlpha: 1, top: '17rem', display: 'block', delay: 0.5})

          this.headerImage1boxTween = new TimelineLite()
          .to(this.headerImage1box, 0.5, {autoAlpha: 0, top: '19rem'})
          .to(this.headerImage1box, 0.5, {top: '14rem', display: 'none'})
          this.headerImage2boxTween = new TimelineLite()
          .to(this.headerImage2box, 0.5, {autoAlpha: 0, top: '19rem'})
          .to(this.headerImage2box, 0.5, {top: '14rem', display: 'none'})

          // title 
          this.headerTitle3boxTween = TweenLite
          .to(this.headerTitle3box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

          this.headerTitle1boxTween = new TimelineLite()
          .to(this.headerTitle1box, 0.5, {autoAlpha: 0, y: -30})
          .to(this.headerTitle1box, 0.5, {y: 30, display: 'none'})
          this.headerTitle2boxTween = new TimelineLite()
          .to(this.headerTitle2box, 0.5, {autoAlpha: 0, y: -30})
          .to(this.headerTitle2box, 0.5, {y: 30, display: 'none'})

          // button 
          this.headerButtonbox3BoxTween = TweenLite
          .to(this.headerButtonbox3Box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

          this.headerButtonbox1BoxTween = new TimelineLite()
          .to(this.headerButtonbox1Box, 0.5, {autoAlpha: 0, y: 30})
          .to(this.headerButtonbox1Box, 0.5, {y: -30, display: 'none'})
          this.headerButtonbox2BoxTween = new TimelineLite()
          .to(this.headerButtonbox2Box, 0.5, {autoAlpha: 0, y: 30})
          .to(this.headerButtonbox2Box, 0.5, {y: -30, display: 'none'})
        }

        if(this.state.imgKey === 3){
          this.setState({imgKey: 0})

          // pagination 
          this.paginate1Tween = TweenLite.to(this.paginate1, 0.3, {backgroundColor: 'rgba(11, 16, 51, 1)', width: 18, height: 18})
          this.paginate2Tween = TweenLite.to(this.paginate2, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})
          this.paginate3Tween = TweenLite.to(this.paginate3, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})

          // image 
          this.headerImage1boxTween = TweenLite
          .to(this.headerImage1box, 0.5, {autoAlpha: 1, top: '17rem', display: 'block', delay: 0.5})

          this.headerImage3boxTween = new TimelineLite()
          .to(this.headerImage3box, 0.5, {autoAlpha: 0, top: '19rem'})
          .to(this.headerImage3box, 0.5, {top: '14rem', display: 'none'})
          this.headerImage2boxTween = new TimelineLite()
          .to(this.headerImage2box, 0.5, {autoAlpha: 0, top: '19rem'})
          .to(this.headerImage2box, 0.5, {top: '14rem', display: 'none'})

          // title 
          this.headerTitle1boxTween = TweenLite
          .to(this.headerTitle1box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

          this.headerTitle3boxTween = new TimelineLite()
          .to(this.headerTitle3box, 0.5, {autoAlpha: 0, y: -30})
          .to(this.headerTitle3box, 0.5, {y: 30, display: 'none'})
          this.headerTitle2boxTween = new TimelineLite()
          .to(this.headerTitle2box, 0.5, {autoAlpha: 0, y: -30})
          .to(this.headerTitle2box, 0.5, {y: 30, display: 'none'})

          // button 
          this.headerButtonbox1BoxTween = TweenLite
          .to(this.headerButtonbox1Box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

          this.headerButtonbox2BoxTween = new TimelineLite()
          .to(this.headerButtonbox2Box, 0.5, {autoAlpha: 0, y: 30})
          .to(this.headerButtonbox2Box, 0.5, {y: -30, display: 'none'})
          this.headerButtonbox3BoxTween = new TimelineLite()
          .to(this.headerButtonbox3Box, 0.5, {autoAlpha: 0, y: 30})
          .to(this.headerButtonbox3Box, 0.5, {y: -30, display: 'none'})
        }
      
    }, 8000); 
  }


  jumpTo1 = () => {
    this.setState({imgKey: 0})

      // pagination 
      this.paginate1Tween = TweenLite.to(this.paginate1, 0.3, {backgroundColor: 'rgba(11, 16, 51, 1)', width: 18, height: 18})
      this.paginate2Tween = TweenLite.to(this.paginate2, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})
      this.paginate3Tween = TweenLite.to(this.paginate3, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})

      // image 
      this.headerImage1boxTween = TweenLite
      .to(this.headerImage1box, 0.5, {autoAlpha: 1, top: '17rem', display: 'block', delay: 0.5})

      this.headerImage3boxTween = new TimelineLite()
      .to(this.headerImage3box, 0.5, {autoAlpha: 0, top: '19rem'})
      .to(this.headerImage3box, 0.5, {top: '14rem', display: 'none'})
      this.headerImage2boxTween = new TimelineLite()
      .to(this.headerImage2box, 0.5, {autoAlpha: 0, top: '19rem'})
      .to(this.headerImage2box, 0.5, {top: '14rem', display: 'none'})

      // title 
      this.headerTitle1boxTween = TweenLite
      .to(this.headerTitle1box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

      this.headerTitle3boxTween = new TimelineLite()
      .to(this.headerTitle3box, 0.5, {autoAlpha: 0, y: -30})
      .to(this.headerTitle3box, 0.5, {y: 30, display: 'none'})
      this.headerTitle2boxTween = new TimelineLite()
      .to(this.headerTitle2box, 0.5, {autoAlpha: 0, y: -30})
      .to(this.headerTitle2box, 0.5, {y: 30, display: 'none'})

      // button 
      this.headerButtonbox1BoxTween = TweenLite
      .to(this.headerButtonbox1Box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

      this.headerButtonbox2BoxTween = new TimelineLite()
      .to(this.headerButtonbox2Box, 0.5, {autoAlpha: 0, y: 30})
      .to(this.headerButtonbox2Box, 0.5, {y: -30, display: 'none'})
      this.headerButtonbox3BoxTween = new TimelineLite()
      .to(this.headerButtonbox3Box, 0.5, {autoAlpha: 0, y: 30})
      .to(this.headerButtonbox3Box, 0.5, {y: -30, display: 'none'})
  }


  jumpTo2 = () => {
    this.setState({imgKey: 1})

    // pagination 
    this.paginate3Tween = TweenLite.to(this.paginate3, 0.3, {backgroundColor: 'rgba(11, 16, 51, 1)', width: 18, height: 18})
    this.paginate1Tween = TweenLite.to(this.paginate1, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})
    this.paginate2Tween = TweenLite.to(this.paginate2, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})

    // image 
    this.headerImage3boxTween = TweenLite
    .to(this.headerImage3box, 0.5, {autoAlpha: 1, top: '17rem', display: 'block', delay: 0.5})

    this.headerImage1boxTween = new TimelineLite()
    .to(this.headerImage1box, 0.5, {autoAlpha: 0, top: '19rem'})
    .to(this.headerImage1box, 0.5, {top: '14rem', display: 'none'})
    this.headerImage2boxTween = new TimelineLite()
    .to(this.headerImage2box, 0.5, {autoAlpha: 0, top: '19rem'})
    .to(this.headerImage2box, 0.5, {top: '14rem', display: 'none'})

    // title 
    this.headerTitle3boxTween = TweenLite
    .to(this.headerTitle3box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

    this.headerTitle1boxTween = new TimelineLite()
    .to(this.headerTitle1box, 0.5, {autoAlpha: 0, y: -30})
    .to(this.headerTitle1box, 0.5, {y: 30, display: 'none'})
    this.headerTitle2boxTween = new TimelineLite()
    .to(this.headerTitle2box, 0.5, {autoAlpha: 0, y: -30})
    .to(this.headerTitle2box, 0.5, {y: 30, display: 'none'})

    // button 
    this.headerButtonbox3BoxTween = TweenLite
    .to(this.headerButtonbox3Box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

    this.headerButtonbox1BoxTween = new TimelineLite()
    .to(this.headerButtonbox1Box, 0.5, {autoAlpha: 0, y: 30})
    .to(this.headerButtonbox1Box, 0.5, {y: -30, display: 'none'})
    this.headerButtonbox2BoxTween = new TimelineLite()
    .to(this.headerButtonbox2Box, 0.5, {autoAlpha: 0, y: 30})
    .to(this.headerButtonbox2Box, 0.5, {y: -30, display: 'none'})
  }


  jumpTo3 = () => {
    this.setState({imgKey: 2})

     // pagination 
     this.paginate2Tween = TweenLite.to(this.paginate2, 0.3, {backgroundColor: 'rgba(11, 16, 51, 1)', width: 18, height: 18})
     this.paginate1Tween = TweenLite.to(this.paginate1, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})
     this.paginate3Tween = TweenLite.to(this.paginate3, 0.3, {backgroundColor: 'rgba(11, 16, 51, 0.74)', width: 10, height: 10})

     // image 
     this.headerImage2boxTween = TweenLite
     .to(this.headerImage2box, 0.5, {autoAlpha: 1, top: '17rem', display: 'block', delay: 0.5})

     this.headerImage1boxTween = new TimelineLite()
     .to(this.headerImage1box, 0.5, {autoAlpha: 0, top: '19rem'})
     .to(this.headerImage1box, 0.5, {top: '14rem', display: 'none'})
     this.headerImage3boxTween = new TimelineLite()
     .to(this.headerImage3box, 0.5, {autoAlpha: 0, top: '19rem'})
     .to(this.headerImage3box, 0.5, {top: '14rem', display: 'none'})

     // title 
     this.headerTitle2boxTween = TweenLite
     .to(this.headerTitle2box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

     this.headerTitle1boxTween = new TimelineLite()
     .to(this.headerTitle1box, 0.5, {autoAlpha: 0, y: -30})
     .to(this.headerTitle1box, 0.5, {y: 30, display: 'none'})
     this.headerTitle3boxTween = new TimelineLite()
     .to(this.headerTitle3box, 0.5, {autoAlpha: 0, y: -30})
     .to(this.headerTitle3box, 0.5, {y: 30, display: 'none'})

     // button 
     this.headerButtonbox2BoxTween = TweenLite
     .to(this.headerButtonbox2Box, 0.5, {autoAlpha: 1, y: 0, display: 'block', delay: 0.5})

     this.headerButtonbox1BoxTween = new TimelineLite()
     .to(this.headerButtonbox1Box, 0.5, {autoAlpha: 0, y: 30})
     .to(this.headerButtonbox1Box, 0.5, {y: -30, display: 'none'})
     this.headerButtonbox3BoxTween = new TimelineLite()
     .to(this.headerButtonbox3Box, 0.5, {autoAlpha: 0, y: 30})
     .to(this.headerButtonbox3Box, 0.5, {y: -30, display: 'none'})
  }


  render() {
    return (
          <section name="topPage" className={classes.topPageSection}>
              <img src="/BackgroundEllipse.svg" alt="background"
              className={classes.homeBackgroundEllipse} />
            <div className="container">
              <div className={classes.homeHeaderPaginateBox}>
                <div className={classes.homeHeaderPaginate1} onClick={this.jumpTo1}
                ref={div => this.paginate1 = div}></div>
                <div className={classes.homeHeaderPaginate2} onClick={this.jumpTo2}
                ref={div => this.paginate2 = div}></div>
                <div className={classes.homeHeaderPaginate3} onClick={this.jumpTo3}
                ref={div => this.paginate3 = div}></div>
              </div>
              <div id="headerImage1box" className={classes.homeHeaderImagesbox}
              ref={div => this.headerImage1box = div}>
                <img src="/about-man.png" alt="img1"
                className={classes.headerImage1} />
              </div>
              <div id="headerImage2box" className={classes.homeHeaderImagesbox2}
              ref={div => this.headerImage2box = div}>
                <img src="/Background.png" alt="img2"
                className={classes.headerImage2} />
              </div>
              <div id="headerImage3box" className={classes.homeHeaderImagesbox3}
              ref={div => this.headerImage3box = div}>
                <img src="/Einweganzug-Karneval.png" alt="img2"
                className={classes.headerImage3} />
              </div>
              <div id="headerTitle1box" className={classes.homeHeaderTitlebox}
              ref={div => this.headerTitle1box = div}>
                <h1>
                  با پیشه یار از خدمات متنوع صنعتی باخبر شوید
                </h1>
              </div>
              <div id="headerTitle2box" className={classes.homeHeaderTitlebox2}
              ref={div => this.headerTitle2box = div} >
                <h1>
                  با پیشه یار از اخبار ما هم خبردار شید
                </h1>
              </div>
              <div id="headerTitle3box" className={classes.homeHeaderTitlebox3}
              ref={div => this.headerTitle3box = div} >
                <h1>
                  با پیشه یار از اخبار ما هم خبردار شید
                </h1>
              </div>
              <div id="headerButtonbox1Box" className={classes.homeHeaderButtonbox}
              ref={div => this.headerButtonbox1Box = div}>
                <div className={classes.homeHeaderButtonboxKeeper}>
                  <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                  <p className={classes.homeHeaderButtonboxText}>
                    همین حالا از خدمات ما مطلع شوید
                  </p>
                </div>
              </div>
              <div id="headerButtonbox2Box" className={classes.homeHeaderButtonbox2}
              ref={div => this.headerButtonbox2Box = div}>
                <div className={classes.homeHeaderButtonboxKeeper}>
                  <button className={classes.homeHeaderButtonboxBtn}>مشاهده</button>
                  <p className={classes.homeHeaderButtonboxText}>
                    همین حالا از خدمات ما مطلع شوید
                  </p>
                </div>
              </div>
              <div id="headerButtonbox3Box" className={classes.homeHeaderButtonbox3}
              ref={div => this.headerButtonbox3Box = div}>
                <div className={classes.homeHeaderButtonboxKeeper}>
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