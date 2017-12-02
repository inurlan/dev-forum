import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AskComponent} from '../ask.component';

const routes: Routes = [
  {path: '', component: AskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskRoutingModule { }
