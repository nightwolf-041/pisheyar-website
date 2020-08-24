import React from 'react'
import axios from 'axios'
import Select from 'react-select';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import RulesModal from '../rulesModal/RulesModal';
import classes from './orderCreateInputs.module.scss'

function OrderCreateInputs(props) {

  const [cookies, setCookie, removeCookie] = useCookies();

  const [loading, setLoading] = React.useState(false)
  const [orderCreateMessage, setOrderCreateMessage] = React.useState('')
  const [orderCreateMessageValid, setOrderCreateMessageValid] = React.useState(true)
  const [orderCreateTitle, setOrderCreateTitle] = React.useState('')
  const [orderCreateTitleValid, setOrderCreateTitleValid] = React.useState(true)
  const [orderCreateTitleAndMessageValid, setOrderCreateTitleAndMessageValid] = React.useState(true)

  const [rulesModalShow, setRulesModalShow] = React.useState(false)

  let [orderRulesCheck, setOrderRulesCheck] = React.useState(false)
  const orderRulesCheckboxChange = () => {
      setOrderRulesCheck(!orderRulesCheck)
      againToggleCheck()
  }
  const againToggleCheck = () => {
      setOrderRulesCheck(!orderRulesCheck)
  }

  React.useEffect(() => {
      setOrderCreateMessage('')
      setOrderCreateMessageValid(true)
      setOrderCreateTitle('')
      setOrderCreateTitleValid(true)
  }, [])

  const orderCreate = () => {

    if(orderCreateMessage.length <= 5 && orderCreateTitle.length < 4) {
        setOrderCreateTitleAndMessageValid(false)
        setTimeout(() => {
            setOrderCreateTitleAndMessageValid(true)
        }, 850)
        toast('لطفا ورودی ها را پر کنید', {type: toast.TYPE.ERROR})
    }else{
        setOrderCreateTitleAndMessageValid(true)
    }

    if(orderCreateMessage.length <= 5 && orderCreateTitle.length >= 4) {
        setOrderCreateMessageValid(false)
        setTimeout(() => {
            setOrderCreateMessageValid(true)
        }, 850)
        toast('لطفا ورودی را پر کنید', {type: toast.TYPE.ERROR})
    }else{
        setOrderCreateMessageValid(true)
    }

    if(orderCreateTitle.length < 4 && orderCreateMessage.length > 5) {
        setOrderCreateTitleValid(false)
        setTimeout(() => {
            setOrderCreateTitleValid(true)
        }, 850)
        toast('لطفا ورودی را پر کنید', {type: toast.TYPE.ERROR})
    }else{
        setOrderCreateTitleValid(true)
    }

    if(orderRulesCheck === false) {
        toast('خواندن و تایید قوانین الزامیست', {type: toast.TYPE.ERROR})
    }

    if(orderCreateMessage.length > 5 && orderCreateTitle.length >= 4 && orderRulesCheck === true) {

      if(orderRulesCheck === true) {
        setOrderCreateMessageValid(true)
        setOrderCreateTitleValid(true)
        setLoading(true)

        axios.post('http://185.211.59.237/Order/Create', {
            categoryGuid: props.categoryGuid,
            title: orderCreateTitle,
            description: orderCreateMessage
        }, {
            headers: { Authorization: "Bearer " + cookies.token }
        }).then(res => {
            console.log(res.data)
            setLoading(false)
            if(res.data.state === 1) {
              setOrderCreateMessage('')
              setOrderCreateMessageValid(true)
              setOrderCreateTitle('')
              setOrderCreateTitleValid(true)
                toast('عملیات موفقیت آمیز بود', {type: toast.TYPE.SUCCESS})
            }
            if(res.data.state === 2 || res.data.state === 3 || res.data.state === 4 || res.data.state === 5 ) {
                toast(res.data.message, {type: toast.TYPE.ERROR})
            }
        }).catch(err => {
            console.log(err)
            setLoading(false)
            toast('خطای شبکه', {type: toast.TYPE.ERROR})
        })
      }else{
          toast('خواندن و تایید قوانین الزامیست', {type: toast.TYPE.ERROR})
      }
    }
  }

  const orderCreateMsgChangeHandler = e => {
    setOrderCreateMessage(e.target.value)
  }

  const orderCreateTitleChangeHandler = e => {
      setOrderCreateTitle(e.target.value)
  }

  const rulesModalShowHandler = () => {
    setRulesModalShow(true)
  }
  const hideRulesModal = () => {
    setRulesModalShow(false)
  }

  return (
    <>
      <input onChange={e => orderCreateTitleChangeHandler(e)}
      value={orderCreateTitle}
      placeholder="عنوان"
      className={orderCreateTitleValid && orderCreateTitleAndMessageValid ?
          classes.orderCreateModalTitle :
          classes.orderCreateModalTitleInvalid}
      />
      <textarea onChange={e => orderCreateMsgChangeHandler(e)}
      value={orderCreateMessage}
      placeholder="توضیحات"
      className={orderCreateMessageValid && orderCreateTitleAndMessageValid ? 
          classes.orderCreateModalTextarea :
          classes.orderCreateModalTextareaInvalid }>
      </textarea>

      <p className={classes.orderCreateRuleCheckKeeper}>
          <input type="checkbox" id="orderRulesCheck"
          checked={orderRulesCheck}
          onChange={orderRulesCheckboxChange}
          />
          <label htmlFor="orderRulesCheck">
              را خوانده و قبول دارم
          </label>
          <span className={classes.orderRulesCheckModalToggler}
          onClick={rulesModalShowHandler}>قوانین</span>
      </p>

      <div className={classes.orderCreateModalButtonsBox}>
          <button className={classes.orderCreateModalButton}
          disabled={loading}
          onClick={() => orderCreate()}>
            {
              loading ?
              'صبور باشید' :
              'ثبت سفارش'
            }  
          </button>
      </div>

      <RulesModal
        show={rulesModalShow}
        hideRulesModal={hideRulesModal}
      />
      
    </>
  )
}

export default OrderCreateInputs
