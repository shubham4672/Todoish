import { Component, signal } from '@angular/core';
import { Task } from "./task/task";
import { TaskLists } from "./task-lists/task-lists";

@Component({
  selector: 'app-root',
  imports: [Task, TaskLists],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
