import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from './shared/Card'

const NavLinks = () => {
  return (
    <Card>
        <NavLink to='/' activeclassname='active'>
            Home
        </NavLink>
        <NavLink to='/about' activeclassname='active'>
            About
        </NavLink>
    </Card>
  )
}

export default NavLinks
