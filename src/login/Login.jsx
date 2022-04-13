import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../App.style';
import { authentication, resetAll, errorMessage } from '../app/userSlice';
import Error from './Error';
import "./Login.style.css";

const Login = () => {

    const [ email ,setEmail ] = useState("");
    const [ password ,setPassword ] = useState("");

    const dispatch = useDispatch();
    const isWrongPassword = useSelector((state) => (state.user.errorType));

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            dispatch(authentication({
                email,
                password,
                loggedIn: true,
            }));
        }else{
            dispatch(errorMessage('Empty Fields'));
        }
    }

    return (
        <Container>
            <div className="login">
                <h1 className='login_header'>Login Here</h1>
                {isWrongPassword ? <Error/> : null}
                <form className='login__form' onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <input type="password" placeholder='Passwrod' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <button type='submit' className='submit__btn'> Submit</button>
                    <Link to="/register" onClick={(e) => dispatch(resetAll())}>Create New User</Link>
                </form>
            </div>
        </Container>
    );
}
 
export default Login;