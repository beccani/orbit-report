import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOfBobComponent } from './component-of-bob/component-of-bob.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HeaderComponent } from './header/header.component';
import { InsideTaskListComponent } from './task-list/inside-task-list/inside-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOfBobComponent,
    TaskListComponent,
    HeaderComponent,
    InsideTaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
