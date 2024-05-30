// Students.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";
import "./student_list.css";
import { GiConsoleController } from "react-icons/gi";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [email,setEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailStudent, setEmailStudent] = useState(""); 
  const [passwordStudent, setPasswordStudent] = useState("");
  const [index, setIndex] = useState();
  const [foundStudentId, setFoundStudentId] = useState(null);
  const [studentNumber, setStudentNumber] = useState("");

  const [login, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  // console.log(students);
  // console.log(students[0].email);
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));

    } catch (err) {
      console.error("Failed to delete student:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Email:", emailStudent);
    console.log("Password:", passwordStudent);
    console.log(students[0].email);

    const findStudentIdByEmail = (email) => {
      for (let i = 0; i < students.length; i++) {
        if (students[i].email === email) {
          return students[i].id;
        }
      }
      return null; // Eğer öğrenci bulunamazsa null döndür
    };

    const id = findStudentIdByEmail(emailStudent);
    setFoundStudentId(id);
    console.log("Found student ID:", id);

    // if (emailStudent === students[10].email) {
    //   console.log("true");
    // } else{
    //   console.log("false");
    // }

    // console.log("2.index");
    // console.log(students[2].email);
    // console.log(students.length);

    // const deneme = students.email.includes(emailStudent);
    console.log("inputs");
    console.log(students[0].email);  
    console.log(students[0].password);  

    console.log("input");
    console.log(emailStudent);
    console.log(passwordStudent);
    for (let i = 0; i < students.length; i++) {
      // const element = students[i].email;
      // console.log(element);
      if (emailStudent == students[i].email && passwordStudent == students[i].password) {
        navigate("/StudentPanel", { state: { email: emailStudent, studentNumber: students[i].studentNumber} });  // Navigate to the StudentPanel component
        console.log("giriş başarılı");

        // history.push("/")
        // eğer başarılı ise link to kullan
      }
    
    }

    // let linearSearch = (students,emailStudent) => {
    //   for (let i = 0; i < students.length; i++) {
    //     if ( emailStudent === students[i].email) {
    //       debugger
    //       console.log("eren");
    //       return(true);
    //     } else {
    //       console.log("mami");
    //       return(false);
    //     }
    //   }
    // }

    // console.log("Fonksiyon çıkışı")
    // console.log(linearSearch(students, emailStudent));

    
    // Ardından form verileriyle yapılacak işlemleri burada gerçekleştirebilirsiniz,
    // Örneğin, bu verileri bir API'ye gönderebilirsiniz.
  
    // Formu gönderdikten sonra state'i temizlemek için:
    setEmailStudent("");
    setPasswordStudent("");
  };

  const handleAddOrUpdate = async (student) => {
    if (validateEmail(student.email)) {
      try {
        if (student.id) {
          await axios.put(`http://localhost:8800/students/${student.id}`, student);
        } else {
          await axios.post("http://localhost:8800/students", student);
        }
        window.location.reload();
      } catch (err) {
        console.error("Failed to add/update student:", err);
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
     <form onSubmit={handleSubmit}>
  <input
    type="email"
    placeholder="Email"
    value={emailStudent}
    onChange={(e) => setEmailStudent(e.target.value)}
    required
  />
  <input
    type="password"
    placeholder="Password"
    value={passwordStudent}
    onChange={(e) => setPasswordStudent(e.target.value)}
    required
  />
  <div className="submit-button">
    <button type="submit">Login</button>
  </div>
</form>
      <div>
        <h1>Student List</h1>
        <table className="students-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Student Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.email}</td>
                <td>{student.password}</td>
                <td>{student.studentNumber}</td>
                <td>
                  <button className="delete" onClick={() => handleDelete(student.id)}>
                    Delete
                  </button>
                  <button className="update">
                    <Link to={`/update/${student.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                      Update
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="addHome">
          <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
            Add new student
          </Link>
        </button>
    </div>
    loggedIn & <div>
      <Link to="/StudentPanel"/>
    </div>
    </>
  );
};

export default Students;