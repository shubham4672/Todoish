import { Injectable } from "@angular/core";
import { Task } from "./task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks: Task[] = [];

    constructor () {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            this.tasks = JSON.parse(storedTasks);
        }
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public addTask(task: Task): void {
        this.tasks.push(task);
        this.saveTask();
    }

    public removeTask(id: string): void {
        const tasks = this.tasks.filter((t) => t.id != id);
        this.tasks = tasks;
        this.saveTask();
    }

    private saveTask() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}