import {createGlobalStyle} from 'styled-components'
// import { themes } from './ColorStyles'

export const GlobalStyle = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`
export const lightTheme = {
    body: '#f2f6ff',
    text: '#121620'
}

export const darkTheme = {
    body: '#1F1F47',
    text: 'f1f1f1'
}

// body {
//     background: ${themes.light.backgroundColor};
//     @media (prefers-color-scheme: dark) {
//         background: ${themes.dark.backgroundColor}
//     }
// }