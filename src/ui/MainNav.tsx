import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #4b5563;
    /* color: #9ca3af; */
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #1f2937;
  }
`

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="allsongs">Songs</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="stats">Song Analytics</StyledNavLink>
        </li>
      </NavList>
    </nav>
  )
}

export default MainNav
