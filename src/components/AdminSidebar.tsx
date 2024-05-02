import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../assets/icons/logout.png'
import Star from '../assets/icons/star.png'
import Inventory from '../assets/icons/inventory.png'
import Leads from '../assets/icons/leads.png'
import useAuthStore from '../store'

function AdminSidebar() {
    const {setIsAuthenticated} = useAuthStore()
    
    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn')
        setIsAuthenticated(false)
    }

  return (
    <div id='admin-sidebar'>
        <div className="admin-page-link">
            <NavLink to={'/admin/bestSellers'}>
                <img src={Star} alt="" />
                Best Sellers
            </NavLink>
            <NavLink to={'/admin/products'}>
                <img src={Inventory} alt="" />
                Products
            </NavLink>
            <NavLink to={'/admin/leads'}>
                <img src={Leads} alt="" />
                Leads
            </NavLink>
        </div>
        <div className="logout" onClick={handleLogout}>
            <img src={Logout} alt="" />
            Logout
        </div>
    </div>
  )
}

export default AdminSidebar