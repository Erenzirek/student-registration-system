import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap kütüphanesini import et
import { useAddUserMutation } from '../../RTK/userAPI';
import { useNavigate } from 'react-router-dom';

const RegisterStudent = () => {
    
    const [user, setUser] = useState({});
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const [addUser] = useAddUserMutation()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(user)
        navigate('/')
    }
    return (
        <div className="container">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Email:</label>
                    <input type="Email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RegisterStudent;
