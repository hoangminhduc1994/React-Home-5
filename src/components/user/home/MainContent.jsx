import React from 'react'
import MainTitle from '../common/MainTitle'
import Content from './Content'
import Footer from '../common/Footer'

const MainContent = () => {
  return (
    <>
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
        <MainTitle/>
        <Content/>
        <Footer/>
      </main>
    </>
  )
}

export default MainContent