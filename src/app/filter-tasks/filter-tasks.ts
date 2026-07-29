import { Component, inject } from '@angular/core';
import { TasksService } from '../tasks.service';
import { filterTasksStatus } from '../task.model';

@Component({
  selector: 'app-filter-tasks',
  imports: [],
  templateUrl: './filter-tasks.html',
  styleUrl: './filter-tasks.scss',
})
export class FilterTasks {
  private taskService = inject(TasksService);

  updateTodos(filter: filterTasksStatus) {
      this.taskService.filter.set(filter);
  }
}
