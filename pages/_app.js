import React from 'react'
import NextApp from 'next/app'
import '../style/style.css';
import { ThemeProvider } from 'styled-components'
const theme = {
  primary: 'green',
}


export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
// import '../style/style.css';
// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }