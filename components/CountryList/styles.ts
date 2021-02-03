import styled from "styled-components"

export const CountryListContent = styled.section`
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.screen.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
