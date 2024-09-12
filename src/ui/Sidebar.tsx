import React from 'react'
import styled from '@emotion/styled'

const StyledSidebar = styled.aside`
  /* background-color: red; */
  padding: 3.2rem 2.4rem;
  border-right: 1px solid #f3f4f6;
  grid-row: 1 / -1;
`

function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>
}

export default Sidebar
