import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input type="submit" value="Login" className='form-submit' />
                </form>
                <p>
                    New ema-jon? <Link to='/signup' className='form-link'>Create new account</Link>
                </p>
                <button className='google-btn'>Continue With Google</button>
            </div>

        </div>

    );
};

export default Login;