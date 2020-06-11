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
      <html lang='en_RU'>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </html>
    )
  }
}
