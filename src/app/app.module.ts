import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { TodoComponent } from './components/todo/todo.component';
import { StatsComponent } from './components/stats/stats.component';
import {FormsModule} from "@angular/forms";
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TodoComponent,
    StatsComponent,
    ListComponent
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
