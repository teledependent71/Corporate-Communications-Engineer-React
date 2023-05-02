import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Communications Engineer</title>
        <meta property="og:title" content="Corporate Communications Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
