import React from 'react'
import Home from '../Home/Home'

const LoginSignup = () => {

  let logStatus = window.location.pathname.split('/')[2];

  return (
    <div>
        <Home logStatus= {logStatus}/>
    </div>
  )
}

export default LoginSignup
