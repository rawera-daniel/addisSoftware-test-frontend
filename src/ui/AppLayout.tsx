import React from 'react'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.main`
  background-color: #f9fafb;
  padding: 4rem 4.8rem 6.4rem;
`

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  )
}
