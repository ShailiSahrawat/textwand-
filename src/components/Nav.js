import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link exact to="/about">About</Link></li> */}
        <li><Link  to="/contact">Contact</Link></li>
        <li><Link to="/tutorial">Tutorial</Link></li>
      </ul>
      {/* <div>This is home page</div> */}
    </div>
  )
}

export default Nav
