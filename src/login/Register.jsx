import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../App.style';
import { register } from '../app/userSlice';
import "./Login.style.css";

const Register = () => {

    const [ name ,setName ] = useState("");
    const [ email ,setEmail ] = useState("");
    const [ password ,setPassword ] = useState("");
    const [ rePassword ,setRePassword ] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && password && rePassword){
            if((password !== rePassword)){
                alert('Password not match');
            }else{
                dispatch(register({
                    name,
                    email,
                    password,
                    loggedIn: true,
                }));
                navigate("/login");
            }
        }
        else{
            alert('Please fill all fields');
        }
    }

    return (
        <Container>
            <div className="login">
                <form className='login__form' onSubmit={handleSubmit}>
                    <h1>Register Here</h1>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <input type="password" placeholder='Enter Password Again' value={rePassword} onChange={(e) => setRePassword(e.currentTarget.value)}/>
                    <button type='submit' className='submit__btn'> Submit</button>
                    <Link to="/login">Already have account?</Link>
                </form>
            </div>
        </Container>
    );
}
 
export default Register;