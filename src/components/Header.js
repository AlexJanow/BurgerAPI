import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
export const Header = () => {
    return (
        <nav className="Header__nav">
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
