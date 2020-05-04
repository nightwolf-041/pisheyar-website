import App from 'next/app'
import { storeProvider } from '../components/globalStore'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <storeProvider>
        <Component {...pageProps} />
      </storeProvider>
    )
  }
}

export default MyApp
