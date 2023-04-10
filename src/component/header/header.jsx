import React from 'react'
import logo from "../../Logonetflix.png"
import {Link} from "react-router-dom"
// import {BiSearch} from "react-icons/bi"
export function Header() {
  return (
    <nav className='header'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/popular">Popular on Netflix</Link>
            <Link to="/mylist">My List</Link>
        </div> */}
        {/* <BiSearch /> */}
        <Link to="/profile">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"} alt="logo" />
        </Link>
    </nav>
  )
}

export default Header