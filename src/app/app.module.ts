import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TodoComponent } from './todo/todo.component';
import { StatsComponent } from './stats/stats.component';
import {FormsModule} from "@angular/forms";

import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TodoComponent,
    StatsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
