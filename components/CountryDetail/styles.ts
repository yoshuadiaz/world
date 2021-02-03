import styled from "styled-components"

export const CountryName = styled.h1`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 3rem;
  margin: 1rem 0;
`
export const CountryInfo = styled.p`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  span {
    font-weight: 500;
  }
`

export const CountryInfoItem = styled.span`
  span {
    color: ${(props) => props.theme.colors.primary.dark};
    font-weight: 300;
    font-size: 0.75rem;
  }
`
