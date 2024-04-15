import React from 'react'
import Geo from '../assets/img/geo.png'
import Logo from '../assets/img/logo.png'
import SearchIcon from '../assets/icons/search.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className="upper-header">
            <div className="language-icons">
                <img src={Geo} alt="" />
            </div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="search-field">
                <img src={SearchIcon} alt="" />
            </div>
        </div>
        <nav>
            <ul className='content-container'>
                <li>
                    <NavLink to={'/'}>მთავარი</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>კატალოგი</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>ჩვენ შესახებ</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>კონტაქტი</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header