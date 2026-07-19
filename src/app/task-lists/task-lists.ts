import { Component, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-lists',
  imports: [],
  templateUrl: './task-lists.html',
  styleUrl: './task-lists.scss',
})
export class TaskLists {
  private taskService = inject(TasksService);
  tasks = this.taskService.getTasks();

  deleteTask(id: string) {
    this.taskService.removeTask(id);
    this.tasks = this.taskService.getTasks();
  }

}
