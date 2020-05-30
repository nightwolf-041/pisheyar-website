import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import MenuPageSearch from '../../menuPage/MenuPageSearch';
import classes from './categoriesPage.module.scss'


const CategoriesPage = () => {

    return (
        <section className={classes.categoriesPage}>
            <MenuPageSearch />
        </section>
    )
}

export default CategoriesPage
