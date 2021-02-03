import styled from "styled-components"

export const SidebarNav = styled.aside`
  position: sticky;
  top: 8rem;
`
export const SidebarFilter = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;

  label {
    color: ${({ theme }) => theme.colors.secondary.dark};
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  select {
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }
`

export const SidebarSearch = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0.5rem;
  border-radius: 0.25rem;
`
export const SidebarContent = styled.div`
  position: sticky;
  top: 8rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 0 0.125rem ${({ theme }) => theme.colors.gray};
  border-radius: 0.25rem;
  h3:first-child {
    margin-top: 0;
  }
`
