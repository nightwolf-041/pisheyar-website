

import React, {Component} from 'react';
import { TimelineLite, TimelineMax, TweenLite, Elastic, Power1, Bounce } from "gsap";
import Select from 'react-select';
import axios from 'axios';
import classes from './menuPage.module.scss'

class MenuPageSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggleMobile: false,

            countries: [],
            countriesLoading: true,
            selectedContry: '',

            cityDisabled: true,
            cities: [],
            citiesLoading: false,
            selectedCity: '',

            searchInputValue: '',
            serachResiveData: ''
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

    // countries
        axios.get('http://185.94.97.164/api/Account/Provinces').then(res => {
            console.log(res.data.provinces);
            this.setState({
                countries: res.data.provinces,
                countriesLoading: false
            })
        }).catch(err => {
            this.setState({
                countries: [],
                countriesLoading: true
            })
        })

        // axios.get('http://185.94.97.164/api/Category/SearchByCity', {
        //     cityGuid: '72ef30ac-b5e1-4302-8133-867379963c92',
        //     searchInput: 'مصنوعات صنعتی'
        // }).then(res => {
        //     let data = JSON.stringify(res.data)
        //     console.log(data);
        // })
       
    }

    animateToggler = () => {
        let toggle = this.state.toggle
        this.setState({toggle: !toggle})

        if(toggle === true) {
            this.desctopMainTween
            .to(this.searchCharkhIcon, 0.3, {rotation: 360, ease: Power1.linear})
            .to(this.searchInputsbox, 0.5, {width: '80%', autoAlpha: 1, display: 'flex', ease: Bounce.easeOut})

            this.searchRowTween = TweenLite.to(this.searchRow, 0.8, {backgroundColor: '#0b1033', boxShadow: '0 0 12px 8px rgba(11, 16, 51, 0.55)', ease: Power1.easeInOut});
        } 
        if(toggle === false) {
            this.desctopMainTween
            .to(this.searchCharkhIcon, 0.4, {rotation: -360, ease: Power1.linear})
            .to(this.searchInputsbox, 0.3, {width: 0, autoAlpha: 0, display: 'none', ease: Power1.linear})
         
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
            .to(this.searchInputsboxMobile,0.5, {height: '8.3rem', display: 'flex', autoAlpha: 1, ease: Elastic.easeInOut.config( 1, 0.5)})

            this.searchRowMobileTween = TweenLite.to(this.searchRowMobile, 0.2, {top: '1rem', delay: 0.4, ease: Power1.linear});
            
        } 
        if(toggleMobile === false) {
        this.mobileMainTween
        .to(this.searchCharkhIconMobile, 0.4, {rotation: -360, ease: Power1.linear})
        .to(this.searchInputsboxMobile,0.4, {height: 0, autoAlpha: 0, display: 'none', ease: Power1.easeInOut})
        .to(this.searchCharkhIconMobile,0.5, {width: '4rem', ease: Elastic.easeOut.config( 1, 0.2)})

        this.searchRowMobileTween = TweenLite.to(this.searchRowMobile, 0.5, {top: '4rem', delay: 0.4});
        }
    }

    countryChanger = (val) => {
        this.setState({selectedContry: val.value})
        if(val.value.length > 0) {
            this.setState({cityDisabled: false, citiesLoading: true})
             // cities 
            let guid = val.provinceGuid
            axios.get(`http://185.94.97.164/api/Account/Provinces/${guid}/Cities`).then(res => {
                console.log(res.data);
                this.setState({
                    cities: res.data.cities,
                    citiesLoading: false
                })
            }).catch(err => {
                this.setState({
                    cities: [],
                    citiesLoading: true
                })
            })
        }
    }

    cityChanger = (val) => {
        console.log(val);
        this.setState({selectedCity: val})
    }

    serachHandler = (e) => {
        this.setState({searchInputValue: e.target.value})
        let searchInput = e.target.value.trim()
        let city = {...this.state.selectedCity}
        // let guid = city.cityGuid
        console.log( this.state.selectedCity.cityGuid, searchInput);
        axios.get('http://185.94.97.164/api/Category/SearchByCity', {
            cityGuid: '72ef30ac-b5e1-4302-8133-867379963c92',
            searchInput: 'مصنوعات صنعتی'
        }).then(res => {
            console.log(res);
        })
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
                        <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputBottom} onChange={e => this.serachHandler(e)} />
                         <div className={classes.menuPageSearchInputTopbox}>
                            <Select
                                inputId="menuPageSearchInputTopContry11"
                                instanceId="menuPageSearchInputTopContry12"
                                placeholder="استان"
                                className={classes.menuPageSearchInputTopContry}
                                // defaultValue={countries[2]}
                                label="Single select"
                                // loadingMessage="درال بارگیری"
                                isRtl={true}
                                isLoading={this.state.countriesLoading}
                                styles={customStyles}
                                options={this.state.countries}
                                onChange={val => this.countryChanger(val)}
                            />
                            <Select
                                inputId="menuPageSearchInputTopCity11"
                                instanceId="menuPageSearchInputTopCity12"
                                placeholder="شهر"
                                className={classes.menuPageSearchInputTopCity}
                                // defaultValue={countries[2]}
                                label="Single select"
                                isRtl={true}
                                isLoading={this.state.countriesLoading}
                                // isDisabled={this.state.cityDisabled}
                                styles={customStyles}
                                options={this.state.cities}
                                onChange={val => this.cityChanger(val)}
                            />
                        </div>
                    </div>
                    <div className={classes.menuPageSearchLogobox}>
                        <img src="/GearIcon.svg" alt="" ref={img => this.searchCharkhIcon = img}
                        className={classes.menuPageSearchCharkhIcon} onClick={this.animateToggler} />
                    </div>
                </div>

                <div className={classes.menuPageSearchResultBox}>
                    
                </div>
    
                <div className={classes.menuPageSearchRowMobile} ref={div => this.searchRowMobile = div}>
                    <div className={classes.menuPageSearchInputsboxMobile} ref={div => this.searchInputsboxMobile = div}>
                        <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputBottomMobile} />
                        <Select
                            inputId="menuPageSearchInputTopCityMobile11"
                            instanceId="menuPageSearchInputTopCityMobile12"
                            placeholder="شهر"
                            className={classes.menuPageSearchInputTopCityMobile}
                            // defaultValue={{value}}
                            label="Single select"
                            isRtl={true}
                            isLoading={this.state.countriesLoading}
                            styles={customStyles}
                            options={this.state.cities}
                        />
                        <Select
                            inputId="menuPageSearchInputTopContryMobile11"
                            instanceId="menuPageSearchInputTopContryMobile12"
                            placeholder="استان"
                            className={classes.menuPageSearchInputTopContryMobile}
                            // defaultValue={countries[2]}
                            label="Single select"
                            isRtl={true}
                            isLoading={this.state.countriesLoading}
                            styles={customStyles}
                            options={flavourOptions}
                            options={this.state.countries}
                            onChange={val => this.changer(val)}
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