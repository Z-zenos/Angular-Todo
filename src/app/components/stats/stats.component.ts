import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Output() clearEvent = new EventEmitter();
  @Input() numberTasks!: number;
  constructor() { }

  ngOnInit(): void {
  }

  clearTasks() {
    this.clearEvent.emit();
  }

}
