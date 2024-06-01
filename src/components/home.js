import "./home.css";
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="Welcome-Message">
                 <p>Welcome to Student Management System </p>
            </div>

            <div className="Home-Container">
                {/* Öğrenci girişi */}
                <div className="Container-Box">
                    <SchoolIcon fontSize="large"/>
                    {/* Başlığı bir Link bileşeni ile sarıyoruz */}
                    <h1> <Link to="/StudentList">Student Login</Link> </h1>
                    <p>
                        Login as a student to explore course materials and assignments.
                    </p>
                </div>

                {/* Akademisyen girişi */}
                <div className="Container-Box">
                    <PeopleAltIcon fontSize="large"/>
                    <h1> <Link to="/TeacherLogin">Academician Login</Link></h1>
                    <p>
                        Login as an academician to to create courses assignments and track students process.
                    </p>  
                </div>
            </div>
        </>
    );
}

export default Home;
