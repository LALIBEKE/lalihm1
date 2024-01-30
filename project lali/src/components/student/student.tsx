import { useState } from "react"
import { StudentModel } from "../../models/StudentModel"
import './student.scss'
type StudentProps={
    myStudent:StudentModel
}

const Student=(props:StudentProps)=>{

    const [currses,setCurrses]=useState(props.myStudent.currses);
    const [student,setStudent]=useState(props.myStudent);

    function addCurse(event:any){
       let nameCurse=event.target.textContent;
       currses.push(nameCurse);
       //setCurrses([...currses]);

       student.firstname="נבחרו קורסים"
       setStudent({...student})
       
    }

 return <div>
    <h1>{props.myStudent.firstname}</h1>
    <h3>רשימת הקורסים:</h3>
    <ul>
    {currses.map((a)=>{
        return <li>{a}</li>
    })}
    </ul>

   <button  onClick={(event)=>addCurse(event)} className="btn btn-primary">C#</button>
   <button  onClick={(event)=>addCurse(event)} className="btn btn-primary">JAVA</button>
   <button  onClick={(event)=>addCurse(event)} className="btn btn-primary">PYTHON</button>
 </div>
}

export default Student

// export default  function Student(){

// }

//  function Student(){

// }

// export default Student