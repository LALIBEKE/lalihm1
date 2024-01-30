
import React, { FC } from 'react';
import './ListTask.scss';
import { TaskModel } from '../../models/Taskmodel';
import Task from '../Task/Task';


interface ListtaskProps {
 
}


const TaskList = () => {
let d=new Date();
let taskList:TaskModel[]=[{nametask:'help',wasdone:false,username:'lali',datestart:d}];


return <div className="ListTask">
   {taskList.map((a)=>{
    return <Task taskDetailes={a}></Task>
   })}
</div>
}


export default TaskList;

