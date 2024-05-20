import PersonIcon from '@mui/icons-material/Person';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GradingIcon from '@mui/icons-material/Grading';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useState } from "react";
import { useEffect } from "react";
import "TeacherPanel.css"

function TeacherPanel() {
    const [notices, setNotices] = useState([]);

    return (
        <>
            <div className="teacher-search-bar-container">
                <input placeholder="Search" />
            </div>

            <div className="teacher-navbar">
                <ul className="teacher-nav-list">
                    <li>
                        <div className="teacher-Person-Icon"><PersonIcon fontSize="large" /></div>
                        <a id="teacher-user-name">User Name</a>
                    </li>
                    <div className="teacher-content">
                        <li><HomeTwoToneIcon /> <a href="#" className="teacher-active">Home</a></li>
                        <li><GradingIcon /><a href="#">Grades</a></li>
                        <li><AccessibilityNewIcon /><a href="#">Attendance</a></li>
                        <li><LocalLibraryIcon /><a href="#">Courses</a></li>
                        <li><SettingsIcon /><a href="#">Settings</a></li>
                    </div>
                </ul>
            </div>

            <div className="teacher-dashboard-title">
                <h1>Dashboard</h1>
            </div>
            
            <div className="teacher-dashboard">
                <div className="teacher-tile teacher-classes">
                    <h3>Classes</h3>
                    {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
                </div>
                <div className="teacher-tile teacher-grades">
                    <h3>Grades</h3>
                    {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
                </div>
                <div className="teacher-tile teacher-notes">
                    <h3>Notes</h3>
                    {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
                </div>
                <div className="teacher-tile teacher-finance">
                    <h3>Finance</h3>
                    {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
                </div>
                <div className="teacher-tile teacher-payments">
                    <h3>Payments</h3>
                    {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
                </div>
                <div className="teacher-tile teacher-professors">
                    <h3>Professors</h3>
                    {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
                </div>
                <div className="teacher-tile teacher-announcements">
                    <h3>Announcements</h3>
                    {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
                </div>
                <div className="teacher-tile teacher-make-it-happen">
                    <h3>MAKE IT HAPPEN</h3>
                </div>
            </div>

            <div className="teacher-welcome-panel-container">
                <div className="teacher-date-panel">September/5/2023</div>
                <div className="teacher-welcome-message">
                    <div>
                        <p className="teacher-welcome-back">Welcome back, User!</p>
                    </div>
                    <div>
                        <p className="teacher-bottom-sentence">Always stay updated in your student portal</p>
                    </div>
                </div>
            </div>

            <div className="teacher-top-panel">
                <div>
                    <ExitToAppOutlinedIcon fontSize="large" />
                </div>
                <div>
                    <p>Eren</p>
                </div>
            </div>
            
            <div className="teacher-course-instructors">
                {/* Content for course instructors */}
            </div>

            <div className="teacher-notices-container">
                <div className="teacher-header">
                    <p>Notices</p>
                </div>
                <div className="teacher-notices">
                    {/* Notices content */}
                </div>
            </div>
            </>
    );
}

export default TeacherPanel;