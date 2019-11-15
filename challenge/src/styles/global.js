import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600i,700&display=swap');
  * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
        box-sizing : border-box;
        font-family: 'Open Sans', sans-serif;
    }
`

export default GlobalStyle;