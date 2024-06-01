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
  const [isVisible, setIsVisible] = useState(false); // Yeni eklendi

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

  // "Add" butonuna tıklandığında tablonun görünür olmasını sağlayan fonksiyon
  const handleClickAddButton = () => {
    setIsVisible(true);

    // if (isVisible == true) {
    //   setIsVisible(false);
    // } else if(isVisible == false){
    //   setIsVisible(true);
    // }
  };

  const handleClickCloseButton = () => {
    setIsVisible(false);
  }

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className='container-classes-tables'>  
        <table className='classes-enrollment-table'>
          <thead>
            <tr>
              <h2 className='title-enrolled'>Your Enrolled Courses</h2>
            </tr>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {coursesList.map((course) => (
              <tr className = "courses-classs-values"key={course.courseID}>
                <td className='course-id'>{course.courseID}</td>
                <td className='course-name'>{course.courseName}</td>
                <td className='course-description'>{course.description}</td>
                <td>
                  <button className="classes-button btn btn-danger" onClick={() => handleDelete(course.courseID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tr> 
      {/* "Add" butonu */}
      <button className="add-button" onClick={handleClickAddButton}>
        Add Course
      </button> </tr>
      
        </table>
       
      </div>


      {/* Tablo */}
      {isVisible && (
        <div className='courses-select-table'>
          <div className='close-courses-table'>
              <h2>Courses</h2>
              <button className = 'close-course-button' onClick={handleClickCloseButton}><p>X</p></button>
          </div>
         
          <table className="container-content">
            <thead className='course-select-table-titles'>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='course-table-content'>
              {courses.map((course) => (
                <tr key={course.CourseID}>
                  <td>{course.CourseID}</td>
                  <td>{course.CourseName}</td>
                  <td>{course.Description}</td>
                  <td>
                    <button className="classes-button btn btn-success" onClick={() => handleClick(course.CourseName, course.CourseID)}>
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {message && <p className='message'>{message}</p>}
        </div>
      )}
    </>
  );
}

export default Classes;
