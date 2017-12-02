import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recent', pathMatch: 'full'},
  { path: 'publish', loadChildren: '../publish/modules/publish.module#PublishModule'},
  { path: 'recent', loadChildren: '../article-pool/modules/article-pool.module#ArticlePoolModule'},
  { path: 'popular', loadChildren: '../article-pool/modules/article-pool.module#ArticlePoolModule'},
  //{ path: ':id', loadChildren: '?'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
