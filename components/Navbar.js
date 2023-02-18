import React from 'react'
import { Link , NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <NavLink className='ho' style={{color:'red'}} to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <Link to='/contact'>Contact</Link>
        <Link to='/users'>User</Link>
        <Link to ='/gallery'>Gallery</Link>

    </div>
  )
}

export default Navbar