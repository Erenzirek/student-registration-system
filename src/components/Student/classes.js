import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Classes() {
    const location = useLocation();
    const [s_id, setS_id] = useState(location.state ? location.state.id : null);
    const [coursesList, setCoursesList] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [message, setMessage] = useState('');
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/enrollments/${s_id}`);
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

    const enrollStudent = async (studentId, courseID, enrollment_date) => {
        try {
            const response = await axios.post(`http://localhost:8800/enrollments/${s_id}`, {
                s_id,
                courseID,
                enrollment_date,
            });

            if (response.status === 200) {
                setMessage('Enrollment successful.');
                fetchCourses();
            }
        } catch (error) {
            console.error('Enrollment failed:', error);
            setMessage('Enrollment failed.');
        }
    };

    const enrollToCourse = (courseID) => {
        const enrollment_date = new Date().toISOString().slice(0, 10);
        enrollStudent(s_id, courseID, enrollment_date);
    };

    const handleClick = (courseID) => {
        console.log("hello");
        setS_id(courseID); // Kullanıcının seçtiği kursun kimliğini s_id'ye ata
        enrollToCourse(courseID);
    };

    useEffect(() => {
        fetchCourses();
        fetchAllCourses();
    }, [s_id]);

    return (
        <>
            <div>
                <h2>Your Enrolled Courses</h2>
                <ul>
                    {coursesList.map(course => (
                        <li key={course.CourseID}>
                            <h3>{course.courseName}</h3>
                            <p>{course.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <h2>Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.CourseID}>
                        <strong>{course.CourseID}</strong> - <strong>{course.CourseName}</strong> - {course.Description}
                        <button onClick={() => handleClick(course.CourseID)}>Add</button>
                    </li>
                ))}
            </ul>

            {message && <p>{message}</p>}
        </>
    );
}

export default Classes;
