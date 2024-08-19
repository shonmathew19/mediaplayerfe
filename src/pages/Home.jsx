import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadVideoStatus, setuploadVideoStatus] = useState({})
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add_video">
          <Add setuploadVideoStatus = {setuploadVideoStatus}/>
        </div>
        <Link to='/watch' >
          <button className='btn btn-warning'>WATCH HISTORY</button>
        </Link>
      </div>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="all-videos">
          <h4 className='textStyle'>All videos</h4>
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className="category textStyle">
          <Category />
        </div>
      </div>

    </>
  )
}

export default Home