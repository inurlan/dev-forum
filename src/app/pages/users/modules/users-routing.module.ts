import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from '../users.component';

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'all', component: UsersComponent},
  {path: 'popular', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
