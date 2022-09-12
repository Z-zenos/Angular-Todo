import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() taskContent!: string;
  @Input() id!: number;
  @Output() removeTaskEvent = new EventEmitter();

  isCompleted = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeTask() {
    this.removeTaskEvent.emit(this.id);
  }

}
