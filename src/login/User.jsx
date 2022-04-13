import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from '../App.style'
import { selectUser } from '../app/userSlice';
import Login from './Login'
import Logout from './Logout'

const User = () => {
    const user = useSelector(selectUser);

  return (
    <Container>
        {user ? <Logout/> : <Login/>}
    </Container>
  )
}

export default User