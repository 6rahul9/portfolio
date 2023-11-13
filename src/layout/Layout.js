// import React from 'react';
// import Footer from '../components/Footer/Footer';
// import Header from '../components/Header/Header';
// import { Container } from './LayoutStyles';

// export const Layout = ({childern }) => {
//     returm(
//         <Container>
//             <Header/>
//              <main>{childern}</main>
//             <Footer/>
//         </Container>
//     )
// }







import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}