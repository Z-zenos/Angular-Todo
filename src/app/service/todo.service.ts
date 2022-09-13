import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Todo} from "../Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _taskListSource = new BehaviorSubject<Todo[]>([]);
  private _statusSource = new BehaviorSubject<string>('');

  status = this._statusSource.asObservable();
  taskList = this._taskListSource.asObservable();

  constructor() { }

  shareTaskList(lists: Todo[]) {
    this._taskListSource.next(lists);
  }

  shareStatus(status: string) {
    this._statusSource.next(status);
  }
}
