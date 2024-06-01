import PersonIcon from '@mui/icons-material/Person';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GradingIcon from '@mui/icons-material/Grading';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import './navbar.css'

function navbar() {
 return(
    <>
      <div className="navbar">
                <ul className="nav-list">
                    <li>
                        <div className="Person-Icon">
                            <PersonIcon fontSize="large" />
                        </div>
                    </li>
                    <div className="content">
                        <li><HomeTwoToneIcon /> <a href="/StudentPanel" className="active">Home</a></li>
                        <li><GradingIcon /><a href="/Classes">Grades</a></li>
                        <li><AccessibilityNewIcon /><a href="#">Attendance</a></li>
                        <li><LocalLibraryIcon /><a href="#">Courses</a></li>
                        <li><SettingsIcon /><a href="#">Settings</a></li>
                    </div>
                </ul>
            </div>
    </>
 );   
}
export default navbar;