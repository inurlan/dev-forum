import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 * Routes to other pages designed according to Lazy Load principle in Angular
 */

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full'},
  { path: 'all', loadChildren: '../tag-pool/modules/tag-pool.module#TagPoolModule'},
  { path: 'popular', loadChildren: '../tag-pool/modules/tag-pool.module#TagPoolModule'},
  { path: 'create', loadChildren: '../create/modules/create.module#CreateModule'},
  //{ path: ':id', loadChildren: '?'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
