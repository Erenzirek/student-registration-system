import "./student.css";
import PersonIcon from '@mui/icons-material/Person';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GradingIcon from '@mui/icons-material/Grading';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function studentPanel() {
    return (
        <>

        <div className="search-bar-container">
            <input placeholder="search"/>
        </div>
        <div className="navbar">
            <div className="Person-Icon">
                <PersonIcon fontSize="large"/>
            </div>
            <ul className="nav-list">
                <li><HomeTwoToneIcon/> <a href="#" className="active">Home</a></li>
                <li><GradingIcon/><a href="#">Grades</a></li>
                <li><AccessibilityNewIcon/><a href="#">Attendance</a></li>
                <li><LocalLibraryIcon/><a href="#">Courses</a></li>
                <li><SettingsIcon/><a href="#">Settings</a></li>
            </ul>
        </div>

        <div className="welcome-panel-container">
            <div className="date-panel">September/5/2023</div>
            <div className="welcome-message">
                <div>
                    <p className="welcome-back">Welcome back, User!</p>
                </div>
                <div>
                    <p className="bottom-sentence">Always stay updated in your student portal</p>
                </div>
            </div>
        </div>

        <div className="course-panel-container">
        <div class="course-panel-container">
            <div class="course-row">
                <div class="course-box" id="box1">Course 1</div>
                <div class="course-box" id="box2">Course 2</div>
            </div>
            <div class="course-row">
                <div class="course-box" id="box3">Course 3</div>
                <div class="course-box" id="box4">Course 4</div>
            </div>
        </div>
        </div>
            <div className="top-panel">
                <div>
                    <ExitToAppOutlinedIcon fontSize="large"/>
                </div>
                <div>
                    <p>Eren</p>
                </div>
            </div>
            <div className="course-instructors">

            </div>

        </>
    );
}

export default studentPanel;
