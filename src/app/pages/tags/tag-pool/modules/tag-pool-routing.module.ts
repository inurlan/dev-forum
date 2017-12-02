import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagPoolComponent} from '../tag-pool.component';

const routes: Routes = [
  {path: '', component: TagPoolComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagPoolRoutingModule { }
