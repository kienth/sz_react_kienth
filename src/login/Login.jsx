import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../App.style';
import { authentication } from '../app/userSlice';
import "./Login.style.css";

const Login = () => {

    const [ email ,setEmail ] = useState("");
    const [ password ,setPassword ] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password){
            dispatch(authentication({
                email,
                password,
                loggedIn: true,
            }));
        }else{
            alert('Please fill all fields');
        }
    }

    return (
        <Container>
            <div className="login">
                <form className='login__form' onSubmit={handleSubmit}>
                    <h1>Login Here</h1>
                    {/* {} */}
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <input type="password" placeholder='Passwrod' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <button type='submit' className='submit__btn'> Submit</button>
                    <Link to="/register">Create New User</Link>
                </form>

            </div>
        </Container>
    );
}
 
export default Login;