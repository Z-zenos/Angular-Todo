import {
  ChangeDetectorRef,
  Component, DoCheck, OnInit,
} from '@angular/core';
import {Todo} from "./Todo";
import {TodoService} from "./service/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Todo';
  tasks: Todo[] = [];
  taskId = 0;
  isAllCompleted = false;

  constructor(
    private _cdref: ChangeDetectorRef,
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this.loadTasks();
  }

  ngDoCheck(): void {
    this._cdref.detectChanges();
    this.shareTaskList();
    if(this.taskActives.length)
      this.isAllCompleted = !this.taskActives.length;
    this.storeTasks();
  }

  storeTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
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

  markAllCompleted(): void {
    if(!this.taskActives.length)
      this.isAllCompleted = false;
    else if(this.taskActives.length <= this.tasks.length)
      this.isAllCompleted = true;
    this.tasks.forEach(t => t.isCompleted = this.isAllCompleted);
  }

  clearTasksCompleted(): void {
    this.tasks = this.tasks.filter(t => !t.isCompleted);
  }
}
