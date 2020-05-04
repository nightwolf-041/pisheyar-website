import React from 'react'
import classes from './servicesPage.module.scss'


const ServicesPage = () => {
    return (
        <section className={classes.servicesPageSection}>
            <h4 className={classes.servicesPageTitle}>خدمات ما</h4>
            <p className={classes.servicesPageSubtitle}>
                خدمات پیشه یار یکی از برترین خدمات صنعتی شناخته شده که به شما کمک می کند از متنوع ترین خدمات صنعتی مطلع و در صورت نیاز با مراجعه به دسته بندی، خدمات مورد نیاز را پیدا کنید و همچنین با مراجعه به اپلیکیشن پیشه یار سفارشات خود را به اتمام برسانید.
            </p>
        </section>
    )
}

export default ServicesPage
