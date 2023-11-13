// import {Theme} from '../styles/theme';

// export default function App({Component, pageProps}){
//     return(
//         <>
//         <Theme>
//             <Component {...pageProps}/>    
//         </Theme></>
//     );
// }






import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 