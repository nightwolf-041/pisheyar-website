import React, {useState, useEffect} from 'react'
import axios from 'axios'
import classes from './contactUsPage.module.scss'

const ContactUsInputs = () => {

    let [nameValue, setNameValue ] = useState('')
    let [emailValue, setEmailValue ] = useState('')
    let [PhoneValue, setPhoneValue ] = useState('')

    let [nameValid, setNameValid ] = useState(true)
    let [emailValid, setEmailValid ] = useState(true)
    let [PhoneValid, setPhoneValid ] = useState(true)

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
        let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phonePattern = /^\d+$/;

        if(nameValue.length === 0) {
            setNameValid(false)
            console.log('ooops!');
        }else{
            setNameValid(true)
        }
        
        if(!emailPattern.test(emailValue)){
            setEmailValid(false)
        }else{
            setEmailValid(true)
        }

        if(PhoneValue.length === 0 || !phonePattern.test(PhoneValue)){
            setPhoneValid(false)
        }else{
            setPhoneValid(true)
        }

        if(nameValue.length !== 0 && emailPattern.test(emailValue) && PhoneValue.length !== 0 && phonePattern.test(PhoneValue)){
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
                <input type="email" id="emailInput"
                  className={emailValid ? classes.contactUsInputLtr : classes.contactUsInputLtrInvalid}
                onChange={(e) => emailInputChangeHandler(e)} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#phoneInput" className={classes.contactUsInputLabel}>شماره تلفن</label>
                <input type="text" id="phoneInput"
                className={PhoneValid ? classes.contactUsInputLtr : classes.contactUsInputLtrInvalid}
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
