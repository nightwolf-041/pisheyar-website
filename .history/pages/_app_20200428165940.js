import App from 'next/app'
import { globalStoreProvider } from '../components/globalStore';

import '../styles/global.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <globalStoreProvider>
        <Component {...pageProps} />
      </globalStoreProvider>
    )
  }
}

export default MyApp
