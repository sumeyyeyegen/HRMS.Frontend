import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

function SignedOut({ signIn }) {
  return (
    <div className="d-inline">
      <Link to='/' onClick={() => signIn()} className='btn login-btn py-2 px-4 rounded shadow '>
        Log in
      </Link>
      <Link to='/' className='btn signup-btn py-2 px-4 rounded shadow'>
        Sign up
      </Link>
    </div>
  )
}

export default SignedOut
