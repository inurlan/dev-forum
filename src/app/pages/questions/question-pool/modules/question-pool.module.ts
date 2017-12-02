import { NgModule } from '@angular/core';
import { QuestionPoolRoutingModule } from './question-pool-routing.module';
import { QuestionPoolComponent } from '../question-pool.component';

@NgModule({
  imports: [
    QuestionPoolRoutingModule
  ],
  declarations: [QuestionPoolComponent]
})
export class QuestionPoolModule { }
