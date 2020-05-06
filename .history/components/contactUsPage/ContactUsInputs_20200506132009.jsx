import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './contactUsPage.module.scss'

const ContactUsInputs = () => {

    let [nameValue, setNameValue ] = useState(false)
    let [emailValue, setEmailValue ] = useState(false)
    let [PhoneValue, setPhoneValue ] = useState(false)

    let [nameValid, setNameValid ] = useState(false)
    let [emailValid, setEmailValid ] = useState(false)
    let [PhoneValid, setPhoneValid ] = useState(false)

    const nameInputChangeHandler = (e) => {

    }

    const sendData = () => {
        // if()
        axios.post()
    }

    return (
        <div className={classes.contactUsInputsbox}>
           <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام کامل</label>
                <input type="text" id="nameInput" className={classes.contactUsInputRtl}
                onChange={(e) => nameInputChangeHandler(e)} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#emailInput" className={classes.contactUsInputLabel}>ایمیل</label>
                <input type="email" id="emailInput" className={classes.contactUsInputLtr}
                onChange={(e) => emailInputChangeHandler(e)} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#phoneInput" className={classes.contactUsInputLabel}>شماره تلفن</label>
                <input type="text" id="phoneInput" className={classes.contactUsInputLtr}
                onChange={(e) => phoneInputChangeHandler(e)} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#selectInput" className={classes.contactUsInputLabel}>نوع کسب و کار</label>
                <input type="text" id="selectInput" className={classes.contactUsInputRtl} required/>
            </div>
            <button className={classes.contactUsSubmitButton} onClick={sendData}>ارسال</button>
        </div>
    )
}

export default ContactUsInputs
