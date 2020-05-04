import App from 'next/app'
import { stateProvider } from '../components/globalStore'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <stateProvider>
        <Component {...pageProps} />
      </stateProvider>
    )
  }
}

export default MyApp
