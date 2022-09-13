import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() task!: Todo;
  @Output() removeTaskEvent = new EventEmitter();
  @Output() changeStatusEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeTask() {
    this.removeTaskEvent.emit(this.task.id);
  }

  changeStatusTask() {
    this.task.isCompleted = !this.task.isCompleted;
    this.changeStatusEvent.emit(this.task);
  }

}
