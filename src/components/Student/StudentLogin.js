import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordIcon from '@mui/icons-material/Password';
import SchoolIcon from '@mui/icons-material/School';
import { useGetUsersQuery } from '../../RTK/userAPI';
import './student_list.css';

function StudentLogin() {
    const location = useLocation();
    const newUser = location.state?.newUser;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { data: users } = useGetUsersQuery(); // Fetch student list data

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission
        // Check if the entered email exists in the student list data
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            // If the email exists, navigate to the student panel
            navigate('/studentpanel');
            console.log("success");
        } else {
            // If the email doesn't exist, show an error message
            setError('Invalid email! Please enter a valid email.');
            console.log("error");
        }
    };

    return (
        <>
            <form className="student-container" onSubmit={handleLogin}>
                <div className="school-title">
                    <SchoolIcon fontSize="large"/>
                    <h1>Student Management System</h1>
                </div>
                <div className="input-container">
                    <div className="icon">
                        <MailOutlineIcon/>
                    </div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <div className="icon">
                        <PasswordIcon/>
                    </div>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="Login-Button">
                    <button type="submit">Login</button>
                </div>
                <footer className="footer">
                    <p>Don't have an account? <a href="/RegisterStudent">Sign Up</a></p>
                </footer>
                {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
            </form>
            
            {newUser && (
                <div>
                    {/* Display new user information */}
                    <p>New user registered:</p>
                    <p>Email: {newUser.email}</p>
                    {/* Add any other fields you want to display */}
                </div>
            )}
        </>
    );
}

export default StudentLogin;
