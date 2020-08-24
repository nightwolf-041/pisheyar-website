
import React from 'react'
import axios from 'axios'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Link from "next/link";
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import OrderCreateInputs from './OrderCreateInputs'
import OrderCreateLogin from './OrderCreateLogin'
import classes from './orderCreateModal.module.scss'


const OrderCreateModal = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies();

    const redirectToPanel = () => {
        document.location.href = "http://panel.pisheplus.com";
    }

    return (
        <>
            <div className={!props.hidden ? classes.orderCreateModalBackdrop : classes.orderCreateModalBackdropHide}
            onClick={props.hideOrderCreateModal}>
            </div>

            <div className={!props.hidden ? classes.orderCreateModal : classes.orderCreateModalHidden}>
                <PerfectScrollbar>
                    <div className={classes.orderCreateModalInside}>
                        <FontAwesomeIcon icon={faTimes}
                        onClick={props.hideOrderCreateModal}
                        className={classes.orderCreateModalCloseIcon} />
                        {cookies.token !== null && cookies.token !== undefined &&
                            <h4 className={classes.orderCreateModalLabel}>
                                ثبت سفارش در {props.orderCreateModalLabel}
                            </h4>
                        }

                        {cookies.token !== null && cookies.token !== undefined ? 
                        <OrderCreateInputs categoryGuid={props.orderCreateModalGuid} />
                        :
                        <OrderCreateLogin />
                        // <p className={classes.orderCreateModalLabel2}>
                        //     جهت ثبت سفارش باید ابتدا وارد پنل کاربری خود شوید.
                        // </p>
                        // <div className={classes.orderCreateModalButtonsBox}>
                        //     <button className={classes.orderCreateModalButton}
                        //     onClick={() => redirectToPanel()}>
                        //         <a className={classes.orderCreateModalButtonLink}>
                        //             انتقال به پنل کاربری
                        //         </a>
                        //     </button>
                        // </div>
                        }
                    </div>
                </PerfectScrollbar>
            </div>
        </>
    )
}

export default OrderCreateModal

