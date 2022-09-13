import {
  ChangeDetectorRef,
  Component, DoCheck,
} from '@angular/core';
import {Todo} from "./Todo";
import {TodoService} from "./service/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Todo';
  tasks: Todo[] = [];
  taskId = 0;

  constructor(
    private _cdref: ChangeDetectorRef,
    private _todoService: TodoService
  ) { }

  ngDoCheck(): void {
    this._cdref.detectChanges();
    this.shareTaskList();
  }

  shareTaskList() {
    this._todoService.shareTaskList(this.tasks);
  }

  getTask(newTask: string): void {
    this.tasks.push(new Todo(this.taskId, newTask.trim()));
    this.taskId++;
  };

  get taskActives() {
    return this.tasks.filter(t => !t.isCompleted);
  }

  markAllCompleted(isAllCompleted: boolean): void {
    this.tasks.forEach(t => t.isCompleted = isAllCompleted);
  }

  clearTasksCompleted(): void {
    this.tasks = this.tasks.filter(t => !t.isCompleted);
  }
}
