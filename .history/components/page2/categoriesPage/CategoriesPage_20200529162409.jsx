import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import classes from 'categoriesPage.module.scss'


const CategoriesPage = () => {

    let [countriesLoading, setCountriesLoading] = React.useState(true)
    let [countries, setCountries] = React.useState([])
    let [selectedCountry, setSelectedCountry] = React.useState('')

    let [cities, setCities] = React.useState([])
    let [citiesLoading, setCitiesLoading] = React.useState(false)
    let [selectedCity, setSelectedCity] = React.useState('')
    let [cityDisabled, setCityDisabled] = React.useState(true)

    let [serachResultCategories, setSerachResultCategories] = React.useState(null)
    let [serachResultLoading, setSerachResultLoading] = React.useState(false)
    let [serachResultMessage, setSerachResultMessage] = React.useState('')

    let [searchInputValue, setSearchInputValue] = React.useState('')
    let [serachResiveData, setSerachResiveData] = React.useState('')

    React.useEffect(() => {
        // countries
        axios.get('http://185.94.97.164/api/Account/Provinces')
        .then(res => {
            setCountriesLoading(false)
            setCountries(res.data.provinces)
        }).catch(err => {
            setCountriesLoading(false)
            setCountries([])
        })
    }, [])

    const countryChanger = (val) => {
        setSelectedCountry(val.value)

        if(val.value.length > 0) {
            setCityDisabled(false)
            setCitiesLoading(true)
             // cities 
            let guid = val.provinceGuid
            axios.get(`http://185.94.97.164/api/Account/Provinces/${guid}/Cities`)
            .then(res => {
                setCities(res.data.cities)
                setCitiesLoading(false)
            }).catch(err => {
                setCities([])
                setCitiesLoading(false)
            })
        }
    }

    const cityChanger = (val) => {
        setSelectedCity(val)
    }

    const serachHandler = (e) => {

        // if(e.target.value !== ''){
        //     this.searchResultBoxTween = TweenLite.to(this.searchResultBox, 0.2, {autoAlpha: 1, display: 'block'})
        //     this.searchRowTween = TweenLite.to(this.searchRow, 0.2, {borderBottomRightRadius: 0, borderBottomLeftRadius: 0})

        //     this.searchInputsboxMobileTween = TweenLite.to(this.searchInputsboxMobile, 0.2, {borderBottomRightRadius: 0, borderBottomLeftRadius: 0})
        // }
        // if(e.target.value === ''){
        //     this.searchResultBoxTween = TweenLite.to(this.searchResultBox, 0.2, {autoAlpha: 0, display: 'none'})
        //     this.searchRowTween = TweenLite.to(this.searchRow, 0.2, {borderBottomRightRadius: '1rem', borderBottomLeftRadius: '1rem'})

        //     this.searchInputsboxMobileTween = TweenLite.to(this.searchInputsboxMobile, 0.2, {borderBottomRightRadius: '1rem', borderBottomLeftRadius: '1rem'})
        // }

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
                this.setState({
                    serachResultCategories: res.data.categories,
                    serachResultMessage: null,
                    serachResultLoading: false
                })
            }
            if(res.data.state === 2) {
                this.setState({
                    serachResultCategories: null,
                    serachResultLoading: false,
                    serachResultMessage: res.data.message
                })
            }
          });
    }

    return (
        <section className={classes.categoriesPage}>
            <>
                <div className={classes.menuPageSearchRow}>
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
                                isLoading={countriesLoading}
                                loadingMessage={() => "درحال بارگیری..."}
                                noOptionsMessage={() => "نتیجه ای یافت نشد"}
                                styles={customStyles}
                                options={countries}
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
                                isLoading={countriesLoading}
                                // isDisabled={cityDisabled}
                                loadingMessage={() => "درحال بارگیری..."}
                                noOptionsMessage={() => "نتیجه ای یافت نشد"}
                                styles={customStyles}
                                options={cities}
                                onChange={val => this.cityChanger(val)}
                            />
                        </div>
                    </div>
                    <div className={classes.menuPageSearchLogobox}>
                        <img src="/GearIcon.svg" alt="" ref={img => this.searchCharkhIcon = img}
                        className={classes.menuPageSearchCharkhIcon} onClick={this.animateToggler} />
                    </div>
                </div>

                <div className={classes.menuPageSearchResultBox} ref={div => this.searchResultBox = div}>
                    {serachResultCategories === null && !serachResultLoading ?
                    <h1>{serachResultMessage}</h1> : null
                    }
                    {serachResultCategories !== null && !serachResultLoading ?
                        <Scrollbar className={classes.menuPageSearchResultScrollbar}
                        wrapperProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef} className="menuPageSearchResultScrollbarWrapper" />;
                            }
                            }}
                            scrollerProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef} className="menuPageSearchResultScrollbarScroller" />;
                            }
                            }}
                            trackXProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef}
                                className="menuPageSearchResultScrollbarTrackX" />;
                            }
                            }}
                            trackYProps={{
                            renderer: props => {
                                const { elementRef, ...restProps } = props;
                                return <span {...restProps} ref={elementRef}
                                className="menuPageSearchResultScrollbarTrackY" />;
                            }
                            }}
                            >
                                
                        {serachResultCategories.map((ctg, index) => (
                            <div className={classes.menuPageSearchResultItembox} key={index}>
                                <h2 className={classes.menuPageSearchResultItem}>
                                    {ctg}
                                </h2>
                            </div>
                        ))
                        }
                        </Scrollbar>
                        :null
                    }
                    {serachResultLoading ?
                    <div className={classes.menuPageSearchResultBoxLoader}>درحال بارگیری...</div>
                    : null}
                </div>
            </>
        </section>
    )
}

export default CategoriesPage
