import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import MenuPageSearch from '../../menuPage/MenuPageSearch';
import Page2Slider from './Page2Slider'
import classes from './categoriesPage.module.scss'


const CategoriesPage = () => {

    return (
        <section className={classes.categoriesPage}>
            <div className={classes.categoriesPageAddButtonBox}>
                <button className={classes.categoriesPageAddButton}>
                    درخواست جدید
                </button>
            </div>
            <MenuPageSearch />
            <Page2Slider />
        </section>
    )
}

export default CategoriesPage
