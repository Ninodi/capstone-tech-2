import React, { useRef, useState, useEffect } from 'react'
import Logo from '../assets/img/logo.png'
import SearchIcon from '../assets/icons/search.png'
import { NavLink } from 'react-router-dom'
import Arrow from '../assets/icons/arrow.png'
import BurgerMenu from '../assets/icons/burgerMenu.png'
import LanguageDropdown from './LanguageDropdown'

function Header() {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null); // Reference for the navigation menu

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (!dropdownRef.current?.contains(event.target as Node) &&!navRef.current?.contains(event.target as Node)) {
        setToggleDropdown(false)
        setToggleNav(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])


  return (
    <header>
      <div className="upper-header content-container">
        <div className='burger-menu' onClick={() => setToggleNav(prev => !prev)}>
          <img src={BurgerMenu} alt="" />
        </div>
        <div className="language-icons-deskt">
          <LanguageDropdown />
        </div>
        <NavLink to={'/'} className="logo">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="search-field">
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      <nav className={`"burger-menu" ${toggleNav ? 'open' : ''}`} ref={navRef}>
        <ul className='content-container'>
          <li>
            <NavLink to={'/'}>მთავარი</NavLink>
          </li>
          <li>
            <div className="catalogue-container" ref={dropdownRef}>
              <div className={`catalogue-btn ${toggleDropdown ? 'active' : ''}`} onClick={() => setToggleDropdown(prev => !prev)}>
                <p>კატალოგი</p>
                <div className="catalogue-arrow">
                  <img src={Arrow} alt="" />
                </div>
              </div>
              <div className={`catalogue-dropdown ${toggleDropdown ? 'active' : ''}`}>
                <NavLink to={'/catalogue/wiwaka'}>წიწაკა</NavLink>
                <NavLink to={'/catalogue/juja-pomidori'}>ჯუჯა წიწაკა</NavLink>
                <NavLink to={'/catalogue/baziliki'}>ბაზილიკი</NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink to={'/about'}>ჩვენ შესახებ</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>კონტაქტი</NavLink>
          </li>
          <div className="language-icons-mob">
            <LanguageDropdown />
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
