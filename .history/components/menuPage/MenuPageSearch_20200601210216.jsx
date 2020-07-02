
import React, {Component} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Scrollbar  } from 'react-scrollbars-custom'
import { TweenMax } from "gsap";
import {CSSPlugin} from 'gsap';

import Select from 'react-select';
import axios from 'axios';
import classes from './menuPage.module.scss'

const C = CSSPlugin;
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
            serachResiveData: '',

            serachResultCategories: null,
            serachResultLoading: false,
            serachResultMessage: ''
        }

		this.searchRow = null;
        this.searchRowTween = null;

        this.searchInputsboxMobile = null
        this.searchInputsboxMobileTween = null

        this.searchResultBox = null;
        this.searchResultBoxTween = null;
    }


    componentDidMount(){

        let toggle = this.state.toggle
        this.setState({toggle: !toggle})
        let toggleMobile = this.state.toggleMobile
        this.setState({toggleMobile: !toggleMobile})

    // countries
        axios.get('http://185.94.97.164/api/Account/Provinces')
        .then(res => {
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

        if(e.target.value !== ''){
            this.searchResultBoxTween = TweenMax.to(this.searchResultBox, 0.2, {autoAlpha: 1, display: 'block'})
            this.searchRowTween = TweenMax.to(this.searchRow, 0.2, {borderBottomRightRadius: 0, borderBottomLeftRadius: 0})

            this.searchInputsboxMobileTween = TweenMax.to(this.searchInputsboxMobile, 0.2, {borderBottomRightRadius: 0, borderBottomLeftRadius: 0})
        }
        if(e.target.value === ''){
            this.searchResultBoxTween = TweenMax.to(this.searchResultBox, 0.2, {autoAlpha: 0, display: 'none'})
            this.searchRowTween = TweenMax.to(this.searchRow, 0.2, {borderBottomRightRadius: '1rem', borderBottomLeftRadius: '1rem'})

            this.searchInputsboxMobileTween = TweenMax.to(this.searchInputsboxMobile, 0.2, {borderBottomRightRadius: '1rem', borderBottomLeftRadius: '1rem'})
        }

        this.setState({
            searchInputValue: e.target.value,
            serachResultLoading: true
        })
        let searchInput = e.target.value.trim()

        axios.get(
            `http://185.94.97.164/api/Category/SearchByCity?cityGuid=${this.state.selectedCity.cityGuid}&searchInput=${searchInput}`,
          ).then((res) => {
            console.log(res);
            if(res.data.state === 1) {
                console.log('objectttttt');
                this.setState({
                    serachResultCategories: res.data.categories,
                    serachResultMessage: null,
                    serachResultLoading: false
                })
            }
            if(res.data.state === 2 || res.data.state === 3 || res.data.state === 4) {
                this.setState({
                    serachResultCategories: null,
                    serachResultLoading: false,
                    serachResultMessage: res.data.message
                })
            }
          });
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
                color: '#cccccc',
                marginBottom: '0.5rem'
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
                    <div className={classes.menuPageSearchInputsbox}>
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
                                loadingMessage={() => "درحال بارگیری..."}
                                noOptionsMessage={() => "نتیجه ای یافت نشد"}
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
                                loadingMessage={() => "درحال بارگیری..."}
                                noOptionsMessage={() => "نتیجه ای یافت نشد"}
                                styles={customStyles}
                                options={this.state.cities}
                                onChange={val => this.cityChanger(val)}
                            />
                        </div>
                    </div>
                    <div className={classes.menuPageSearchLogobox}>
                        <img src="/GearIcon.svg" alt=""
                        className={classes.menuPageSearchCharkhIcon} onClick={this.animateToggler} />
                    </div>
                </div>

                <div className={classes.menuPageSearchResultBox} ref={div => this.searchResultBox = div}>
                    {this.state.serachResultCategories === null && !this.state.serachResultLoading ?
                    <h1>{this.state.serachResultMessage}</h1> : null
                    }
                    {this.state.serachResultCategories !== null &&
                    this.state.serachResultCategories !== [] &&
                    !this.state.serachResultLoading ?
                       
                        <PerfectScrollbar>
                                    
                            {this.state.serachResultCategories.map((ctg, index) => (
                                <div className={classes.menuPageSearchResultItembox} key={index}>
                                    <h2 className={classes.menuPageSearchResultItem}>
                                        {ctg.displayName}
                                    </h2>
                                </div>
                            ))
                            }
                        </PerfectScrollbar>
                        :null
                    }
                    {this.state.serachResultLoading ?
                    <div className={classes.menuPageSearchResultBoxLoader}>درحال بارگیری...</div>
                    : null}
                </div>
    
                <div className={classes.menuPageSearchRowMobile}>
                    <div className={classes.menuPageSearchInputsboxMobile} ref={div => this.searchInputsboxMobile = div}>
                        <input type="text" placeholder="چه کمکی میتونم بکنم؟" className={classes.menuPageSearchInputBottomMobile} onChange={e => this.serachHandler(e)} />
                        <Select
                            inputId="menuPageSearchInputTopCityMobile11"
                            instanceId="menuPageSearchInputTopCityMobile12"
                            placeholder="شهر"
                            className={classes.menuPageSearchInputTopCityMobile}
                            // defaultValue={{value}}
                            label="Single select"
                            isRtl={true}
                            isLoading={this.state.countriesLoading}
                            loadingMessage={() => "درحال بارگیری..."}
                            noOptionsMessage={() => "نتیجه ای یافت نشد"}
                            styles={customStyles}
                            options={this.state.cities}
                            onChange={val => this.cityChanger(val)}
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
                            loadingMessage={() => "درحال بارگیری..."}
                            noOptionsMessage={() => "نتیجه ای یافت نشد"}
                            styles={customStyles}
                            // options={flavourOptions}
                            options={this.state.countries}
                            onChange={val => this.countryChanger(val)}
                        />
                    </div>
                    <div className={classes.menuPageSearchLogoboxMobile}>
                        <img src="/GearIcon.svg" alt=""
                        className={classes.menuPageSearchCharkhIconMobile}
                        onClick={this.animateTogglerMobile} />
                    </div>
                </div>
            </>
        )
      }
}

  
export default MenuPageSearch