import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recent', pathMatch: 'full'},
  { path: 'ask', loadChildren: '../ask/modules/ask.module#AskModule'},
  { path: 'recent', loadChildren: '../question-pool/modules/question-pool.module#QuestionPoolModule'},
  { path: 'answered', loadChildren: '../question-pool/modules/question-pool.module#QuestionPoolModule'},
  { path: 'unanswered', loadChildren: '../question-pool/modules/question-pool.module#QuestionPoolModule'},
  { path: 'accepted', loadChildren: '../question-pool/modules/question-pool.module#QuestionPoolModule'},
  //{ path: ':id', loadChildren: '?'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {
}
