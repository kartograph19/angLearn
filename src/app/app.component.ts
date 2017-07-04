import { Component } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';


import { task } from './shared/task'

const lTask:task[] = [
  {title:"Learn Angular ", completed: false }, 
  {title:"Write App" , completed: true}, 
  {title:"Explore new bordaries",completed: false  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    title  = "Angular"

    tasks:task[] = lTask;
    create(title:string)
    {
        const Task = new task(title);
        this.tasks.push(Task);
    }
}
