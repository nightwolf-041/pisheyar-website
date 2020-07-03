import App from 'next/app'
import { GlobalStore } from '../components/globalStore';

import '../styles/main.scss';
import 'swiper/css/swiper.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <GlobalStore>
        <Component {...pageProps} />
      </GlobalStore>
    )
  }
}

export default MyApp
