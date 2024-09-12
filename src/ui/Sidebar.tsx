import React from 'react'
import styled from '@emotion/styled'
import MainNav from './MainNav'

const SidebarHead = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  padding: 1.2rem 2.4rem;
`

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  border-right: 1px solid #f3f4f6;
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarHead>Library</SidebarHead>
      <MainNav />
    </StyledSidebar>
  )
}

export default Sidebar
