import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    404 NOT FOUND
  `
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
