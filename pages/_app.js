import React from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import App from 'next/app'
import { ToastContainer, toast } from 'react-toastify';

import '../styles/main.scss';
import '../styles/checkbox.scss';
import 'swiper/css/swiper.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import 'react-toastify/dist/ReactToastify.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// function MyWrapper({children}) {
//   const [cookies, setCookie, removeCookie] = useCookies(['token']);
//   axios.interceptors.response.use(response => {
//     return response;
//   }, error => {
//     if (error.response.status === 401) {
//       removeCookie('token', {path: '/', domain: '.pisheplus.com'})
//     }
//     return error;
//   });
//   return <>{children}</>
// }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={4000}
          position={toast.POSITION.BOTTOM_CENTER}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnVisibilityChange={false}
          pauseOnHover={false}
          rtl
      />
      </>
    )
  }
}

export default MyApp
