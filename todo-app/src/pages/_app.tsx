import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-quill/dist/quill.snow.css'

import theme from 'theme'
import AppProvider from '../hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <title>NextJS with Chakra-ui Boilerplate</title>
          <link rel="shortcut icon" href="/img/chakra-logo.png" />
          <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="NextJS with Chakra-ui Boilerplate"
          />
        </Head>

        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  )
}

export default MyApp
