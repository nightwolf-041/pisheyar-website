import App from 'next/app'
import { GlobalStore } from '../components/globalStore';

import '../styles/main.scss'

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
