import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 * Routes to other pages designed according to Lazy Load principle in Angular
 */

const routes: Routes = [
  {path: '', redirectTo: ':user_id/home', pathMatch: 'full'},
  {path: ':user_id', redirectTo: ':user_id/home', pathMatch: 'full'},
  {path: ':user_id/home', loadChildren: '../home/modules/home.module#HomeModule'},
  {path: ':user_id/questions-answers', loadChildren: '../questions-answers/modules/questions-answers.module#QuestionsAnswersModule'},
  {path: ':user_id/about', loadChildren: '../about/modules/about.module#AboutModule'},
  {path: ':user_id/contact', loadChildren: '../contact/modules/contact.module#ContactModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
