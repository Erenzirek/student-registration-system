import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import RegisterStudent from './components/Student/RegisterStudent';
import StudentLogin from './components/Student/StudentLogin';
import Student_list from './components/Student/student_list';
import TeacherLogin from './components/Teacher/teacherLogin';
import { useState } from 'react';
import EditStudent from './components/Student/EditStudent';
import StudentPanel from './components/Student_Panel/Student_Panel';
import "./App.css"
function App() {

  return (
    // <StudentLogin/>
    //<RegisterStudent/>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RegisterStudent' element={<RegisterStudent />} />
          <Route path='/StudentLogin' element={<StudentLogin />} />
          <Route path='/StudentPanel' element={<StudentPanel />} />
          <Route path='/EditStudent' element={<EditStudent />} />
          <Route path='/Student_list' element={<Student_list />} />
          <Route path='/TeacherLogin' element={<TeacherLogin />} />
          {/* <Route path='/register' element={<Register/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
