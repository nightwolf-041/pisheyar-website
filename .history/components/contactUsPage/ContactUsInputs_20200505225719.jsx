import React from 'react'
import classes from './contactUsPage.module.scss'


const ContactUsInputs = () => {

    const setCustomValidityHandler = (e) => {
        e.target.setCustomValidity("الزامیست");
    }

    const setCustomValidityHandlerEmail = (e) => {
        e.target.setCustomValidity("ایمیل معتبر نیست");
    }

    return (
        <form action="POST">
            <div className={classes.contactUsInputsbox}>
           <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام کامل</label>
                <input type="text" id="nameInput" className={classes.contactUsInputRtl} required/>
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>ایمیل</label>
                <input type="email" id="nameInput" className={classes.contactUsInputLtr} required
                onInvalid={(e) => setCustomValidityHandlerEmail(e)}/>
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>شماره تلفن</label>
                <input type="text" id="nameInput" className={classes.contactUsInputLtr} required/>
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نوع کسب و کار</label>
                <input type="text" id="nameInput" className={classes.contactUsInputRtl} required/>
            </div>
            <button type="submit" className={classes.contactUsSubmitButton}>ارسال</button>
        </div>
        </form>
    )
}

export default ContactUsInputs
