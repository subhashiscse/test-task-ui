import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private socket;
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000');
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  listenForTaskUpdates(): Observable<Task> {
    return new Observable((observer) => {
      this.socket.on('task-updated', (task: Task) => {
        observer.next(task);
      });
    });
  }
}
