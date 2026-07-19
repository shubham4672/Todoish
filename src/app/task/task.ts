import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { status } from '../task.model';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  task = '';
  duration = '';
  status: status = 'Incompleted';

  tasksService = inject(TasksService);

  onAddTask() {
    this.tasksService.addTask({
      id: crypto.randomUUID(),
      name: this.task,
      time: this.duration,
      status: this.status,
    });
  }
}
