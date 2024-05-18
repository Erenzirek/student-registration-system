import "./student.css";
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
function StudentPanel() {

    const [notices, setNotices] = useState([]);

    // Bu örnek veri kümesi, admin panelinden gelen duyuruları simüle eder
    useEffect(() => {
        const fetchNotices = async () => {
            // Burada API çağrısı yapılabilir
            const exampleNotices = [
                {
                    title: 'Final Sınavları Takvimi',
                    date: '2024-05-15',
                    description: 'Final sınavlarının tarihleri açıklandı. Detaylar için tıklayın.',
                    link: '/notices/final-exams'
                },
                {
                    title: 'Yeni Dönem Kayıtları',
                    date: '2024-05-10',
                    description: 'Yeni dönem kayıtları başladı. Kayıt için son tarih 2024-06-01.',
                    link: '/notices/registration'
                }
            ];
            setNotices(exampleNotices);
        };

        fetchNotices();
    }, []);


    return (
        <>
        <div className="search-bar-container">
            <input placeholder="Search"/>
        </div>
       
        <div className="navbar">
            <ul className="nav-list">
                
                <li><div className="Person-Icon"><PersonIcon fontSize="large"/></div><a id="user-name">User Name</a></li>
               <div className="content">
                    <li><HomeTwoToneIcon/> <a href="#" className="active">Home</a></li> 
                    <li><GradingIcon/><a href="#">Grades</a></li>
                    <li><AccessibilityNewIcon/><a href="#">Attendance</a></li>
                    <li><LocalLibraryIcon/><a href="#">Courses</a></li>
                    <li><SettingsIcon/><a href="#">Settings</a></li>
               </div>
            </ul>
        </div>
    <div className="dashboard-title">
        <h1>Dashboard</h1>
    </div>
<div className="dashboard">
    <div className="tile classes">
      <h3>Classes</h3>
      {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
    </div>
    <div className="tile grades">
      <h3>Grades</h3>
      {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
    </div>
    <div className="tile notes">
      <h3>Notes</h3>
      {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
    </div>
    {/* <!-- Diğer döşemeler benzer şekilde eklenir --> */}
    <div className="tile finance">
      <h3>Finance</h3>
      {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
    </div>
    <div className="tile payments">
      <h3>Payments</h3>
      {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
    </div>
    <div className="tile professors">
      <h3>Proffessors</h3>
      {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
    </div>
    <div className="tile announcements">
      <h3>Announcements</h3>
      {/* <!-- İçerik ve simgeler buraya eklenebilir --> */}
    </div>
    <div className="tile make-it-happen">
      <h3>MAKE IT HAPPEN</h3>
    </div>
  
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
            <div className="notices-container">
            <div className="header">
                <p>Duyurular</p>
            </div>
            <div className="notices">
                {notices.length === 0 ? (
                    <div className="empty-notices">
                        <p>Henüz bir uyarı yok</p>
                    </div>
                ) : (
                    <ul>
                        {notices.map((notice, index) => (
                            <li key={index} className="notice-item">
                                <h3>{notice.title}</h3>
                                <p>{notice.date}</p>
                                <p>{notice.description}</p>
                                <a href={notice.link}>Detaylı bilgi</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

        </>
    );
}

export default StudentPanel;
