import "./teacherLogin.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PasswordIcon from '@mui/icons-material/Password';
import SchoolIcon from '@mui/icons-material/School';
function TeacherLogin() {
    return (
        <>
        <form className="Academician-Register-Container">
        <div className="school-title">
          <SchoolIcon fontSize="large"/>
          <h1>Academician Login</h1>
        </div>
        <div className="person-icon"/>
          <div className="input-container">
            <div className="icon">
              <MailOutlineIcon/>
            </div>
              <input placeholder="fullname@teacher.com"></input>
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
        </form>
        </>
    );
}

export default TeacherLogin;
