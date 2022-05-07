import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  /* Nesting like SaSS
  h1 {
    color: red;
  }

  Same as SaSS 
  &:hover {
    background-color: #ccc;
  } */
`;