import App from 'next/app'
import { globalProvider } from '../components/globalStore';

import '../styles/global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <globalProvider>
        <Component {...pageProps} />
      </globalProvider>
    )
  }
}

export default MyApp
