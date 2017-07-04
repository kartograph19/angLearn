import { Component, Input, OnInit} from '@angular/core';
import { task } from '../shared/task'


import  { taskItem }  from '../taskItem/taskItem.component';
import { TaskService } from '../shared/task.service'




@Component(
    {
        selector: "taskList",
        templateUrl : './taskList.component.html',
        styleUrls :["./taskList.component.css","../app.component.css"]
    }
)
export class taskList implements OnInit
{
  constructor(private taskService:TaskService){
      this.lTask = [];
  }
  ngOnInit(){
    this.lTask = this.taskService.getTasks();
  }


  lTask:task[];

  remove(task:any)
  {
      this.taskService.delete(task);
  }
}