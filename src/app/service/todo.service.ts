import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Todo} from "../Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private taskListSource = new BehaviorSubject<Todo[]>([]);

  taskList = this.taskListSource.asObservable();

  constructor() { }

  shareTaskList(lists: Todo[]) {
    this.taskListSource.next(lists);
  }
}
