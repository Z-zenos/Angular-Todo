import {AfterViewChecked, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from "../../service/todo.service";

@Component({
  selector: 'todo-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, AfterViewChecked {
  @Output() clearEvent = new EventEmitter();
  @Input() numberTasks!: number;
  @Input() hasCompletedTask = false;
  status = 'all';

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this._todoService.status.subscribe(status => this.status = status);
  }

  clearTasks() {
    this.clearEvent.emit();
  }

}
