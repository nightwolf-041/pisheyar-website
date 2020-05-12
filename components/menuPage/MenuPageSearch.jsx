// import React, {useEffect, useState, useRef} from 'react';
// // import fetch from 'isomorphic-unfetch'
// import anime from 'animejs'
// import { TimelineLite, CSSPlugin, TweenLite } from "gsap/all";
// import Select from 'react-select';
// import axios from 'axios';
// import classes from './menuPage.module.scss'

// const MenuPageSearch = () => {

//     const searchRow = useRef()
//     const searchInputsbox = useRef()
//     const searchCharkhIcon = useRef()

//     const searchRowMobile = useRef()
//     const searchInputsboxMobile = useRef()
//     const searchCharkhIconMobile = useRef()
//     const charkhIconMobile = useRef()

//     let [toggle, setToggle] = useState(true)
//     let [toggleMobile, setToggleMobile] = useState(true)

//     let [contries, setContries] = useState(null)
//     let [contriesLoading, setContriesLoading] = useState(true)

//     useEffect(() => {

//         axios.get('http://185.94.97.164/api/Account/Provinces').then(res => {
//             // setContries(res.data.provinces)
//             setContriesLoading(false)
//         }).catch(err => {
//             setContriesLoading(true)
//         })

//         // setToggle(!toggle)
        
//         // asdasd
        
//     })


//     const animateToggler = () => {
//         setToggle(!toggle)

//         if(toggle === true) {
//             let rotateIcon = anime.timeline({
//                 duration: 750
//             })
//             rotateIcon.add({
//                 targets: searchCharkhIcon.current,
//                 rotate: 360
//             })
//             .add({
//                 targets: searchInputsbox.current,
//                 width: '80%',
//                 opacity: 1
//             }, 500)
//             .add({
//                 targets: searchCharkhIcon.current,
//                 marginLeft: '-3rem'
//             }, 750)

//             // anime({
//             //     targets: searchRow.current,
//             //     left: 'calc(50% - 14.2rem)',
//             // })
//             TweenLite.to(searchRow, 1, {x: 100, y: 100});
//         } 
//         if(toggle === false) {
//             let rotateIconClose = anime.timeline({
//                 duration: 750,
//                 easing: 'easeInOutElastic(1, 0.5)',
//             })
//             rotateIconClose.add({
//                 targets: searchCharkhIcon.current,
//                 rotate: -360
//             })
//             .add({
//                 targets: searchInputsbox.current,
//                 width: 0,
//                 opacity: 0
//             }, 650)
//             .add({
//                 targets: searchCharkhIcon.current,
//                 marginLeft: 0
//             }, 750)
//             // anime({
//             //     targets: searchRow.current,
//             //     left: 'calc(50% - 15rem)',
//             //     delay: 750
//             // })
            
//         }
       
//     }

//     const animateTogglerMobile = () => {
//         setToggleMobile(!toggleMobile)

//         if(toggleMobile === true) {
//             let rotateIconMobile = anime.timeline({
//                 duration: 750
//             })
//             rotateIconMobile
//             .add({
//                 targets: searchCharkhIconMobile.current,
//                 rotate: 360
//             })
//             .add({
//                 targets: searchInputsboxMobile.current,
//                 height: '5.2rem',
//                 opacity: 1
//             })
//             anime({
//                 targets: searchCharkhIconMobile.current,
//                 width: '3rem',
//                 delay: 650,
//             })
//             anime({
//                 targets: searchRowMobile.current,
//                 top: '1rem',
//                 delay: 750
//             })
            
//         } 
//         if(toggleMobile === false) {
//             let rotateIconCloseMobile = anime.timeline({
//                 duration: 750,
//                 easing: 'easeInOutElastic(1, 0.5)',
//             })
//             rotateIconCloseMobile.add({
//                 targets: searchCharkhIconMobile.current,
//                 rotate: -360,
//             })
//             .add({
//                 targets: searchInputsboxMobile.current,
//                 height: 0,
//                 opacity: 0
//             }, 650)
//             anime({
//                 targets: searchCharkhIconMobile.current,
//                 width: '5rem',
//                 delay: 750
//             })
//             anime({
//                 targets: searchRowMobile.current,
//                 top: '4rem',
//                 delay: 800
//             })
//         }
        
//     }

//     const flavourOptions = [
//         { value: 'blues', label: 'Blues' },
//         { value: 'rock', label: 'Rock' },
//         { value: 'jazz', label: 'Jazz' },
//         { value: 'orchestra', label: 'Orchestra' } 
//     ]

//     const customStyles = {
//         option: (provided, state) => ({
//           ...provided,
//           borderBottom: '1px dotted pink',
//           color: state.isSelected ? '#ffd617' : '#0b1033',
//           backgroundColor: state.isSelected ? '#0b1033' : 'none',
//           padding: 10,
//         }),
//         placeholder: () => ({
//             color: '#cccccc'
//         }),
//         control: () => ({
//             width: '8rem',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignitems: 'center',
//         }),
//         singleValue: (provided, state) => {
//           const opacity = state.isDisabled ? 0.5 : 1;
//           const transition = 'opacity 300ms';
//           const color = '#fff'
      
//           return { ...provided, opacity, transition, color };
//         }
//       }

//     return(
//         <>
//             <div className={classes.menuPageSearchRow} ref={searchRow}>
//                 <div className={classes.menuPageSearchInputsbox} ref={searchInputsbox}>
//                     <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeft} />
//                     {/* <Select
//                     placeholder="رنگ ها"
//                         className={classes.menuPageSearchInputRight}
//                         // classNamePrefix="رنگ ها"
//                         defaultValue={colourOptions[0]}
//                         // isDisabled={isDisabled}
//                         // isLoading={isLoading}
//                         // isClearable={isClearable}
//                         isRtl={true}
//                         // isSearchable={isSearchable}
//                         name="color"
//                         styles={customStyles}
//                         options={colourOptions}
//                     /> */}
//                      <Select
//                         inputId="test123"
//                         instanceId="test456"
//                         placeholder="استان"
//                         className={classes.menuPageSearchInputRight}
//                         // defaultValue={contries[2]}
//                         label="Single select"
//                         isRtl={true}
//                         isLoading={contriesLoading}
//                         styles={customStyles}
//                         options={flavourOptions}
//                         // theme={theme => ({
//                         // ...theme,
//                         // borderRadius: 0,
//                         // colors: {
//                         //     ...theme.colors,
//                         //     primary25: 'hotpink',
//                         //     primary: 'black',
//                         // },
//                         // })}
//                     />
//                     {/* <input type="search" className={classes.menuPageSearchInputRight} /> */}
//                 </div>
//                 <div className={classes.menuPageSearchLogobox}>
//                     <img src="/GearIcon.svg" alt="" ref={searchCharkhIcon}
//                     className={classes.menuPageSearchCharkhIcon} onClick={animateToggler} />
//                 </div>
//             </div>

//             <div className={classes.menuPageSearchRowMobile} ref={searchRowMobile}>
//                 <div className={classes.menuPageSearchInputsboxMobile} ref={searchInputsboxMobile}>
//                     <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeftMobile} />
//                     <input type="search" className={classes.menuPageSearchInputRightMobile} />
//                 </div>
//                 <div className={classes.menuPageSearchLogoboxMobile}>
//                     <img src="/GearIcon.svg" alt="" ref={searchCharkhIconMobile}
//                     className={classes.menuPageSearchCharkhIconMobile}
//                     onClick={animateTogglerMobile} />
//                 </div>
//             </div>
            
//         </>
//     )
// }

import React, {Component, useEffect, createRef} from 'react';
// import fetch from 'isomorphic-unfetch'
import anime from 'animejs'
import { TimelineLite, TimelineMax, CSSPlugin, TweenLite, Elastic, Power1, Bounce } from "gsap";
import Select from 'react-select';
import axios from 'axios';
import classes from './menuPage.module.scss'

class MenuPageSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggleMobile: false,
            contries: [],
            contriesLoading: true,
            countryValue: '',

            cityDisabled: true
        }

		this.searchRow = null;
        this.searchRowTween = null;
        
        this.searchInputsbox = null;
        this.searchCharkhIcon = null;
        this.desctopMainTween = new TimelineLite({paused: false});


        this.searchRowMobile = null
        this.searchRowMobileTween = null;

        this.searchInputsboxMobile = null
        this.searchCharkhIconMobile = null
        this.mobileMainTween = new TimelineMax();
    }


    componentDidMount(){

        let toggle = this.state.toggle
        this.setState({toggle: !toggle})
        let toggleMobile = this.state.toggleMobile
        this.setState({toggleMobile: !toggleMobile})

        axios.get('http://185.94.97.164/api/Account/Provinces').then(res => {
            console.log(res.data.provinces);
            this.setState({
                contries: res.data.provinces,
                contriesLoading: false
            })
        }).catch(err => {
            this.setState({
                contries: [],
                contriesLoading: true
            })
        })
    }

    animateToggler = () => {
        let toggle = this.state.toggle
        this.setState({toggle: !toggle})

        if(toggle === true) {
            this.desctopMainTween
            .to(this.searchCharkhIcon, 0.3, {rotation: 360, ease: Power1.linear})
            .to(this.searchInputsbox, 0.5, {width: '80%', autoAlpha: 1, ease: Bounce.easeOut})

            this.searchRowTween = TweenLite.to(this.searchRow, 0.8, {backgroundColor: '#0b1033', boxShadow: '0 0 12px 8px rgba(11, 16, 51, 0.55)', ease: Power1.easeInOut});
        } 
        if(toggle === false) {
            this.desctopMainTween
            .to(this.searchCharkhIcon, 0.4, {rotation: -360, ease: Power1.linear})
            .to(this.searchInputsbox, 0.3, {width: 0, autoAlpha: 0, ease: Power1.linear})
         
            this.searchRowTween = TweenLite.to(this.searchRow, 0.7, {backgroundColor: 'transparent', boxShadow: 'none', ease: Power1.linear, delay: 0.2});
        }
    }

    animateTogglerMobile = () => {
        let toggleMobile = this.state.toggleMobile
        this.setState({toggleMobile: !toggleMobile})

        if(toggleMobile === true) {
            this.mobileMainTween
            .to(this.searchCharkhIconMobile, 0.4, {rotation: 360, ease: Power1.linear})
            .to(this.searchCharkhIconMobile,0.1, {width: '3rem', ease: Power1.easeInOut})
            .to(this.searchInputsboxMobile,0.5, {height: '8.3rem', autoAlpha: 1, ease: Elastic.easeInOut.config( 1, 0.5)})

            this.searchRowMobileTween = TweenLite.to(this.searchRowMobile, 0.2, {top: '1rem', delay: 0.4, ease: Power1.linear});
            
        } 
        if(toggleMobile === false) {
        this.mobileMainTween
        .to(this.searchCharkhIconMobile, 0.4, {rotation: -360, ease: Power1.linear})
        .to(this.searchInputsboxMobile,0.4, {height: 0, autoAlpha: 0,ease: Power1.easeInOut})
        .to(this.searchCharkhIconMobile,0.5, {width: '4rem', ease: Elastic.easeOut.config( 1, 0.2)})

        this.searchRowMobileTween = TweenLite.to(this.searchRowMobile, 0.5, {top: '4rem', delay: 0.4});
        }
    }

    changer = (val) => {
        this.setState({countryValue: val.value})
        if(val.value.length > 0) {
            this.setState({cityDisabled: false})
        }
    }

      render(){

        const flavourOptions = [
            { value: 'blues', label: 'Blues' },
            { value: 'rock', label: 'Rock' },
            { value: 'jazz', label: 'Jazz' },
            { value: 'orchestra', label: 'Orchestra' } ,
            { value: 'orchestra', label: 'Orchestra' } ,
            { value: 'orchestra', label: 'Orchestra' } ,
        ]
    
        const customStyles = {
            option: (provided, state) => ({
              ...provided,
              borderBottom: '1px dotted pink',
              color: state.isSelected ? '#ffd617' : '#0b1033',
              backgroundColor: state.isSelected ? '#0b1033' : 'none',
              padding: 10,
            }),
            placeholder: () => ({
                color: '#cccccc'
            }),
            control: () => ({
                height: '2rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignitems: 'center',
            }),
            singleValue: (provided, state) => {
              const opacity = state.isDisabled ? 0.5 : 1;
              const transition = 'opacity 300ms';
              const color = '#fff'
          
              return { ...provided, opacity, transition, color };
            }
          }

        return(
            <>
                <div className={classes.menuPageSearchRow} ref={div => this.searchRow = div}>
                    <div className={classes.menuPageSearchInputsbox} ref={div => this.searchInputsbox = div}>
                        <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputBottom} />
                         <div className={classes.menuPageSearchInputTopbox}>
                            <Select
                                inputId="menuPageSearchInputTopContry11"
                                instanceId="menuPageSearchInputTopContry12"
                                placeholder="استان"
                                className={classes.menuPageSearchInputTopContry}
                                // defaultValue={contries[2]}
                                label="Single select"
                                isRtl={true}
                                isLoading={this.state.contriesLoading}
                                styles={customStyles}
                                options={this.state.contries}
                                onChange={val => this.changer(val)}
                            />
                            <Select
                                inputId="menuPageSearchInputTopCity11"
                                instanceId="menuPageSearchInputTopCity12"
                                placeholder="شهر"
                                className={classes.menuPageSearchInputTopCity}
                                // defaultValue={contries[2]}
                                label="Single select"
                                isRtl={true}
                                isLoading={this.state.contriesLoading}
                                isDisabled={this.state.cityDisabled}
                                styles={customStyles}
                                options={flavourOptions}
                            />
                        </div>
                    </div>
                    <div className={classes.menuPageSearchLogobox}>
                        <img src="/GearIcon.svg" alt="" ref={img => this.searchCharkhIcon = img}
                        className={classes.menuPageSearchCharkhIcon} onClick={this.animateToggler} />
                    </div>
                </div>
    
                <div className={classes.menuPageSearchRowMobile} ref={div => this.searchRowMobile = div}>
                    <div className={classes.menuPageSearchInputsboxMobile} ref={div => this.searchInputsboxMobile = div}>
                        <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputBottomMobile} />
                        <Select
                            inputId="menuPageSearchInputTopCityMobile11"
                            instanceId="menuPageSearchInputTopCityMobile12"
                            placeholder="شهر"
                            className={classes.menuPageSearchInputTopCityMobile}
                            // defaultValue={contries[2]}
                            label="Single select"
                            isRtl={true}
                            isLoading={this.state.contriesLoading}
                            isDisabled={this.state.cityDisabled}
                            styles={customStyles}
                            options={flavourOptions}
                        />
                        <Select
                            inputId="menuPageSearchInputTopContryMobile11"
                            instanceId="menuPageSearchInputTopContryMobile12"
                            placeholder="استان"
                            className={classes.menuPageSearchInputTopContryMobile}
                            // defaultValue={contries[2]}
                            label="Single select"
                            isRtl={true}
                            isLoading={this.state.contriesLoading}
                            styles={customStyles}
                            options={flavourOptions}
                            // onChange={val => this.changer(val)}
                        />
                    </div>
                    <div className={classes.menuPageSearchLogoboxMobile}>
                        <img src="/GearIcon.svg" alt="" ref={img => this.searchCharkhIconMobile = img}
                        className={classes.menuPageSearchCharkhIconMobile}
                        onClick={this.animateTogglerMobile} />
                    </div>
                </div>
            </>
        )
      }
}

  
export default MenuPageSearch