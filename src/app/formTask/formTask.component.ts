import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: "formTask",
    templateUrl : './formTask.component.html',
    styleUrls :["./formTask.component.css","../app.component.css"]
})
export class formTask
{
    newTaskTitle:string = "";
    @Output() add = new EventEmitter();
    create()
    {
        this.add.emit(this.newTaskTitle);
    
    }

}