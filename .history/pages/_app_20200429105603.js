import App from 'next/app'
import { GlobalStoreProvider } from '../components/globalStore';

import '../styles/main.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <GlobalStoreProvider>
        <Component {...pageProps} />
      </GlobalStoreProvider>
    )
  }
}

export default MyApp
