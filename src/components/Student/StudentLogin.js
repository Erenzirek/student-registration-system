import "./student.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordIcon from '@mui/icons-material/Password';
import SchoolIcon from '@mui/icons-material/School';
function StudentLogin() {
    return (
        <>
        <form className="student-container">
        <div className="school-title">
          <SchoolIcon fontSize="large"/>
          <h1>Student Management System </h1>
        </div>
        <div className="person-icon"/>
          <div className="input-container">
            <div className="icon">
              <MailOutlineIcon/>
            </div>
              <input placeholder="fullname@mail.com"></input>
          </div>
          <div className="input-container">
            <div className="icon">
              <PasswordIcon/>
            </div>
              <input placeholder="password"></input>
          </div>

            <div className="Login-Button">
              <button>Login</button>
            </div>
            
             <footer className="footer">
                <p>Dont have an account? <span>Register</span> </p>
             </footer>
        </form>
        </>
    );
}

export default StudentLogin;
