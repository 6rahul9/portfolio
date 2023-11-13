// import { ThemeProvider } from "styled-components";
// import theme from '../themes/default';
// import { GlobalStyles } from "./globals";

// const Theme = ({childern}) => (
//     <ThemeProvider theme={theme}>
//         <GlobalStyles />
//          {childern}
//     </ThemeProvider>
// )

// export default Theme;




import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;