import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./MaterialModule";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexCssComponent } from './flex-css/flex-css.component';
import { JustifyContentComponent } from './flex-css/justify-content/justify-content.component';
import { TaskListAssignment1Component } from './task-list-assignment1/task-list-assignment1.component';
import { TaskDetailsComponent } from './task-list-assignment1/task-details/task-details.component';
import { TaskAboutComponent } from './task-list-assignment1/task-about/task-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FlexCssComponent,
    JustifyContentComponent,
    TaskListAssignment1Component,
    TaskDetailsComponent,
    TaskAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
