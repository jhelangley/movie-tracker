import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'



export const Header = () => {
  return (
    <>
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shows">Shows</NavLink>
            <NavLink to="/search">Search shows</NavLink>
        </nav>
    </header>
    <Outlet />
    </>
  )
}

export default Header;
