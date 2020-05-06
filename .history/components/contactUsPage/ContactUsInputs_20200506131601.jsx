import React, {useState, useEffect} from 'react'
import classes from './contactUsPage.module.scss'

const ContactUsInputs = () => {

    let [nameValid, setNameValid ] = useState(false)
    let [emailValid, setEmailValid ] = useState(false)
    let [PhoneValid, setPhoneValid ] = useState(false)
    let [nameValid, setNameValid ] = useState(false)

    return (
        <form action="POST">
            <div className={classes.contactUsInputsbox}>
           <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام کامل</label>
                <input type="text" id="nameInput" className={classes.contactUsInputRtl} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#emailInput" className={classes.contactUsInputLabel}>ایمیل</label>
                <input type="email" id="emailInput" className={classes.contactUsInputLtr} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#phoneInput" className={classes.contactUsInputLabel}>شماره تلفن</label>
                <input type="text" id="phoneInput" className={classes.contactUsInputLtr} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#selectInput" className={classes.contactUsInputLabel}>نوع کسب و کار</label>
                <input type="text" id="selectInput" className={classes.contactUsInputRtl} required/>
            </div>
            <button type="submit" className={classes.contactUsSubmitButton}>ارسال</button>
        </div>
        </form>
    )
}

export default ContactUsInputs
