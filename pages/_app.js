import '../styles/globals.scss'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {

const theme=extendTheme({
  colors:{
    brand:{
      100:"#C5C6C7",
      200:"#66FCF1",
      300:"#45A29E",
      700:"#393E46",
      800:"#1F2833",
      900:"#0B0C10"
    }
  }
})

  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
