import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import classes from './contactUsPage.module.scss'

const ContactUsInputs = () => {

    let [nameValue, setNameValue ] = useState('')
    let [emailValue, setEmailValue ] = useState('')
    let [PhoneValue, setPhoneValue ] = useState('')
    let [descriptionValue, setDescriptionValue ] = useState('')

    let [nameValid, setNameValid ] = useState(true)
    let [emailValid, setEmailValid ] = useState(true)
    let [PhoneValid, setPhoneValid ] = useState(true)
    let [descriptionValid, setDescriptionValid ] = useState(true)

    let [categoriesLoading, setCategoriesLoading ] = useState(true)
    let [categories, setCategories ] = useState([])
    let [categoriesValid, setCategoriesValid ] = useState(true)
    let [selectedCategory, setSelectedCategory ] = useState(null)

    let [sendButtonDisabler, setSendButtonDisabler ] = useState(false)

    React.useEffect(() => {
        axios.get('http://185.211.59.237/Code/GetCodesByCodeGroupGuid?guid=107a7244-6e66-4369-8ba6-dfb0636642c4', {

        }).then(res => {
            console.log(res.data.codes);
            setCategories(res.data.codes)
            setCategoriesLoading(false)
        })
    }, [])

    const nameInputChangeHandler = (e) => {
        setNameValue(e.target.value)
    }
    const emailInputChangeHandler = (e) => {
        setEmailValue(e.target.value)
    }
    const phoneInputChangeHandler = (e) => {
        setPhoneValue(e.target.value)
    }
    const textareaChangeHandler = (e) => {
        setDescriptionValue(e.target.value)
    }
    const categoriesSelectChangeHandler = (val) => {
        setSelectedCategory(val)
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
        
        if(descriptionValue.length === 0){
            setDescriptionValid(false)
        }else{
            setDescriptionValid(true)
        }

        if(selectedCategory === null){
            setCategoriesValid(false)
        }else{
            setCategoriesValid(true)
        }

        if(nameValue.length !== 0 && emailPattern.test(emailValue) && PhoneValue.length !== 0 && phonePattern.test(PhoneValue) && descriptionValue.length !== 0 && selectedCategory !== null){
            setNameValid(true)
            setEmailValid(true)
            setPhoneValid(true)
            setDescriptionValid(true)
            setCategoriesValid(true)
            setSendButtonDisabler(true)

            axios.post('http://185.211.59.237/ContactUs/SendMessage', {
                name: nameValue,
                email: emailValue,
                phoneNumber: PhoneValue,
                message: descriptionValue,
                contactUsBusinessTypeGuid: selectedCategory.codeGuid
            }).then(res =>{
                setSendButtonDisabler(false)
                setNameValue('')
                setEmailValue('')
                setPhoneValue('')
                setDescriptionValue('')
                toast('عملیات موفقیت آمیز بود', {type: toast.TYPE.SUCCESS})
            })
        }else{
            toast('لطفا تمامی ورودی ها را پر کنید', {type: toast.TYPE.WARNING})
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
            color: '#494949',
            marginBottom: '0.5rem'
        }),
        control: () => ({
            height: '2rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignitems: 'center',
        }),
        indicator: () => ({
            color: '#494949'
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          const color = '#494949';
          const fontWeight = 'bold'
      
          return { ...provided, opacity, transition, color, fontWeight };
        }
      }

    return (
        <>
        <div className={classes.contactUsInputsbox}>
           <div className={classes.contactUsInputDiv}>
                <label htmlFor="#nameInput" className={classes.contactUsInputLabel}>نام کامل</label>
                <input type="text" id="nameInput"
                value={nameValue}
                className={nameValid ? classes.contactUsInputRtl : classes.contactUsInputRtlInvalid}
                onChange={(e) => nameInputChangeHandler(e)} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#emailInput" className={classes.contactUsInputLabel}>ایمیل</label>
                <input type="email" id="emailInput"
                  value={emailValue}
                  className={emailValid ? classes.contactUsInputLtr : classes.contactUsInputLtrInvalid}
                onChange={(e) => emailInputChangeHandler(e)} />
            </div>
            <div className={classes.contactUsInputDiv}>
                <label htmlFor="#phoneInput" className={classes.contactUsInputLabel}>
                    شماره تلفن
                </label>
                <input type="text" id="phoneInput"
                value={PhoneValue}
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
                    className={categoriesValid ? 
                        classes.contactUsSelect : 
                        classes.contactUsSelectInvalid}
                    label="Single select"
                    isRtl={true}
                    isLoading={categoriesLoading}
                    loadingMessage={() => "درحال بارگیری..."}
                    noOptionsMessage={() => "نتیجه ای یافت نشد"}
                    styles={customStyles}
                    options={categories}
                    getOptionLabel={option => option.displayName}
                    getOptionValue={option => option.name}
                    onChange={val => categoriesSelectChangeHandler(val)}
                />
            </div>
            <div className={classes.contactUsTextareaDiv}>
                <div className={classes.contactUsTextareaLabelBox}>
                    <label htmlFor="#Textarea" className={classes.contactUsTextareaLabel}>پیام</label>
                </div>
                <textarea id="Textarea"
                  value={descriptionValue}
                  className={descriptionValid ? classes.contactUsTextarea : classes.contactUsTextareaInvalid}
                onChange={(e) => textareaChangeHandler(e)}>
                </textarea>
            </div>
            <button className={classes.contactUsSubmitButton}
            disabled={sendButtonDisabler}
            onClick={sendData}>
                ارسال
            </button>
        </div>

        <ToastContainer
        autoClose={4000}
        position={toast.POSITION.BOTTOM_CENTER}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnVisibilityChange={false}
        pauseOnHover={false}
        rtl/>
        </>
    )
}

export default ContactUsInputs
