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
  @ViewChildren(TodoComponent) taskList!: QueryList<TodoComponent>;
  title = 'Todo';
  tasks!: string[];

  constructor(
    private _cdref: ChangeDetectorRef,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.tasks = {
        'all': this.tasks,
        'active': this.taskActives,
        'completed': this.taskCompleteds
      }[params.get('status') as string] as string[] || [];
    });
  }

  ngAfterContentChecked() {
    this._cdref.detectChanges();
  }

  getTask(newTask: string): void {
    this.tasks.push(newTask.trim());
    console.log(this.tasks);
  };

  get taskCompleteds() {
    return this.taskList?.filter(task => task.isCompleted);
  }

  get taskActives() {
    return this.taskList?.filter(task => !task.isCompleted);
  }

  markAllCompleted(isAllCompleted: boolean): void {
    this.taskList.forEach(todoCom => todoCom.isCompleted = isAllCompleted);
  }

  clearTasksCompleted(): void {
    for(let i = this.taskList.length - 1; i >= 0; i--)
      if(this.taskList.get(i)?.isCompleted)
        this.tasks.splice(i, 1);
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  ngAfterViewInit(): void {
    // this.getTask();
  }


}
