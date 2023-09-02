import { createGlobalStyle } from 'styled-components'
import '@radix-ui/themes/styles.css'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%,
  }
`

export default GlobalStyle
