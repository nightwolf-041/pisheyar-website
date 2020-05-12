import React, {useEffect, useState, useRef} from 'react';
import fetch from 'isomorphic-unfetch'
import anime from 'animejs'
import Select from 'react-select';
import classes from './menuPage.module.scss'
import axios from 'axios';

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

    let [contries, setContries] = useState(null)
    let [contriesLoading, setContriesLoading] = useState(true)

    useEffect(() => {

        axios.get('http://185.94.97.164/api/Account/Provinces').then(res => {
            setContries(res.data.provinces)
            setContriesLoading(false)
        }).catch(err => {
            setContries(null)
            // setContriesLoading(true)
        })

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

    const flavourOptions = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' } 
    ]

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? '#ffd617' : '#0b1033',
          backgroundColor: state.isSelected ? '#0b1033' : 'none',
          padding: 10,
        }),
        control: () => ({
            width: '8rem',
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
            <div className={classes.menuPageSearchRow} ref={searchRow}>
                <div className={classes.menuPageSearchInputsbox} ref={searchInputsbox}>
                    <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputLeft} />
                    {/* <Select
                    placeholder="رنگ ها"
                        className={classes.menuPageSearchInputRight}
                        // classNamePrefix="رنگ ها"
                        defaultValue={colourOptions[0]}
                        // isDisabled={isDisabled}
                        // isLoading={isLoading}
                        // isClearable={isClearable}
                        isRtl={true}
                        // isSearchable={isSearchable}
                        name="color"
                        styles={customStyles}
                        options={colourOptions}
                    /> */}
                     <Select
                        // id="contriesSelect"
                        placeholder="استان"
                        className={classes.menuPageSearchInputRight}
                        // defaultValue={contries[2]}
                        label="Single select"
                        isRtl={true}
                        isLoading={contriesLoading}
                        styles={customStyles}
                        options={contries}
                        // theme={theme => ({
                        // ...theme,
                        // borderRadius: 0,
                        // colors: {
                        //     ...theme.colors,
                        //     primary25: 'hotpink',
                        //     primary: 'black',
                        // },
                        // })}
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