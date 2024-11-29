import React from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div>
      <div className="head">
      <Hero />
      </div>
      <div className="body">
        <Menu />
      </div>
      <div className='footer'>
        footer
      </div>
    </div>
  )
}

export default Home
