import "./student.css";
import PersonIcon from '@mui/icons-material/Person';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GradingIcon from '@mui/icons-material/Grading';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import axios from "axios";
import { Button } from "@mui/material";

function StudentPanel() {
    const [students, setStudents] = useState([]);
    const [studentsCourses, setStudentsCourses] = useState([]);
    const [notices, setNotices] = useState([]);
    const location = useLocation();
    const { email, studentNumber } = location.state || {};
    const navigate = useNavigate(); 
    const [foundId, setFoundId] = useState(null);
    const [foundStudentId, setFoundStudentId] = useState(null);

    useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                const res = await axios.get("http://localhost:8800/students");
                setStudents(res.data);
            } catch (err) {
                console.error("Failed to fetch students:", err);
            }
        };
        fetchAllStudents();
    }, []);

    useEffect(() => {
        const fetchAllStudentsCourses = async () => {
            try {
                const res = await axios.get("http://localhost:8800/studentcourses");
                setStudentsCourses(res.data);
            } catch (err) {
                console.error("Failed to fetch students:", err);
            }
        };
        fetchAllStudentsCourses();
    }, []);

    const findStudentIdByEmail = (email) => {
        for (let i = 0; i < students.length; i++) {
          if (students[i].email === email) {
            return students[i].id;
          }
        }
        return null; 
      };
  
    useEffect(() => {
        const id = findStudentIdByEmail(email);
        if (id !== null) {
            setFoundStudentId(id);
        }
    }, [email, students]);

    const handleClick = () => {
        navigate("/classes", { state: { id: foundStudentId } }); 
    };

    return (
        <>
            <div className="search-bar-container">
                <input placeholder="Search" />
            </div>
            <div className="navbar">
                <ul className="nav-list">
                    <li>
                        <div className="Person-Icon">
                            <PersonIcon fontSize="large" />
                        </div>
                        <a id="user-name">{email}</a>
                    </li>
                    <div className="content">
                        <li><HomeTwoToneIcon /> <a href="#" className="active">Home</a></li>
                        <li><GradingIcon /><a href="#">Grades</a></li>
                        <li><AccessibilityNewIcon /><a href="#">Attendance</a></li>
                        <li><LocalLibraryIcon /><a href="#">Courses</a></li>
                        <li><SettingsIcon /><a href="#">Settings</a></li>
                    </div>
                </ul>
            </div>
            <div className="dashboard-title">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard">
                <button className="tile classes" onClick={handleClick}>
                    <h3>Classes</h3>
                </button>
                <div className="tile grades">
                    <h3>Grades</h3>
                </div>
                <div className="tile notes">
                    <h3>Notes</h3>
                </div>
                <div className="tile finance">
                    <h3>Finance</h3>
                </div>
                <div className="tile payments">
                    <h3>Payments</h3>
                </div>
                <div className="tile professors">
                    <h3>Professors</h3>
                </div>
                <div className="tile announcements">
                    <h3>Announcements</h3>
                </div>
                <div className="tile make-it-happen">
                    <h3>MAKE IT HAPPEN</h3>
                </div>
            </div>
            <div className="welcome-panel-container">
                <div className="date-panel">September/5/2023</div>
                <div className="welcome-message">
                    <div>
                        <p className="welcome-back">Welcome back, {email}!</p>
                    </div>
                    <div>
                        <p className="bottom-sentence">Always stay updated in your student portal</p>
                    </div>
                </div>
            </div>
            <div className="top-panel">
                <div>
                    <ExitToAppOutlinedIcon fontSize="large" />
                </div>
                <div>
                    <p>{studentNumber}</p>
                </div>
            </div>
            <div className="course-instructors"></div>
            <div className="notices-container">


            </div>
        </>
    );
}

export default StudentPanel;
