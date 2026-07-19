import { Component, inject } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-lists',
  imports: [],
  templateUrl: './task-lists.html',
  styleUrl: './task-lists.scss',
})
export class TaskLists {
  private taskService = inject(TasksService);
  readonly tasks = this.taskService.tasks;

  deleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  updateTask(task: Task) {
    this.taskService.tasks.update((tasks) =>
      tasks.map((t) =>
        t.id === task.id
          ? { ...t, status: task.status === 'Incompleted' ? 'Completed' : 'Incompleted' }
          : t,
      ),
    );
  }
}
