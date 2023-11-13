// import React from 'react';
// import {ButtonBack, ButtonFront} from './index';

// const Button = (props)=> (
//     <ButtonBack alt={props.alt}
//                 from={props.from}
//                 disabled={props.disabled}>
//                     {props.childern}

//         <ButtonFront alt={props.alt}
//                     onClick={props.onClick}
//                     disabled={props.disabled}   >
//                         {props.childern}
//         </ButtonFront>
                
                    
//      </ButtonBack>
// )

// export default Button;






import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button