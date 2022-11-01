import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserImage from '../../assets/images/userImages2.jpg'
import './scss/SignedIn.css';

function SignedIn({ signOut }) {

  const [toggleMenuValue, setToggleMenuValue] = useState(false);

  const toggleMenu = () => {
    setToggleMenuValue(!toggleMenuValue)
  }
  const toggle = (toggleMenuValue) ? "show" : "advert-modal";
  return (
    <div>
      <div className="dropdown">
        <div className=" d-flex align-items-center">
          <img src={UserImage} alt="" className="user-image" />
          <div className="m-1">Sümeyye yeğen</div>
          <button className="btn btn-light dropdown-toggle" onClick={toggleMenu} />
        </div>
        <div className={`dropdown-menu ${toggle}`}>
          <Link to="/info" className="d-block dropdown-menu-item">Bilgilerim</Link>
          <Link to="/" className="dropdown-menu-item" onClick={() => signOut()}>Çıkış yap</Link>
        </div>
      </div>
    </div >
  )
}

export default SignedIn
