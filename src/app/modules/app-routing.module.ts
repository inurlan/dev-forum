import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



/**
 * Routes to other pages designed according to Lazy Load principle in Angular
 */

export const routes: Routes = [
  {path: '', redirectTo: 'questions', pathMatch: 'full'},
  {path: 'questions', loadChildren: '../pages/questions/modules/questions.module#QuestionsModule'},
  {path: 'articles', loadChildren: '../pages/articles/modules/articles.module#ArticlesModule'},
  {path: 'profile', loadChildren: '../pages/profile/modules/profile.module#ProfileModule'},
  {path: 'tags', loadChildren: '../pages/tags/modules/tags.module#TagsModule'},
  {path: 'users', loadChildren: '../pages/users/modules/users.module#UsersModule'},
  //{path: '**', loadChildren: '../pages/page-not-found/modules/page-not-found.module#PageNotFoundModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
