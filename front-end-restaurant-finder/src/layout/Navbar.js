import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`/`}>
                <img src="https://raw.githubusercontent.com/panu2306/learn-cpp/main/assets/food-pin-svgrepo-com.svg" width="40" height="40" class="d-inline-block align-top" alt=""></img>
                Restaurant Finder App</Link>
            </div>
        </nav>
    </div>
  )
}
