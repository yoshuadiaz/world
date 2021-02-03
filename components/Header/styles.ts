import styled from "styled-components"

export const HeaderWrap = styled.header`
  background: ${(props) => props.theme.colors.white};
  margin: 0;
  display: flex;
  color: ${(props) => props.theme.colors.black};
  position: sticky;
  top: 0;
  z-index: 9000;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`

export const HeaderContainer = styled.div`
  max-width: ${(props) => props.theme.screen.xl};
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  align-items: center;
`
export const HeaderBrand = styled.h1`
  color: ${(props) => props.theme.colors.primary.main};
  padding: 1rem;
  align-items: center;
  display: flex;
`
