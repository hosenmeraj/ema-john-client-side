import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [user] = useAuthState(auth)


    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddresslBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhonBlur = event => {
        setPhone(event.target.value)
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = { name, email, address }
        console.log(shipping)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Address</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddresslBlur} type="address" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhonBlur} type="phone" name="phone" id="" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input type="submit" value="Add Shipping" className='form-submit' />
                </form>

            </div>

        </div>
    );
};

export default Shipment;