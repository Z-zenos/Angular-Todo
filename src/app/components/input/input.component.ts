import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newTaskEvent = new EventEmitter<string>();
  @Output() completeAllEvent = new EventEmitter();
  @ViewChild('input') input!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  // Emit value from input of child to parent component
  addNewTask(value: string) {
    this.newTaskEvent.emit(value);
    this.input.nativeElement.value = '';
  }

  markAllTasks() {
    this.completeAllEvent.emit();
  }
}
