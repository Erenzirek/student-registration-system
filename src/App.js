import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import StudentLogin from './components/Student/StudentLogin';
import StudentList from './components/Student/student_list'; // Corrected the component name
import TeacherLogin from './components/Teacher/teacherLogin';
import EditStudent from './components/Student/EditStudent';
import StudentPanel from './components/Student_Panel/Student_Panel';
import TeacherList from './components/Teacher/TeacherList'; // Ensure this matches your component
import TeacherSignin from './components/Teacher/teacherSignin';
import TeacherPanel from './components/Teacher/TeacherPanel';
import StudentAdd from './components/Student/StudentAdd';

import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/StudentAdd' element={<StudentAdd />} />
          <Route path='/StudentLogin' element={<StudentLogin />} />
          <Route path='/StudentPanel' element={<StudentPanel />} />
          <Route path='/EditStudent' element={<EditStudent />} />
          <Route path='/StudentList' element={<StudentList />} /> {/* Corrected the path */}
          <Route path='/TeacherLogin' element={<TeacherLogin />} />
          <Route path='/TeacherSignin' element={<TeacherSignin />} />
          <Route path='/TeacherList' element={<TeacherList />} /> {/* Corrected the path */}
          <Route path='/TeacherPanel' element={<TeacherPanel />} /> {/* Corrected the path */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
