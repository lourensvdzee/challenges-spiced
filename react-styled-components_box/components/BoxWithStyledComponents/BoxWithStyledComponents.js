// import styled from "styled-components";

// export default function BoxWithStyledComponents({ isBlack }) {
//     const backgroundColor = isBlack ? "black" : "green";

//     return <StyledBox backgroundColor={backgroundColor} />;
// }

// const StyledBox = styled.div`
//   background-color: ${props => props.backgroundColor};
//   width: 150px;
//   height: 150px;
//   margin: 2rem;

//   &:hover {
//     background-color: red;
//   }
// `;

import styled from "styled-components";

const BoxWithStyledComponents = styled.div`
  background-color: ${props => (props.isBlack ? "black" : "green")};
  width: 150px;
  height: 150px;
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

export default BoxWithStyledComponents;
