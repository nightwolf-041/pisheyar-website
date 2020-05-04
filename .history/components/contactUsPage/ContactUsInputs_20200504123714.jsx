import React from 'react'
import classes from './contactUsPage.module.scss'


const ContactUsInputs = () => {
    return (
        <div className={classes.contactUsInputsbox}>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام کامل</label>
                <input id="nameInput" className={classes.contactUsInputRtl} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>ایمیل</label>
                <input id="nameInput" className={classes.contactUsInputLtr} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>شماره تلفن</label>
                <input id="nameInput" className={classes.contactUsInputLtr} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نوع کسب و کار</label>
                <input id="nameInput" className={classes.contactUsInputRtl} />
            </div>
            <button className={classes.contactUsSubmitButton}>ارسال</button>
        </div>
    )
}

export default ContactUsInputs
