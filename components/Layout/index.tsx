import Header from "@components/Header"
import Sidebar from "@components/Sidebar"
import { Filter } from "dtos/filter.dto"
import React from "react"
import { LayoutContent, LayoutWrap } from "./styles"

interface LayoutProps {
  children: React.ReactNode
  sidebar?: {
    searchValue: string
    handleOnSearch: (value: string) => void
    filters: Filter[]
  }
}

const Layout = ({ children, sidebar }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutWrap withSidebar={!!sidebar}>
        {!!sidebar && <Sidebar {...sidebar} />}
        <LayoutContent>{children}</LayoutContent>
      </LayoutWrap>
    </>
  )
}

export default Layout
