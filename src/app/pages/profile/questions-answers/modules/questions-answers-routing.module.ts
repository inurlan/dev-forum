import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionsAnswersComponent} from '../questions-answers.component';

const routes: Routes = [
  {path: '', component: QuestionsAnswersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsAnswersRoutingModule { }
