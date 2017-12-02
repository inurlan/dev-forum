import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { QuestionsAnswersComponent } from '../questions-answers.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionsAnswersRoutingModule
  ],
  declarations: [QuestionsAnswersComponent]
})
export class QuestionsAnswersModule { }
