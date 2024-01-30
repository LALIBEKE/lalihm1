export class StudentModel{
   firstname!:string
   currses!:string[]

   constructor(firstName:string){
    this.firstname=firstName
    this.currses=[]
   }
}

// export interface StudentModel{
//     firstname:string
//     currses:string[] 
// }


// let s={} as StudentModel

// let s1=new StudentModel1();