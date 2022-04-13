import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
  const type = useSelector((state) => (state.user.errorType))
  const message = 
  (type === 'Invalid Credentials') ? 'Invalid Credentials!!!' : 
  (type === 'Invalid Password') ? 'Wrong Password!!!' : 
  (type === 'Empty Fields') ? 'Fill all the fields!!!' : 
  (type === 'Existing User') ? 'User Already Exist!!!' : 
  (type === 'Mismatch Password') ? 'Password Mismatch!!!' : 
  (type === 'Registered') ? 'Successfully Registered!!!' : 
  '';
  return (
    <h1 className={type === 'Registered'? 'success__message' : 'error__message'}>{message}</h1>
  )
}

export default Error