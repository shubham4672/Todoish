import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal<Task[]>([]);

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        this.tasks.set(JSON.parse(storedTasks));
      } catch {
        localStorage.removeItem('tasks');
      }
    }
  }

  public addTask(task: Task): void {
    this.tasks.update((tasks) => [...tasks, task]);
    this.saveTask();
  }

  public removeTask(id: string): void {
    this.tasks.update((tasks) => tasks.filter((t) => t.id != id));
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
