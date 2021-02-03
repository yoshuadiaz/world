import styled from "styled-components"

export const LayoutWrap = styled.main`
  max-width: ${(props) => props.theme.screen.xl};
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: ${(props) =>
    props.withSidebar ? "200px 1fr" : "1fr"};
  column-gap: 1rem;
`
export const LayoutContent = styled.section``
