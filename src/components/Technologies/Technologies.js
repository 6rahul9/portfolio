// import React from'react';

// import {DiFirebase, DiReact, DiZend} from 'react-icons/di';
// import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';

// import {List, ListConatiner, ListItem,  ListParagraph, ListTitle} from './TechnologiesStyles';


// const Technologies = () => {
//     <Section  id='tech'>
//         <SectionDivider />
//         <SectionTitle>Technologies</SectionTitle>
//         <SectionText>gyusdgsduywegfsbcywegtcwebsdcwv tf235r23 ryt87t234wfgweiuogfy239tr y2oify2[2ry3w4iugnet6b84er65b4e+trg 35g873rgieur]</SectionText>
//         <List >
//             <ListItem>
//                 <DiReact size='3rem' />
//                 <ListConatiner>
//                     <ListTitle>Front-End</ListTitle>
//                     <ListParagraph>
//                         Experenced with <br/>
//                         React.js
//                     </ListParagraph>
//                 </ListConatiner>
//             </ListItem>


//             <ListItem>
//                 <DiFirebase size='3rem' />
//                 <ListConatiner>
//                     <ListTitle>Front-End</ListTitle>
//                     <ListParagraph>
//                         Experenced with <br/>
//                         Node.js and Database
//                     </ListParagraph>
//                 </ListConatiner>
//             </ListItem>


//             <ListItem>
//                 <DiZend size='3rem' />
//                 <ListConatiner>
//                     <ListTitle>Java</ListTitle>
//                     <ListParagraph>
//                         Experenced with <br/>
//                         tools like J2EE
//                     </ListParagraph>
//                 </ListConatiner>
//             </ListItem>
//         </List>
//     </Section>
    
// }
//  export default Technologies;








import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;