import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import MenuPageSearch from '../../menuPage/MenuPageSearch';
import Page2Slider from './Page2Slider'
import classes from './categoriesPage.module.scss'


const CategoriesPage = (props) => {
    const givenGuidForSlider = props.givenGuid
    return (
        <section className={classes.categoriesPage}>
            <MenuPageSearch />
            <Page2Slider guid={givenGuidForSlider} />
        </section>
    )
}

export default CategoriesPage
