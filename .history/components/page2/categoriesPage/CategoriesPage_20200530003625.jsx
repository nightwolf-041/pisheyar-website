import React from 'react'
import Select from 'react-select';
import axios from 'axios';
import MenuPageSearch from '../../menuPage/MenuPageSearch';
import Page2Slider from './Page2Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import classes from './categoriesPage.module.scss'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const CategoriesPage = () => {

    return (
        <section className={classes.categoriesPage}>
            <MenuPageSearch />
            <div className={classes.categoriesPageAddButtonBox}>
                <button className={classes.categoriesPageAddButton}>
                    درخواست جدید
                </button>
            </div>
            <Page2Slider />
        </section>
    )
}

export default CategoriesPage
