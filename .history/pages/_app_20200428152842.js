import App from 'next/app'
import { globalStore } from '../components/globalStore'

import '../styles/global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <globalStore>
        <Component {...pageProps} />
      </globalStore>
    )
  }
}

export default MyApp
