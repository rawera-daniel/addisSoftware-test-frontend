import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
  // <Global
  //   styles={css`
  //     /* Your global styles here */
  //     body {
  //       margin: 0;
  //       padding: 0;
  //       font-family: 'Roboto', sans-serif;
  //     }
  //   `}
  // />
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: 'Poppins', sans-serif;
        color: #4b5563;
        line-height: 1.5;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      ul {
        list-style-type: none;
      }
    `}
  />
)

export default GlobalStyles
