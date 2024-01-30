import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Box from './components/Box/Box';
import Button from './components/Button/Button';
import ContainerStyle from './components/ContainerStyle/ContainerStyle';
import Student from './components/student/student';
import { StudentModel } from './models/StudentModel';
import TaskList from './components/ListTask/ListTask';

function App() {
  let myTitle="חג החנוכה'"
  let _myStudent=new StudentModel("אליהו");

  return (
    <div className="App">
      <TaskList></TaskList>
    {/* <Student myStudent={_myStudent}></Student> */}
    {/* <Picture  title={myTitle}></Picture> */}
    </div>
  );
}

export default App;
