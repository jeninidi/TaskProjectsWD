import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexCssComponent } from './flex-css/flex-css.component';
import { TaskListAssignment1Component } from './task-list-assignment1/task-list-assignment1.component';
import { TaskDetailsComponent } from './task-list-assignment1/task-details/task-details.component';
import { TaskAboutComponent } from './task-list-assignment1/task-about/task-about.component';
import { DatingWebsiteAssignment2Component } from './dating-website-assignment2/dating-website-assignment2.component';
import { TicTacToeComponent } from './tic-tac-toe-game/tic-tac-toe/tic-tac-toe.component';

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
  },
{
  path: 'dating-website',
  component: DatingWebsiteAssignment2Component
},
{
  path: 'tictactoe',
  component: TicTacToeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
