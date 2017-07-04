import { Component, Input, Output, EventEmitter} from '@angular/core';
import { task } from '../shared/task'

@Component(
    {
        selector: "taskItem",
        templateUrl : './taskItem.component.html',
        styleUrls :["./taskItem.component.css","../app.component.css"]
    }
)
export class taskItem
{
   @Input() task:task;
   @Output() delete = new EventEmitter();

   onRemove(){
        this.delete.emit();
   }

   toggle(task:any)
   {
        task.completed = !task.completed;
        console.log("dsa:" , task);
   }
   
}