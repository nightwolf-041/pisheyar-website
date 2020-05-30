import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Select from 'react-select';
import classes from './contactUsPage.module.scss'

const ContactUsInputs = () => {

    let [nameValue, setNameValue ] = useState('')
    let [emailValue, setEmailValue ] = useState('')
    let [PhoneValue, setPhoneValue ] = useState('')

    let [nameValid, setNameValid ] = useState(true)
    let [emailValid, setEmailValid ] = useState(true)
    let [PhoneValid, setPhoneValid ] = useState(true)

    let [categoriesLoading, setCategoriesLoading ] = useState(true)
    let [categories, setCategories ] = useState([])
    let [selectedCity, setSelectedCity ] = useState({})

    const nameInputChangeHandler = (e) => {
        setNameValue(e.target.value)
    }
    const emailInputChangeHandler = (e) => {
        setEmailValue(e.target.value)
    }
    const phoneInputChangeHandler = (e) => {
        setPhoneValue(e.target.value)
    }
    const categoriesSelectChangeHandler = (val) => {
        setSelectedCity(val)
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

            axios.post('http://185.94.97.164/api/ContactUs/SendMessage', {
                name: nameValue,
                email: emailValue,
                phoneNumber: PhoneValue,
                categoryGuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
            }).then(res =>{

            })
        }
    }

    
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px dotted pink',
          color: state.isSelected ? '#ffd617' : '#0b1033',
          backgroundColor: state.isSelected ? '#0b1033' : 'none',
          padding: 10,
        }),
        placeholder: () => ({
            color: '#494949'
        }),
        control: () => ({
            height: '2rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignitems: 'center',
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          const color = '#fff';
          const fontWeight = 'bold'
      
          return { ...provided, opacity, transition, color, fontWeight };
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
                <label htmlFor="#phoneInput" className={classes.contactUsInputLabel}>
                    شماره تلفن
                </label>
                <input type="text" id="phoneInput"
                className={PhoneValid ? classes.contactUsInputLtr : classes.contactUsInputLtrInvalid}
                onChange={(e) => phoneInputChangeHandler(e)} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#selectInput" className={classes.contactUsInputLabel}>
                    نوع کسب و کار
                </label>
                <Select
                    inputId="contactUsSelect11"
                    instanceId="contactUsSelect22"
                    placeholder="انتخاب کنید"
                    className={classes.contactUsSelect}
                    // defaultValue={categories[2]}
                    label="Single select"
                    isRtl={true}
                    isLoading={categoriesLoading}
                    loadingMessage={() => "درحال بارگیری..."}
                    noOptionsMessage={() => "نتیجه ای یافت نشد"}
                    styles={customStyles}
                    options={categories}
                    onChange={val => categoriesSelectChangeHandler(val)}
                />
            </div>
            <button className={classes.contactUsSubmitButton}
            onClick={sendData}>
                ارسال
            </button>
        </div>
    )
}

export default ContactUsInputs
