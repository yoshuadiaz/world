import React from "react"
import { HeaderWrap, HeaderContainer, HeaderBrand } from "./styles"
import Link from "next/link"

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <HeaderBrand>
          <Link href="/">CREHANA World</Link>
        </HeaderBrand>
      </HeaderContainer>
    </HeaderWrap>
  )
}

export default Header
