// Students.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./student_list.css";
import Login from "./StudentLogin";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [email,setEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailStudent, setEmailStudent] = useState("");
  const [passwordStudent, setPasswordStudent] = useState("");

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
  
    // Form verilerini kontrol etmek veya işlemek için buraya kod ekleyebilirsiniz.
    // Örneğin, form verilerini konsola basabilirsiniz.
    console.log("Email:", emailStudent);
    console.log("Password:", passwordStudent);
    console.log(students[10].email);

    // if (emailStudent === students[10].email) {
    //   console.log("true");
    // } else{
    //   console.log("false");
    // }

    // console.log("2.index");
    // console.log(students[2].email);
    // console.log(students.length);

    // const deneme = students.email.includes(emailStudent);
    // console.log(deneme);
    console.log("input");
    console.log(emailStudent)
    for (let i = 0; i < students.length; i++) {
      // const element = students[i].email;
      // console.log(element);
      if (emailStudent == students[i].email && passwordStudent == students[i].student_id) {
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
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Student ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.email}</td>
                <td>{student.student_id}</td>
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
    </>
  );
};

export default Students;
