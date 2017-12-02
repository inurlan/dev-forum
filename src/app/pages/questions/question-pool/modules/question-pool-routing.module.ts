import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionPoolComponent} from '../question-pool.component';

const routes: Routes = [
  {path: '', component: QuestionPoolComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionPoolRoutingModule { }
