// import styled from "styled-components";

// export const LeftSection = styled.div`
//     width: 100%;
//     display: flex;


//     @media ${props => props.theme.breakpoints.sm }{
//         width: 50%;
//         display: flex;
//         flex-direcction: column;
//         margin: 0 auto;
//     }

//     @media ${props => props.theme.breakpoints.md }{
//         width: 100% ;
//         dissplay: flex;
//         flex-direction: column;
//         margin: 0 auto;
//     }
// `;







import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;