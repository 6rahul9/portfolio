// import React from 'react';
// import { BlogCard, CardInfo, ExternalLinks,
//          GridContainer, HeaderThree, Hr, Tag , Taglist,
//          TitleContent, UtilityList, Img } from './ProjectsStyles';

// import { Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
 
// import { projects } from '../../constants/constants';

// // const projectDemo = [{
// //     title: 'Projects 1 ',
// //     description: "This is  a Long description about my project"
// // },{
// //     title: 'Projects 2 ',
// //     description: "This is  a Long description about my project"
// // },{
// //     title: 'Projects 3 ',
// //     description: "This is  a Long description about my project"
// // },{
// //     title: 'Projects 4 ',
// //     description: "This is  a Long description about my project"
// // }];


// const Projects = () => (
//    <Section nopadding id='projects'>
//     <SectionDivider />
//     <SectionTitle main>Projects</SectionTitle>
//     <GridContainer>
//         {projects.map((title, description, images, tags,source, visit, id) => (
//             // <div>
//             //     {project.title}
//             //     <br/>
//             //     {project.description}
//             // </div>
//                 <BlogCard key={id}>
//                     <Img src={images}/>
//                     <TitleContent>
//                         <HeaderThree title>{title}</HeaderThree>
//                         <Hr/>
//                     </TitleContent>
//                     <CardInfo>{description}</CardInfo>
//                     <div>
//                         <TitleContent>Stack</TitleContent>
//                         <Taglist>
//                             {tags.map((tag,i) => (
//                                 <Tag key={i}>{tag}</Tag>
//                             ))}
//                         </Taglist>
//                     </div>
//                     <UtilityList>
//                         <ExternalLinks href ={visit}>Code</ExternalLinks>
//                         <ExternalLinks href ={source}>Source</ExternalLinks>
//                     </UtilityList>
//                 </BlogCard>
//         ))};

//     </GridContainer>

//    </Section>
// );

// export default Projects;








import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;