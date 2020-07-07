import React, {useRef} from 'react'
import axios from 'axios'
import Swiper from 'react-id-swiper';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

import classes from './servicesPage.module.scss'

function TopSlider(props) {

    const ref = useRef(null)

    const [swiper, updateSwiper] = React.useState(null);
    const [categories, setCategories] = React.useState([]);
    const [showActive, setShowActive] = React.useState(false);
    const [rebuild, setRebuild] = React.useState(true);

    React.useEffect(() => {
        axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=c265fd02-0194-4d38-83e8-a93bc3698fcc`)
        .then(res => {
            console.log(res.data.primaryCategories);
            setCategories(res.data.primaryCategories)
        })
    }, [])

    const goNext = () => {
        console.log('prev')
        if (ref.current !== null && ref.current.swiper !== null) {
          ref.current.swiper.slideNext();
        }
      };
    
    const goPrev = () => {
        console.log('next')
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };

    const activeIconGenerator = ctg => {
        const activeIconDoc = {...ctg.activeIconDocument}
        return activeIconDoc.source
    }

    const inActiveIconGenerator = ctg => {
        const inActiveIconDoc = {...ctg.inactiveIconDocument}
        return inActiveIconDoc.source
    }

    setTimeout(() => {
        setRebuild(false)
    }, 1000);

    const params = {
        containerModifierClass: 'services-swiper-container',
        loop: false,
        freeMode: false,
        grabCursor: false,
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 0,
        rebuildOnUpdate: rebuild
    }

    return (
        <>
         {categories !== null && categories !== [] && categories.length > 5 ?
            <div className={classes.servicesPageSliderTopContainer}>
                <div className={classes.servicesPageSliderTop}>
                    <Swiper ref={ref} {...params}>
                        {
                        categories !== null && categories !== [] ?
                            categories.map((ctg, index) => (
                                <div className={
                                    ctg.categoryGuid !== props.bottomSliderGuid ?
                                    classes.servicesPageSliderTopItem :
                                    classes.servicesPageSliderTopItemActive
                                }
                                key={index}
                                onMouseOver={() => setShowActive(ctg.categoryGuid)}
                                onMouseLeave={() => setShowActive(false)}
                                onClick={() => props.sendGuidToBottomSlider(ctg.categoryGuid)}>
                                    <h6 className={
                                        ctg.categoryGuid !== props.bottomSliderGuid ?
                                        classes.servicesPageSliderTopItemTitle :
                                        classes.servicesPageSliderTopItemTitleActive
                                        }>
                                        {ctg.title}
                                    </h6>
                                    {showActive !== ctg.categoryGuid && ctg.categoryGuid !== props.bottomSliderGuid ?
                                        <img src={activeIconGenerator(ctg)} alt="" className={[classes.servicesPageSliderTopInAndActiveIconActive, classes.servicesPageSliderTopInAndActiveIcon].join(' ')} /> :

                                        <img src={inActiveIconGenerator(ctg)} alt="" className={[classes.servicesPageSliderTopInAndActiveIconInActive, classes.servicesPageSliderTopInAndActiveIcon].join(' ')} />
                                    }
                                </div>
                            ))
                            :null
                        }
                    </Swiper>
                </div>
                <button className={classes.servicesPageSliderTopPrev}
                onClick={goPrev}>
                    <FontAwesomeIcon icon={faAngleLeft}
                    className={classes.servicesPageSliderTopPrevIcon} />
                    <FontAwesomeIcon icon={faAngleLeft}
                    className={classes.servicesPageSliderTopPrevIcon2} />
                </button>
                <button className={classes.servicesPageSliderTopNext}
                onClick={goNext}>
                    <FontAwesomeIcon icon={faAngleRight}
                    className={classes.servicesPageSliderTopNextIcon} />
                    <FontAwesomeIcon icon={faAngleRight}
                    className={classes.servicesPageSliderTopNextIcon2} />
                </button>
            </div>
            :
            <div className={classes.servicesPageLessItemsBox}>
                {categories !== null && categories !== [] ?
                    categories.map((ctg, index) => (
                        <div className={
                            ctg.categoryGuid !== props.bottomSliderGuid ?
                            classes.servicesPageSliderTopItemLess :
                            classes.servicesPageSliderTopItemLessActive
                        }
                        key={index}
                        onClick={() => props.sendGuidToBottomSlider(ctg.categoryGuid)}>
                            <h6 className={
                                ctg.categoryGuid !== props.bottomSliderGuid ?
                                classes.servicesPageSliderTopItemTitle :
                                classes.servicesPageSliderTopItemTitleActive
                                }>
                                {ctg.title}
                            </h6>
                            {showActive !== ctg.categoryGuid && ctg.categoryGuid !== props.bottomSliderGuid ?
                                <img src={activeIconGenerator(ctg)} alt="" className={[classes.servicesPageSliderTopInAndActiveIconActive, classes.servicesPageSliderTopInAndActiveIcon].join(' ')} /> :

                                <img src={inActiveIconGenerator(ctg)} alt="" className={[classes.servicesPageSliderTopInAndActiveIconInActive, classes.servicesPageSliderTopInAndActiveIcon].join(' ')} />
                            }
                        </div>
                    ))
                    :null
                }
            </div>
        }
        </>
    )
}

export default TopSlider
// import React from 'react'
// import axios from 'axios'
// import Swiper from 'react-id-swiper';
// import Slider from "react-slick";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleLeft, faAngleRight, faToolbox } from "@fortawesome/free-solid-svg-icons";

// import classes from './servicesPage.module.scss'

// class TopSlider extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             categories: []
//         }
//     }

//       goNext = () => {
//         if (this.swiper !== null) {
//         //   this.swiper.slideNext();
//         }
//       };
//       goPrev = () => {
//         if (this.swiper !== null) {
//         //   this.swiper.slidePrev();
//         }
//       };
//     // const [swiper, updateSwiper] = React.useState(null);
//     // const [categories, setCategories] = React.useState([]);

//     componentDidMount() {
//         // setTimeout(() => this.swiper.update(), 500);
//         axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=c265fd02-0194-4d38-83e8-a93bc3698fcc`)
//         .then(res => {
//             console.log(res.data.primaryCategories);
//             // setCategories(res.data.primaryCategories)
//             this.setState({
//                 categories: res.data.primaryCategories
//             })
//         })
//     }

//     // React.useEffect(() => {
//     //     setTimeout(() => swiper.update());
//     //     axios.get(`http://185.94.97.164/api/Category/GetPrimaries?guid=c265fd02-0194-4d38-83e8-a93bc3698fcc`)
//     //     .then(res => {
//     //         console.log(res.data.primaryCategories);
//     //         setCategories(res.data.primaryCategories)
//     //     })
//     // }, [])


//     render() {

//           const params = {
//             containerModifierClass: 'services-swiper-container',
//             loop: false,
//             freeMode: false,
//             grabCursor: false,
//           //   lazy: false,
//             centeredSlides: false,
//             slidesPerView: 'auto',
//             spaceBetween: 0,
//             rebuildOnUpdate: true
//           //   breakpoints: {
//           //     576: {
//           //         centeredSlides: true,
//           //         slidesPerView: 'auto',
//           //         spaceBetween: 0,
//           //     },
//           //     300: {
//           //         centeredSlides: true,
//           //         slidesPerView: 'auto',
//           //         spaceBetween: 0,
//           //     },
//           // }
//           }
        
//     return (
//         <>
//          {/* {categories !== null && categories !== [] && categories.length > 5 ? */}
//             <div className={classes.servicesPageSliderTopContainer}>
//                 <div className={classes.servicesPageSliderTop}>
//                     <Swiper {...params} ref={(node) => { if (node) this.swiper = node.swiper }}>
//                         {
//                         // categories !== null && categories !== [] ?
//                             this.state.categories.map((ctg, index) => (
//                                 <div className={
//                                     ctg.categoryGuid !== this.props.bottomSliderGuid ?
//                                     classes.servicesPageSliderTopItem :
//                                     classes.servicesPageSliderTopItemActive
//                                 }
//                                 key={index}
//                                 onClick={() => this.props.sendGuidToBottomSlider(ctg.categoryGuid)}>
//                                     <h6 className={
//                                         ctg.categoryGuid !== this.props.bottomSliderGuid ?
//                                         classes.servicesPageSliderTopItemTitle :
//                                         classes.servicesPageSliderTopItemTitleActive
//                                         }>
//                                         {ctg.title}
//                                     </h6>
//                                     <FontAwesomeIcon icon={faToolbox}
//                                     className={classes.servicesPageSliderTopItemIcon} />
//                                 </div>
//                             ))
//                             // :null
//                         }
//                     </Swiper>
//                 </div>
//                 <button className={classes.servicesPageSliderTopPrev}
//                 onClick={this.goPrev}>
//                     <FontAwesomeIcon icon={faAngleLeft}
//                     className={classes.servicesPageSliderTopPrevIcon} />
//                     <FontAwesomeIcon icon={faAngleLeft}
//                     className={classes.servicesPageSliderTopPrevIcon2} />
//                 </button>
//                 <button className={classes.servicesPageSliderTopNext}
//                 onClick={this.goNext}>
//                     <FontAwesomeIcon icon={faAngleRight}
//                     className={classes.servicesPageSliderTopNextIcon} />
//                     <FontAwesomeIcon icon={faAngleRight}
//                     className={classes.servicesPageSliderTopNextIcon2} />
//                 </button>
//             </div>
//             {/* :
//             <div className={classes.servicesPageLessItemsBox}>
//                 {categories !== null && categories !== [] ?
//                     categories.map((ctg, index) => (
//                         <div className={classes.servicesPageSliderTopItemLess}
//                         key={index}
//                         onClick={() => props.sendGuidToBottomSlider(ctg.categoryGuid)}>
//                             <h6 className={classes.servicesPageSliderTopItemTitle}>
//                                 {ctg.title}
//                             </h6>
//                             <FontAwesomeIcon icon={faToolbox}
//                             className={classes.servicesPageSliderTopItemIcon} />
//                         </div>
//                     ))
//                     :null
//                 }
//             </div>
//         } */}
//         </>
//     )
//     }
// }

// export default TopSlider
