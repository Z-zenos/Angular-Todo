import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {TodoComponent} from "./todo/todo.component";
import {Todo} from "./Todo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {
  // @ViewChildren(TodoComponent) taskList!: QueryList<TodoComponent>;
  title = 'Todo';
  tasks: Todo[] = [];
  status = 'all';

  constructor(
    private _cdref: ChangeDetectorRef,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.status = params.get('status') as string || 'all';
    });
  }

  ngAfterContentChecked() {
    this._cdref.detectChanges();
  }

  getTask(newTask: string): void {
    this.tasks.push(new Todo(newTask.trim()));
  };

  get taskCompleteds() {
    return this.tasks.filter(t => t.isCompleted);
  }

  get taskActives() {
    return this.tasks.filter(t => !t.isCompleted);
  }

  // get tasksByStatus() {
  //   return {
  //     'all': this.tasks,
  //     'active': this.taskActives,
  //     'completed': this.taskCompleteds
  //   }[this.status] as string[] || [];
  // }

  tickTask(task: any) {
    this.tasks[task.id].isCompleted = task.isCompleted;
  }

  markAllCompleted(isAllCompleted: boolean): void {
    // this.taskList.forEach(todoCom => todoCom.isCompleted = isAllCompleted);
  }

  clearTasksCompleted(): void {
    this.tasks = this.tasks.filter(t => !t.isCompleted);
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  ngAfterViewInit(): void {
    // this.getTask();
  }


}
