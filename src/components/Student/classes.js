// Classes.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './classes.css'; // Özel CSS dosyasını ekliyoruz
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını ekliyoruz
import Navbar from './navbar';
function Classes() {
  const location = useLocation();
  const [studentId, setStudentId] = useState(null);
  const [coursesList, setCoursesList] = useState([]);
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (location.state && location.state.id) {
      setStudentId(location.state.id);
    }
  }, [location.state]);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/enrollments/${studentId}`);
      setCoursesList(res.data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  const fetchAllCourses = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/courses`);
      setCourses(res.data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  const enrollToCourse = async (courseID) => {
    try {
      const enrollment_date = new Date().toISOString().slice(0, 10);
      await axios.post(`http://localhost:8800/enrollments/${studentId}`, {
        studentId,
        courseID,
        enrollment_date,
      });
      setMessage('Enrollment successful.');
      fetchCourses();
    } catch (error) {
      console.error('Enrollment failed:', error);
      setMessage('Enrollment failed.');
    }
  };

  const deleteToCourse = async (courseID) => {
    try {
      await axios.delete(`http://localhost:8800/enrollments/${courseID}`, {
        data: { courseID, studentId }
      });
      setMessage('Enrollment deleted successfully.');
      fetchCourses();
    } catch (error) {
      console.error('Enrollment deletion failed:', error);
      setMessage('Enrollment deletion failed.');
    }
  };

  const handleClick = (courseName, courseID) => {
    if (coursesList.some((course) => course.courseID === courseID)) {
      console.log('Course is already taken');
    } else {
      enrollToCourse(courseID);
    }
  };

  const handleDelete = (courseID) => {
    deleteToCourse(courseID);
  };

  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
  }, [studentId]);

  return (
    <>
    <div>
    <Navbar/>

    </div>
    <div className='container-classes-tables'>
    <div className='classes-enrollment-table'>
      <h2>Your Enrolled Courses</h2>
      <table className='classes-enrollment-table'>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {coursesList.map((course) => (
            <tr key={course.courseID}>
              <td className='course-id'>{course.courseID}</td>
              <td className='course-name'>{course.courseName}</td>
              <td className='course-description'>{course.description}</td>
              <td>
              <button className="classes-button btn btn-danger" onClick={() => handleDelete(course.courseID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
      <div className='courses-select-table'>
        <h2>Courses</h2>
        <table className="container-content">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.CourseID}>
                <td>{course.CourseID}</td>
                <td>{course.CourseName}</td>
                <td>{course.Description}</td>
                <td>
                  <button className="classes-button btn btn-success" onClick={() => handleClick(course.CourseName, course.CourseID)}>
                    Add
                  </button>
                  {/* <button className="classes-button btn btn-danger" onClick={() => handleDelete(course.CourseID)}>Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default Classes;
