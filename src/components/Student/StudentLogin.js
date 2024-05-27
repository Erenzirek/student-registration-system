// StudentLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = ({ students }) => {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // history.push("/StudentPanel");
    // console.log("Submitted Email:", email);
    // console.log("Students:", students);

    // Your login logic here
  };

  return (
    <div className="Student-Login-Container">
      <h1>Student Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={handleStudentIdChange}
          required
        />
        <div className="submit-button">
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>Invalid email or student ID.</p>}
      <footer className="footer">
        <p>Don't have an account? <a href="/StudentAdd">Register</a></p>
      </footer>
    </div>
  );
};

export default Login;
