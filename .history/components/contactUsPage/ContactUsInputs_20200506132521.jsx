import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './contactUsPage.module.scss'

const ContactUsInputs = () => {

    let [nameValue, setNameValue ] = useState('')
    let [emailValue, setEmailValue ] = useState('')
    let [PhoneValue, setPhoneValue ] = useState('')

    let [nameValid, setNameValid ] = useState()
    let [emailValid, setEmailValid ] = useState()
    let [PhoneValid, setPhoneValid ] = useState()

    const nameInputChangeHandler = (e) => {
        setNameValue(e.target.value)
    }
    const emailInputChangeHandler = (e) => {
        setEmailValue(e.target.value)
    }
    const phoneInputChangeHandler = (e) => {
        setPhoneValue(e.target.value)
    }

    const sendData = () => {
        if(nameValue.length === 0 || emailValue.length === 0 || PhoneValue.length === 0) {
            setNameValid(false)
            setEmailValid(false)
            setPhoneValid(false)
            console.log('ooops!');
        }
        if(nameValue.length !== 0 || emailValue.length !== 0 || PhoneValue.length !== 0){
            setNameValid(true)
            setEmailValid(true)
            setPhoneValid(true)
            console.log('yeeep');
            // axios.post()
        }
    }

    return (
        <div className={classes.contactUsInputsbox}>
           <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام کامل</label>
                <input type="text" id="nameInput"
                className={nameValid ? classes.contactUsInputRtl : classes.contactUsInputRtlInvalid}
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
