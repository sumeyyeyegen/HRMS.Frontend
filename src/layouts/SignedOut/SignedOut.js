import React from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/isAuthenticatedActions'
import { Link } from 'react-router-dom'

function SignedOut() {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn());
  }
  return (
    <div className="d-inline">
      <Link to='/' onClick={() => handleSignIn()} className='btn login-btn py-2 px-4 rounded shadow '>
        Log in
      </Link>
      <Link to='/' className='btn signup-btn py-2 px-4 rounded shadow'>
        Sign up
      </Link>
    </div>
  )
}

export default SignedOut
