import { Component, Input} from '@angular/core';
import { task } from '../shared/task'


import  { taskItem }  from '../taskItem/taskItem.component';




@Component(
    {
        selector: "taskList",
        templateUrl : './taskList.component.html',
        styleUrls :["./taskList.component.css","../app.component.css"]
    }
)
export class taskList
{
  @Input()lTask:task[];

  remove(task:any)
  {
      console.log("delete");
      let index = this.lTask.indexOf(task);
      if(index > -1)
      {
        this.lTask.splice(index,1);
      }
  }
}