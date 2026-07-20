import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal<Task[]>([]);
  editTaskId = signal<string>('');
  editedTask = signal<string>('');

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

  public updateTask(task: Task) {
    this.tasks.update((tasks) =>
      tasks.map((t) => {
        return t.id === task.id
          ? { ...t, status: task.status === 'Incompleted' ? 'Completed' : 'Incompleted' }
          : t;
      }),
    );
  }

  public editTask(task: Task) {
    this.editTaskId.set(task.id);
    this.editedTask.set(task.name);
  }

  public saveEditedTask(id: string) {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, name: this.editedTask() } : task)),
    );
    this.saveTask();
    this.editTaskId.set('');
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
