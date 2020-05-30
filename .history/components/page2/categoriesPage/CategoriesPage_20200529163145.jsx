import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import classes from 'categoriesPage.module.scss'
import MenuPageSearch from '../../menuPage/MenuPageSearch';


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

        setSearchInputValue(e.target.value)
        setSerachResultLoading(true)

        let searchInput = e.target.value.trim()

        axios.get(
            `http://185.94.97.164/api/Category/SearchByCity?cityGuid=${selectedCity.cityGuid}&searchInput=${searchInput}`,
          ).then((res) => {
            if(res.data.state === 1) {
                setSerachResultCategories(res.data.categories)
                setSerachResultLoading(false)
                setSerachResultMessage(null)
            }
            if(res.data.state === 2) {
                setSerachResultCategories(null)
                setSerachResultLoading(false)
                setSerachResultMessage(res.data.message)
            }
          });
    }

    return (
        <section className={classes.categoriesPage}>
            <MenuPageSearch />
        </section>
    )
}

export default CategoriesPage
