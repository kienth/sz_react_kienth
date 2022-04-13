import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../app/userSlice'

const Logout = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => (state.user.user_logged_in))
  return (
    <div className='logout'>
        <h1>Welcome <span className='user__name'>{name.name}</span></h1>
        <button className='logout__button' onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Logout