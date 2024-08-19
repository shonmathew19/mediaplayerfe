import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='footer d-flex justify-content-evenly align-items-center'>
        <div style={{ width: '400px' }}>
          <h5 className='textStyle'><i className="fa-solid fa-video text-warning me-3 " ></i>Media Player</h5>
          <p className='textStyle' style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione et, architecto necessitatibus illum repellat in nemo. Vel facere pariatur ut unde soluta harum placeat dolorum! Maiores provident eum porro quisquam.</p>
        </div>
        <div className='d-flex flex-column ms-5'>
          <h4 className='textStyle'>Links</h4>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            Landing Page
          </Link>
          <Link to='/home' style={{ textDecoration: 'none', color: 'white' }} >
            Home Page
          </Link>
          <Link to='/watch' style={{ textDecoration: 'none', color: 'white' }}>
            Watch history
          </Link>
        </div>
        <div className='d-flex flex-column ms-5'>
          <h4 className='textStyle'>Guides</h4>
          <Link to='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>
            React
          </Link>
          <Link to='https://react-bootstrap.netlify.app/docs/getting-started/introduction' target='_blank' style={{ textDecoration: 'none', color: 'white' }} >
            React Bootstrap
          </Link>
          <Link to='https://www.npmjs.com/package/json-server' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>
            Json sever
          </Link>
        </div>
        <div className='ms-5'>
          <h4 className='textStyle'>Contact us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='enter your email id' />
            <button className='btn btn-danger ms-3'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly mt-3'>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-reddit fa-2x"></i></Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer