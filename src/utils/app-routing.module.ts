import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from '../app/app.component';
import { TodoComponent } from '../app/todo/todo.component';

// default route is the dashboard
const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/todo-list',
    pathMatch: 'full'
  },
  { 
    path: 'todo-list',
    component: TodoComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}