import React, { useState } from 'react'
import useAuthStore from '../store'
import { useNavigate } from 'react-router-dom'

function AdminLoginForm() {
    const {setIsAuthenticated} = useAuthStore()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (username.trim() !== '' && password.trim() !== '') {
            setIsAuthenticated(true)
            sessionStorage.setItem('isLoggedIn', 'true')
            navigate('/admin/bestSellers')
        } else {
            console.log("Invalid credentials")
        }
    }

  return (
    <div className='content-container'>
        <div className="admin-login-form" onSubmit={(e) => handleLogin(e)}>
            <form id='admin-login-form'>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default AdminLoginForm