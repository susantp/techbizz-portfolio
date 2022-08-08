import '../styles/globals.css'
import {Component} from "react";

function MyApp({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
