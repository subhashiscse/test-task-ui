import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class TaskDashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });

    this.taskService.listenForTaskUpdates().subscribe((task) => {
      const index = this.tasks.findIndex(t => t._id === task._id);
      if (index !== -1) {
        this.tasks[index] = task;
      } else {
        this.tasks.push(task);
      }
    });
  }
}
