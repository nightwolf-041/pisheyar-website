import React from 'react'
import classes from './contactUsPage.module.scss'


const ContactUsPage = () => {
    return (
        <section className={classes.contactUsSection}>
            <div className={classes.contactUsSectionBackdrop}></div>
            <div className="container">
                <div className={classes.contactUsRow}>
                    <div className={classes.contactUsCallbox}>
                        
                    </div>
                    <div className={classes.contactUsContactbox}></div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsPage
