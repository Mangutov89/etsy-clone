import { Component } from '@angular/core';
import { Item } from './model/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test: number = 689
  selectedTask = null;

    masterTaskList: Task [] = [
      new Task("Finish Homework", 3),
      new Task("Not go crazy", 2),
      new Task("Play Fortnite", 1)
    ];

  editTask(clickedTask){
    console.log('editTask function')
    console.log(clickedTask)
    this.selectedTask = clickedTask
  }

  addANewTask = null;
  finish(){
    console.log("finish adding a new task function");
    this.addANewTask = true;
  }

  finishedEditing(){
    console.log('finishTask function')
    this.selectedTask = null;
  }
}
