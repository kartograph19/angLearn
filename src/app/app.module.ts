import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule} from '@angular/forms';

import  { AppComponent } from './app.component';
import  { formTask }  from './formTask/formTask.component';
import  { taskList }  from './taskList/taskList.component';
import  { taskItem }  from './taskItem/taskItem.component';
import  { TaskService } from './shared/task.service';

@NgModule({
  declarations: [
    AppComponent,
    formTask,
    taskList,
    taskItem
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
