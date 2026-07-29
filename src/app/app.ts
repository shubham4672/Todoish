import { Component, signal } from '@angular/core';
import { Task } from "./task/task";
import { TaskLists } from "./task-lists/task-lists";
import { FilterTasks } from "./filter-tasks/filter-tasks";

@Component({
  selector: 'app-root',
  imports: [Task, TaskLists, FilterTasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
