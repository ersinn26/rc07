import logo from '../assets/logo.png'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img style={{ width: "300" , display: "block", margin: "auto"}} src={logo} alt="" />
      <h1 style={{textAlign: "center", color: "orange"}}>NBA Legends</h1>
    </div>
  )
}

export default Header
