import React from 'react'
import './index.css'

import Navbar from './components/Navbar/Navbar'
import Leftnav from './components/Leftnav/Leftnav'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='dash_container'>
      <navbar className="topNavbar"> <Navbar /></navbar>
      <div className="content">
        <aside className="sideNavbar"> <Leftnav /></aside>
        <div className="dashBoard"> <Dashboard /></div>
      </div>
      <footer><Footer /></footer>
    </div>
  )
}

export default App