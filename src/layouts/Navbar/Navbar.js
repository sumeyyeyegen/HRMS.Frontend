import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './scss/Navbar.scss'
import SignedIn from '../SignedIn/SignedIn'
import SignedOut from '../SignedOut/SignedOut'

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
  }
  const handleSignIn = () => {
    setIsAuthenticated(true);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bolder navbar-title" to="#">HRMS</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Link className="list-item" to="/"><span><i className="bi bi-house" />Home</span></Link>
            <Link className="list-item" to="/"><span><i className="bi bi-search" />Search</span></Link>
            <Link className="list-item" to="/"><span><i className="bi bi-info-circle" />About</span></Link>
            <Link className="list-item" to="/"><span><i className="bi bi-card-text" />Post</span></Link>
          </ul>
          <div className="">
            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </div>
        </div>
      </div >
    </nav >
  )
}

export default Navbar
