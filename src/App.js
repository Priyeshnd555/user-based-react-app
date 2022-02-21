import React from 'react'
import Admin from './components/admin/Admin'
import User from './components/userPage/User'
import LoginPage from './components/loginPage/LoginPage'
import HomePage from './components/homePage/HomePage'

function App() {
  return (
    <div>
    <LoginPage/>
    <HomePage/>
    <Admin />
    <User/>
    </div>
  )
}

export default App