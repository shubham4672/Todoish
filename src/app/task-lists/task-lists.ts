import { Component, inject, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-lists',
  imports: [FormsModule],
  templateUrl: './task-lists.html',
  styleUrl: './task-lists.scss',
})
export class TaskLists {
  private taskService = inject(TasksService);
  readonly tasks = this.taskService.tasks;
  taskId = this.taskService.editTaskId;
  editedTask = this.taskService.editedTask;

  deleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }

  editTask(task: Task) {
    this.taskService.editTask(task);
  }

  saveTask(id: string) {
    this.taskService.saveEditedTask(id);
  }
}
