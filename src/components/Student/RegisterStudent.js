import React, { useState, useEffect } from 'react'; // React ve useState, useEffect hook'larını import ediyoruz.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap stil dosyasını import ediyoruz.
import SchoolIcon from '@mui/icons-material/School';
import { useAddUserMutation } from '../../RTK/userAPI'; // RTK kullanarak userAPI'den useAddUserMutation hook'unu import ediyoruz.
import { useNavigate } from 'react-router-dom'; // React Router'dan useNavigate hook'unu import ediyoruz.
import "./student.css";
import "./RegisterStudent.css"

const RegisterStudent = () => {
    const [student, setStudent] = useState({ email: '', password: '' }); // student state'i tanımlıyoruz ve başlangıç değerini boş email ve password olarak ayarlıyoruz.
    const [existingEmails, setExistingEmails] = useState([]); // Daha önce girilmiş email adreslerini saklamak için existingEmails state'i tanımlıyoruz.
    const [error, setError] = useState(''); // Hata mesajını saklamak için error state'i tanımlıyoruz.
    const [addUser] = useAddUserMutation(); // addUser mutation'ını RTK'dan alıyoruz.
    const navigate = useNavigate(); // navigate fonksiyonunu useNavigate hook'u ile alıyoruz.

    const handleChange = (e) => {
        const { name, value } = e.target; // Event'den name ve value değerlerini alıyoruz.
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value, // Student state'ini güncelliyoruz, ilgili input'un adını ve değerini alarak.
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Formun varsayılan davranışını (sayfa yenilenmesi) engelliyoruz.
        if (!existingEmails.includes(student.email)) { // Eğer email, existingEmails listesinde yoksa devam ediyoruz.
                await addUser(student).unwrap(); // Kullanıcıyı eklemek için addUser mutation'ını çağırıyoruz ve sonucu unwrap ediyoruz.
                setExistingEmails((prevEmails) => [...prevEmails, student.email]); // Başarılı olursa, yeni email'i existingEmails listesine ekliyoruz.
                navigate('/StudentLogin'); // Redirect to login page upon successful registration
                // navigate('/'); // Kullanıcı başarıyla eklendikten sonra ana sayfaya yönlendirme (şu an yorum satırı olarak bırakılmış).
            } else {
            setError('Bu email adresi zaten kayıtlı. Lütfen farklı bir email adresi deneyin.'); // Eğer email zaten varsa hata mesajı ayarlıyoruz.
        }
    };

    useEffect(() => {
        // student.email değiştiğinde hata mesajını temizlemek için useEffect kullanıyoruz.
        if (error) setError('');
    }, [student.email]); // Dependency array'de student.email var, bu yüzden sadece email değiştiğinde çalışacak.

    return (
        <div>
            <form className="student-container" onSubmit={handleSubmit}>
                <h2 className="display-4 title">Student Registration System</h2>
                <div className="school-title">
                    <SchoolIcon fontSize="large"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='input-label'>Email:</label>
                    <input
                        type="email"
                        className="form-control custom-size"
                        id="email"
                        placeholder="studentID@student.com"
                        name="email"
                        value={student.email}
                        onChange={handleChange} // Input değiştiğinde handleChange fonksiyonunu çağırıyoruz.
                        required // Bu input alanını zorunlu yapıyoruz.
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='input-label'>Password:</label>
                    <input
                        type="password"
                        className="form-control custom-size"
                        id="password"
                        placeholder="Enter Password"
                        name="password"
                        value={student.password}
                        onChange={handleChange} // Input değiştiğinde handleChange fonksiyonunu çağırıyoruz.
                        required // Bu input alanını zorunlu yapıyoruz.
                    />
                </div>
                <button type="submit" className="btn btn-primary sign-in-button Student-Login">
                    Sign In
                </button>
           
                <footer className="footer">
                <p>Dont have an account? <a href="/StudentLogin">Student Login</a></p>
                </footer>
                   {/*Eğer error state'i doluysa hata mesajını kırmızı renkte gösteriyoruz*/}
            {error && <p className="error-message">{error}</p>} 
            </form>
         
        </div>
    );
};

export default RegisterStudent; // RegisterStudent bileşenini export ediyoruz.
