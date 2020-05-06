import React from 'react'
import classes from './contactUsPage.module.scss'


const ContactUsInputs = () => {
    return (
        <form>
            <div className={classes.contactUsInputsbox}>
           <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام کامل</label>
                <input type="text" id="nameInput" className={classes.contactUsInputRtl} required/>
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>ایمیل</label>
                <input type="email" id="nameInput" className={classes.contactUsInputLtr} required/>
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>شماره تلفن</label>
                <input type="text" id="nameInput" className={classes.contactUsInputLtr} required/>
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نوع کسب و کار</label>
                <input type="text" id="nameInput" className={classes.contactUsInputRtl} required/>
            </div>
            <button className={classes.contactUsSubmitButton}>ارسال</button>
        </div>
        </form>
    )
}

export default ContactUsInputs
