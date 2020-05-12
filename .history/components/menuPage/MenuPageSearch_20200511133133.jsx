import React, {useEffect, useState, useRef} from 'react';
import anime from 'animejs'
import Select from 'react-select';
import classes from './menuPage.module.scss'

const MenuPageSearch = () => {

    const searchRow = useRef()
    const searchInputsbox = useRef()
    const searchCharkhIcon = useRef()

    const searchRowMobile = useRef()
    const searchInputsboxMobile = useRef()
    const searchCharkhIconMobile = useRef()
    const charkhIconMobile = useRef()

    let [toggle, setToggle] = useState(false)
    let [toggleMobile, setToggleMobile] = useState(false)

    useEffect(() => {
        if(toggle === true) {
            let rotateIcon = anime.timeline({
                duration: 750
            })
            rotateIcon.add({
                targets: searchCharkhIcon.current,
                rotate: 360
            })
            .add({
                targets: searchInputsbox.current,
                width: '80%',
                opacity: 1
            }, 500)
            .add({
                targets: searchCharkhIcon.current,
                marginLeft: '-3rem'
            }, 750)
            anime({
                targets: searchRow.current,
                left: 'calc(50% - 14.2rem)',
            })
            
        } 
        if(toggle === false) {
            let rotateIconClose = anime.timeline({
                duration: 750,
                easing: 'easeInOutElastic(1, 0.5)',
            })
            rotateIconClose.add({
                targets: searchCharkhIcon.current,
                rotate: -360
            })
            .add({
                targets: searchInputsbox.current,
                width: 0,
                opacity: 0
            }, 650)
            .add({
                targets: searchCharkhIcon.current,
                marginLeft: 0
            }, 750)
            anime({
                targets: searchRow.current,
                left: 'calc(50% - 15rem)',
                delay: 750
            })
        }
        // asdasd
        if(toggleMobile === true) {
            let rotateIconMobile = anime.timeline({
                duration: 750
            })
            rotateIconMobile
            .add({
                targets: searchCharkhIconMobile.current,
                rotate: 360
            })
            .add({
                targets: searchInputsboxMobile.current,
                height: '5.2rem',
                opacity: 1
            })
            anime({
                targets: searchCharkhIconMobile.current,
                width: '3rem',
                delay: 650,
            })
            anime({
                targets: searchRowMobile.current,
                top: '1rem',
                delay: 750
            })
            
        } 
        if(toggleMobile === false) {
            let rotateIconCloseMobile = anime.timeline({
                duration: 750,
                easing: 'easeInOutElastic(1, 0.5)',
            })
            rotateIconCloseMobile.add({
                targets: searchCharkhIconMobile.current,
                rotate: -360,
            })
            .add({
                targets: searchInputsboxMobile.current,
                height: 0,
                opacity: 0
            }, 650)
            anime({
                targets: searchCharkhIconMobile.current,
                width: '5rem',
                delay: 750
            })
            anime({
                targets: searchRowMobile.current,
                top: '4rem',
                delay: 800
            })
        }
    })


    const animateToggler = () => {
        setToggle(!toggle)
       
    }

    const animateTogglerMobile = () => {
        setToggleMobile(!toggleMobile)
        
    }

    const colourOptions = ['red', 'blue', 'yellow']

    const customStyles = {
        // container: () => ({
        //     width: '10rem',
        //     padding: '0 1rem'
        // }),
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? 'red' : 'blue',
          padding: 20,
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
            width: '8rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignitems: 'center',
            // padding: '2px 8px'
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    return(
        <>
            <div className={classes.menuPageSearchRow} ref={searchRow}>
                <div className={classes.menuPageSearchInputsbox} ref={searchInputsbox}>
                    <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeft} />
                    <Select
                        className={classes.menuPageSearchInputRight}
                        classNamePrefix="رنگ ها"
                        defaultValue={colourOptions[0]}
                        // isDisabled={isDisabled}
                        // isLoading={isLoading}
                        // isClearable={isClearable}
                        isRtl={true}
                        // isSearchable={isSearchable}
                        name="color"
                        styles={customStyles}
                        options={colourOptions}
                    />
                    {/* <input type="search" className={classes.menuPageSearchInputRight} /> */}
                </div>
                <div className={classes.menuPageSearchLogobox}>
                    <img src="/GearIcon.svg" alt="" ref={searchCharkhIcon}
                    className={classes.menuPageSearchCharkhIcon} onClick={animateToggler} />
                </div>
            </div>

            <div className={classes.menuPageSearchRowMobile} ref={searchRowMobile}>
                <div className={classes.menuPageSearchInputsboxMobile} ref={searchInputsboxMobile}>
                    <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeftMobile} />
                    <input type="search" className={classes.menuPageSearchInputRightMobile} />
                </div>
                <div className={classes.menuPageSearchLogoboxMobile}>
                    <img src="/GearIcon.svg" alt="" ref={searchCharkhIconMobile}
                    className={classes.menuPageSearchCharkhIconMobile}
                    onClick={animateTogglerMobile} />
                </div>
            </div>
            
        </>
    )
}


export default MenuPageSearch