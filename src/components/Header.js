import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <NavLink
                exact
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                exact
                to="/about"
            >
                About
            </NavLink>

            <NavLink
                exact
                to="/impressum"
            >
                Impressum
            </NavLink>


        </nav>
    )
}
