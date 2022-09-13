import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../Todo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'list',
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
    (this.tasks.find(t => t.id === task.id) as Todo).isCompleted = task.isCompleted;
  }

  deleteTask(id: number) {
    for(let i = 0; i < this.tasks.length; i++)
      if(this.tasks[i].id === id) {
        this.tasks.splice(i, 1);
        break;
      }
  }

  get taskCompleteds() {
    return this.tasks.filter(t => t.isCompleted);
  }

  get taskActives() {
    return this.tasks.filter(t => !t.isCompleted);
  }

  get tasksByStatus() {
    return {
      'all': this.tasks,
      'active': this.taskActives,
      'completed': this.taskCompleteds
    }[this.status] as Todo[];
  }

}
