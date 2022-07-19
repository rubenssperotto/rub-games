import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)

  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Rub Games</title>
        <link rel="shortcut icon" href="/img/icon-control.png" />
        <link rel="apple-touch-icon" href="/img/icon-control.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Loja de Jogos Rub Games" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
