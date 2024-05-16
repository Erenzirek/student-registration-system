import React, { useState, useEffect } from 'react';
import { useGetUserQuery, useUpdateUserMutation } from '../../RTK/userAPI';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams();

    const [user, setUser] = useState({
        id: id,
        name: '',
        email: ''
    });

    const { data } = useGetUserQuery(id);

    useEffect(() => {
        if (data) {
            setUser({ ...user, name: data.name, email: data.email });
        }
    }, [data]);

    const [updateUser] = useUpdateUserMutation(); // Değişiklik burada

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(user); // Değişiklik burada
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default EditStudent;
