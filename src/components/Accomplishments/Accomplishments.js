// import React from 'react';

// import {Section, SectionDevider, SectionTitle} from '../../styles/GlobalComponents'

// import {Box, Boxes, BoxNun, BoxText} from './AccomplishmentsStyles'

// const data =[

//     { number : 20, text: 'Open Source Projects'},
//     { number : 1000, text: 'Students'},
//     { number : 1900, text: 'Github Followers'},
//     { number : 5000, text: 'GitHub Stars'},
// ];

// const Accomplishments = () => {
//     <Section> 
//         <SectionTitle> Personal Accomplishments</SectionTitle>
//         <Boxes> 
//             {data.map((card, index) => (
//                 <Box key = {index} >
//                     <BoxNun> {`${card.number} +`}</BoxNun>
//                     <BoxText> {card.text}</BoxText>
//                 </Box>
//             ))}
//         </Boxes>
//         <SectionDevider />
//     </Section>
// }

// export default Accomplishments;








import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;