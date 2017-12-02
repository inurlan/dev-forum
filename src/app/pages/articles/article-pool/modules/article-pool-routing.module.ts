import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlePoolComponent} from '../article-pool.component';

const routes: Routes = [
  {path: '', component: ArticlePoolComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlePoolRoutingModule { }
