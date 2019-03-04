import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexCssComponent } from './flex-css/flex-css.component';
import { TaskListAssignment1Component } from './task-list-assignment1/task-list-assignment1.component';
import { TaskDetailsComponent } from './task-list-assignment1/task-details/task-details.component';
import { TaskAboutComponent } from './task-list-assignment1/task-about/task-about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/navigation'
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },
  {
    path: 'flex',
    component: FlexCssComponent
  },
  {
    path: 'tasklist',
    component: TaskListAssignment1Component
  },
  {
    path: 'taskdetails',
    component: TaskDetailsComponent
  },
  {
    path: 'about-tasklist',
    component: TaskAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
