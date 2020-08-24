import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactCodeInput from 'react-code-input';
import { toast } from 'react-toastify';
import Countdown from '../countdown/Countdown'
import classes from './orderCreateLogin.module.scss';


function OrderCreateLogin() {
  
  const firstInput = useRef(null)

  let [phoneInput, setPhoneInput] = useState({
    value: '',
    valid: true,
    message: '',
  });
  let [step2Code, setStep2Code] = useState({
    value: '',
    valid: true,
    message: '',
  });
  let [loginStep1Statuses, setLoginStep1Statuses] = useState({
    loading: null,
    success: null,
    error: null,
  });
  let [loginStep2Statuses, setLoginStep2Statuses] = useState({
    loading: null,
    success: null,
    error: null,
  });
  let [rulesChecked, setRulesChecked] = useState(false)
  let [loginStepTwoSwitch, setLoginStepTwoSwitch] = useState(false);

  const phoneInputChangeHandler = (e) => {
    setPhoneInput({ ...phoneInput, value: e.target.value });
  };

  const loginStep1ClickHandler = () => {
    if (!phoneInput.value) {
      setPhoneInput({ ...phoneInput, valid: false, message: 'الزامیست' });
    } else if (!/^\d+$/.test(phoneInput.value)) {
      setPhoneInput({
        ...phoneInput,
        valid: false,
        message: 'شماره موبایل معتبر نیست',
      });
    } else if (phoneInput.value.length !== 11) {
      setPhoneInput({
        ...phoneInput,
        valid: false,
        message: 'شماره موبایل صحیح نیست',
      });
    } else {
      setPhoneInput({ ...phoneInput, valid: true, message: '' });
    }

    if (phoneInput.value.length === 11 && /^\d+$/.test(phoneInput.value)) {
      let phoneInputValue = phoneInput.value;
      setLoginStep1Statuses({
        ...loginStep1Statuses,
        loading: true,
        success: false,
        error: false,
      });
      // setLoginStepTwoSwitch(true);

      axios
        .post('http://185.211.59.237/Account/Login', {
          phoneNumber: phoneInput.value,
          roleGuid: "91b3cdab-39c1-40fb-b077-a2d6e611f50a"
        })
        .then((res) => {
          console.log(res.data);

          if (res.data.state === 1) {
            setLoginStep1Statuses({
              ...loginStep1Statuses,
              loading: false,
              success: true,
              error: false,
            });
            setLoginStepTwoSwitch(true);
          } else {
            setLoginStep1Statuses({
              ...loginStep1Statuses,
              loading: false,
              success: false,
              error: true,
            });
            toast(res.data.message, { type: toast.TYPE.ERROR });
          }
        })
        .catch((err) => {
          setLoginStep1Statuses({
            ...loginStep1Statuses,
            loading: false,
            success: false,
            error: true,
          });
          toast('خطای شبکه', { type: toast.TYPE.ERROR });
        });
    }
  };

  const loginReactCodeInputCganger = (val) => {
    setStep2Code({ ...step2Code, value: val });
  };

  const loginStep2ClickHandler = () => {
    if (step2Code.value.length !== 6 || !/^\d+$/.test(step2Code.value)) {
      toast('کد وارد شده معتبر نیست', { type: toast.TYPE.ERROR });
    }

    if (step2Code.value.length === 6 && /^\d+$/.test(step2Code.value)) {
      setLoginStep2Statuses({
        ...loginStep2Statuses,
        loading: true,
        success: false,
        error: false,
      });

      axios
        .post('http://185.211.59.237/Account/Authenticate', {
          phoneNumber: phoneInput.value,
          smsToken: step2Code.value,
          rememberMe: rulesChecked,
          roleGuid: "91b3cdab-39c1-40fb-b077-a2d6e611f50a"
        })
        .then((res) => {
          if (res.data.token !== null) {
            setLoginStep2Statuses({
              ...loginStep2Statuses,
              loading: false,
              success: true,
              error: false,
            });
            setLoginStepTwoSwitch(false);
            toast('ثبت نام موفقیت آمیز بود', { type: toast.TYPE.SUCCESS });
          } else {
            setLoginStep2Statuses({
              ...loginStep2Statuses,
              loading: true,
              success: false,
              error: false,
            });
            toast('کد وارد شده صحیح نمی باشد', { type: toast.TYPE.ERROR });
          }
        })
        .catch((err) => {
          setLoginStep2Statuses({
            ...loginStep2Statuses,
            loading: false,
            success: false,
            error: true,
          });

          toast('خطای شبکه', { type: toast.TYPE.ERROR });
        });
    }
  };

  const loginStep2BackHandler = () => {
    setLoginStepTwoSwitch(false);
  };

  return (
    <>
      {!loginStepTwoSwitch ? (
        <div className={classes.loginSideMain}>
        <h6 className={classes.loginSideTitle}>
          ابتدا باید وارد حساب خود شوید:
          <br />
          اگر حسابی ندارید، از 
          <a href="http://panel.pisheplus.com" target="_blank">اینجا</a>
          حساب خود را بسازید.
        </h6>
          <input
            ref={firstInput}
            type="text"
            placeholder="شماره همراه"
            onChange={phoneInputChangeHandler}
            className={classes.loginSidePhoneInput}
          />
          {phoneInput.message && (
            <div className={classes.loginSideInputErrorsSpan}>
              {phoneInput.message}
            </div>
          )}
          <div className={classes.loginSideButtonBox}>
            <button
              type="button"
              disabled={loginStep1Statuses.loading}
              className={classes.loginSideButton}
              onClick={loginStep1ClickHandler}
            >
              {loginStep1Statuses.loading ? 'صبور باشید' : 'ورود'}
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.loginSideStep2Main}>
          <h6 className={classes.loginStep2MainTitle}>
            کد دریافتی را وارد کنید
          </h6>
          <ReactCodeInput
            type="tezt"
            fields={6}
            onChange={(val) => loginReactCodeInputCganger(val)}
          />

          <Countdown backToStep1={loginStep2BackHandler} />

          <p className={classes.loginCcheckKeeper}>
              <input type="checkbox" id="orderRulesCheck"
              checked={rulesChecked}
              onChange={() => loginCheckboxChange()} />
              <label htmlFor="orderRulesCheck">
                  مرا بخاطر بسپار
              </label>
          </p>

          <div className={classes.loginStep2Buttonsbox}>
            <button
              type="button"
              onClick={loginStep2ClickHandler}
              disabled={loginStep2Statuses.loading}
              className={classes.loginStep2SubmitButton}
            >
              {loginStep2Statuses.loading ? 'صبور باشید' : 'ادامه'}
            </button>

            <button
              type="button"
              onClick={loginStep2BackHandler}
              disabled={loginStep2Statuses.loading}
              className={classes.loginStep2BackButton}
            >
              بازگشت
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderCreateLogin
