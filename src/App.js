import React from 'react'
import Admin from './components/admin/Admin'
import User from './components/userPage/User'
import LoginPage from './components/loginPage/LoginPage'

function App() {
  return (
    <div>
    <LoginPage/>
    <Admin />
    <User/>
    </div>
  )
}

export default App