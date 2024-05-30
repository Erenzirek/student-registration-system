import axios from "axios"; // Import axios for making HTTP requests.
import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect hooks.
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom for navigation.
import "./StudentAdd.css"
const Add = () => {
  const [student, setStudent] = useState({
    name: "",
    surname: "",
    email: "",
    student_id: "",
  }); // State to store the new student's details.
  const [existingEmails, setExistingEmails] = useState([]); // State to store existing emails.
  const [error, setError] = useState(false); // State to handle general errors.
  const [emailError, setEmailError] = useState(false); // State to handle email errors.

  const navigate = useNavigate(); // Hook for navigation.

  useEffect(() => {
    // Fetch all existing emails when the component mounts.
    const fetchExistingEmails = async () => {
      try {
        const res = await axios.get("http://localhost:8800/students"); // Make a GET request to fetch all students.
        const emails = res.data.map((student) => student.email); // Extract emails from the response.
        setExistingEmails(emails); // Set the existingEmails state.
      } catch (err) {
        console.log(err); // Log any errors.
      }
    };

    fetchExistingEmails(); // Call the function to fetch existing emails.
  }, []); // Empty dependency array ensures this runs once on mount.

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value })); // Update the student state with the new input value.
    setEmailError(false); // Reset email error when user starts typing.
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation.
    return regex.test(email); // Return true if the email matches the regex, false otherwise.
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission.
    if (!validateEmail(student.email)) {
      alert("Please enter a valid email address."); // Alert if the email is not valid.
      return; // Exit the function.
    }

    if (existingEmails.includes(student.email)) {
      setEmailError(true); // Set email error if the email already exists.
      return; // Prevent form submission if email exists.
    }

    try {
      await axios.post("http://localhost:8800/students", student); // Make a POST request to add the new student.
      navigate("/StudentList"); // Navigate to the student list page upon successful submission.
    } catch (err) {
      console.log(err); // Log any errors.
      setError(true); // Set the general error state.
    }
  };

  return (
    <div className="Student-Register-Container">
      <h1>Student Registration</h1> {/* Title of the form */}
      <form onSubmit={handleSubmit}> {/* Form submission handler */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={student.name}
          onChange={handleChange} // Update state on input change.
          required // Make the input required.
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          value={student.surname}
          onChange={handleChange} // Update state on input change.
          required // Make the input required.
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={student.email}
          onChange={handleChange} // Update state on input change.
          required // Make the input required.
        />
        {emailError && <p style={{ color: 'red' }}>This email is already in use.</p>} {/* Display email error if email already exists. */}
        <input
          type="number"
          placeholder="Password"
          name="password"
          value={student.password}
          onChange={handleChange} // Update state on input change.
          required // Make the input required.
        />
        <div className = "submit-button">
            <button type="submit">Sign In</button> {/* Submit button */}
        </div>
      </form>
      {error && <p>Something went wrong!</p>} {/* Display general error if something went wrong */}
      <footer className="footer">
                    <p>Do you have an account? <a href="/StudentLogin">Login</a></p>
      </footer>
    </div>
  );
};

export default Add; // Export the Add component as default.
