
import React, { FC } from 'react';
import './Task.scss';

import { TaskModel } from '../../models/Taskmodel'

import { useState } from "react";
import Button from '../Button/Button';

interface TaskProps {
  taskDetailes: TaskModel;
}

const Task = (props: TaskProps) => {
 
  const [task, setTask] = useState(props.taskDetailes);

  const updateTask = () => {
    task.wasdone = !task.wasdone;
    task.datestart = new Date();
    setTask({ ...task });
  }
  const deleteTask = () => {
  task.nametask='בוטל השמימה'
    setTask({ ...task });
  }
  return <div  >
    <h1>המשימה שלי :</h1>
    <ul >
      <li className="taskInfo">{task.nametask}</li>
      <li className="taskInfo">{task.username}</li>
      <li className="taskInfo">{task.wasdone ? "Done" : "not"}</li>
      <li className="taskInfo">{task.datestart.toLocaleDateString()}</li>
    </ul>

    <button onClick={updateTask}> Updatetask/עדכון המשימה</button>
    <button onClick={deleteTask}> Updatetask/ביטול המשימה</button>
  </div>
}
export default Task;