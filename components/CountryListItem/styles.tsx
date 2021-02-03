import styled from "styled-components"
import Link from "next/link"

export const CountryLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary.main};
`

export const CountryWrapper = styled.article`
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0 0.125rem ${(props) => props.theme.colors.gray};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  transition: all 200ms ease-in;

  &:hover {
    position: relative;
    z-index: 10;
    box-shadow: 0 0.25rem 0.25rem ${(props) => props.theme.colors.gray};
    transform: scale3d(1.025, 1.025, 1.025);
  }
`
export const CountryName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary.main};
`
export const CountryCode = styled.h4`
  position: absolute;
  font-size: 8rem;
  margin: 0;
  opacity: 0.05;
  right: 0.5rem;
  top: 0.5rem;
  color: ${(props) => props.theme.colors.primary.dark};
  line-height: 1em;
`

export const CountryInfo = styled.ul`
  list-style: none;
  padding: 0;
`

export const CountryData = styled.li`
  padding: 0.25rem 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`
export const CountryDataLabel = styled.span`
  font-weight: bold;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.colors.primary.lighter};
`
