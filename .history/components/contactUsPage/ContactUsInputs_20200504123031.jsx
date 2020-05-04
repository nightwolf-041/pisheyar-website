import React from 'react'
import classes from './contactUsPage.module.scss'


const ContactUsInputs = () => {
    return (
        <div className={classes.contactUsInputsbox}>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام</label>
                <input id="nameInput"
            </div>
        </div>
    )
}

export default ContactUsInputs
