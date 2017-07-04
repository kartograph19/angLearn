import { task } from '../shared/task'

const lTask:task[] = [
  {title:"Learn Angular ", completed: false }, 
  {title:"Write App" , completed: true}, 
  {title:"Explore new bordaries",completed: false  }
];


export class TaskService
{

    tasks:task[] = lTask;
    getTasks(): task[]{
        return this.tasks;
    }

    create(titile:string):void 
    {
        
    }

    delete(Task:task):void 
    {
      console.log("deleted", Task);
      let index = this.tasks.indexOf(Task);
      if(index > -1)
      {
        this.tasks.splice(index,1);
      }
    }

    toggle(Task:task):void 
    {
        Task.completed = !Task.completed;
        console.log("Changed: " , task);
    }
}