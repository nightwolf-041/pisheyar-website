import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import MenuPageSearch from '../../menuPage/MenuPageSearch';
import Page2Slider from './Page2Slider'
import classes from './categoriesPage.module.scss'


const CategoriesPage = (props) => {
    const dataForSlider = props.data
    return (
        <section className={classes.categoriesPage}>
            <MenuPageSearch />
            <Page2Slider description={props.description} data={dataForSlider} />
        </section>
    )
}

export default CategoriesPage
