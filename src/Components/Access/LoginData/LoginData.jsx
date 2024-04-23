import React from 'react'
import { useState, useEffect } from 'react'
import LogCusLanding from '../../Pages/Customer/LogCusLanding/LogCusLanding'

const LoginData = () => {

    const [email, setEmail] = useState('')

    const passdata = () => {
        setEmail(window.location.pathname.split('/').pop())
    }

    useEffect(() => {
        passdata();
    }, [])
    
  return (
    <LogCusLanding email={email}/>
  )
}

export default LoginData
