// import  Accomplishments from '../components/Accomplishments/Accomplishments'
// import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
// import Hero from '../components/Hero/Hero'
// import Projects from '../components/Projects/Projects'
// import Technologies from '../../src/components/Technologies/Technologies'
// import {Layout } from '../layout/Layout'
// import { Section } from '../styles/GlobalComponents'
// import TimeLine from '../components/TimeLine/TimeLine'
// // import { ReactDOM  } from 'react-dom'
// // import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// const Home = () => {
//     return (
//         // <Router>
//         //     <Routes>
//         <Layout>
//                 <Section grid />
//             <Hero />
//             <BgAnimation />
//             <Section />
//                 <Projects /> 
//                 <Technologies />
//                 <TimeLine />
//                 <Accomplishments />

         
//         </Layout>
//             // {/* <Route path='/' element={<Home />} />
//             // <Route exact path='./Home' element={<Home/>}> </Route>
//             // </Routes>
//             //     </Router> */}
//     )
// }
// // export default dynamic {() => Promise.resolve(Home),(ssr : false)};
// export default Home





import  Accomplishments from '../components/Accomplishments/Accomplishments'
// import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
};

export default Home;