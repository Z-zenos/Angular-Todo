import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../Todo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: Todo[] = [];
  status !: string;

  constructor(
    private _todoService: TodoService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._todoService.taskList.subscribe(tl => this.tasks = tl);
    this._activatedRoute.paramMap.subscribe(params => {
      this.status = params.get('status') as string || 'all';
    });
  }

  markTask(task: Todo) {
    this.tasks[task.id].isCompleted = task.isCompleted;
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  get taskCompleteds() {
    return this.tasks.filter(t => t.isCompleted);
  }

  get taskActives() {
    return this.tasks.filter(t => !t.isCompleted);
  }

  get tasksByStatus() {
    const tmp = {
      'all': this.tasks,
      'active': this.taskActives,
      'completed': this.taskCompleteds
    }[this.status] as Todo[];
    console.log(this.tasks, tmp, this.status);
    return tmp;
  }

}
