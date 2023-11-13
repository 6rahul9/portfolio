// import React from 'react';

// import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

// import {SocialIcons} from '../Header/HeaderStyles';
// import {CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkTitle, Slogan, SocialContainer, SocialIconsContainer} from './FooterStyles';

// const Footer =() =>{
//     return(
//         <FooterWrapper>
//             <LinkList>
//                 <LinkColumn>
//                     <LinkTitle>Call</LinkTitle>
//                     <LinkItem href='7770084548'>7770084548</LinkItem>
//                 </LinkColumn>

//                 <LinkColumn>
//                     <LinkTitle>E-Mail</LinkTitle>
//                     <LinkItem href='rahulmohature0421@gmail.com'>rahulmohature0421@gmail.com</LinkItem>
//                 </LinkColumn>
//             </LinkList>
            
//             <SocialIconsContainer>
//                 <CompanyContainer>
//                     <Slogan>One Project at a Time.</Slogan>
//                 </CompanyContainer>

//                 <SocialContainer>

//                     <SocialIcons href='https://github.com'>
//                         <AiFillGithub size={'3rem'} />
//                     </SocialIcons>
                    
//                     <SocialIcons href='https://linkedin.com'>
//                         <AiFillLinkedin size={'3rem'} />
//                     </SocialIcons>

//                     <SocialIcons href='https://instagram.com'>
//                         <AiFillInstagram size={'3rem'} />
//                     </SocialIcons>

//                 </SocialContainer>
//             </SocialIconsContainer>
//         </FooterWrapper>
//     )    
// }

// export default Footer;









import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">314-343-3432</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            contact@jsmastery.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://google.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;