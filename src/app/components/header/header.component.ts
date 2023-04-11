import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'task-manager';
  currentText = 'Add Task'
  newColor = 'green'

  toggleAddTask(){
    console.log("toggled")
  }
}
