import React from 'react'
import SidebarMenu from '../common/SidebarMenu'
import MainContent from './MainContent'
const Body = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      {/* SIDEBAR MENU  */}
      <SidebarMenu/>
      {/* MAIN CONTENT */}
      <MainContent/>
    </div>
  </div>
    </>
  )
}

export default Body