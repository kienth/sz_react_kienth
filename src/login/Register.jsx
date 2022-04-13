import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, } from 'react-router-dom';
import { Container } from '../App.style';
import { register, errorMessage, resetAll } from '../app/userSlice';
import Error from './Error';
import "./Login.style.css";

const Register = () => {

    const [ name ,setName ] = useState("");
    const [ email ,setEmail ] = useState("");
    const [ password ,setPassword ] = useState("");
    const [ rePassword ,setRePassword ] = useState("");

    const dispatch = useDispatch();

    const isWrongPassword = useSelector((state) => (state.user.errorType));

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && password && rePassword){
            if((password !== rePassword)){
                dispatch(errorMessage('Mismatch Password'));
            }else{
                dispatch(errorMessage('Registered'));
                dispatch(register({
                    name,
                    email,
                    password,
                    loggedIn: true,
                }));
                setName('')
                setEmail('')
                setPassword('')
                setRePassword('')
            }
        }
        else{
            dispatch(errorMessage('Empty Fields'));
        }
    }

    const checkPassword = (e) => {
        setRePassword(e.currentTarget.value)
    }

    return (
        <Container>
            <div className="login">
                <h1 className='login_header'>Register Here</h1>
                {isWrongPassword ? <Error/> : null}
                <form className='login__form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <input type="password" placeholder='Enter Password Again' value={rePassword} onChange={checkPassword}/>
                    <button type='submit' className='submit__btn'> Submit</button>
                    <Link to="/login" onClick={(e) => dispatch(resetAll())}>Already have account?</Link>
                </form>
            </div>
        </Container>
    );
}
 
export default Register;