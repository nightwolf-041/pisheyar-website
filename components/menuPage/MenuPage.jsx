import React from 'react'
import MenuPageSearch from './MenuPageSearch'
import MenuPageQuadMenu from './MenuPageQuadMenu'
import classes from './menuPage.module.scss'

function MenuPage() {
    return (
        <>
        <section name="categoryPage" className={classes.menuPageSection}>
            <MenuPageSearch />
            <MenuPageQuadMenu />
        </section>
        </> 
    )
}

export default MenuPage
