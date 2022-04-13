import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPasword, setConfrimPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordlBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfrimPasswordlBlur = event => {
        setConfrimPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confrimPasword) {
            setError('password do not match')
            return;
        }
        if (password.length < 6) {
            setError('paswword must be 6 characters')
            return;

        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordlBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confrim-password">Confrim-Password</label>
                        <input onBlur={handleConfrimPasswordlBlur} type="password" name="confrim-password" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input type="submit" value="Sign Up" className='form-submit' />
                </form>
                <p>
                    Already have an account? <Link to='/login' className='form-link'>Login</Link>
                </p>
                <button className='google-btn'>Continue With Google</button>
            </div>

        </div>
    );
};

export default SignUp;