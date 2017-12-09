import { NgModule } from '@angular/core';
import { QuestionsAnswersRoutingModule } from './questions-answers-routing.module';
import { QuestionsAnswersComponent } from '../questions-answers.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    QuestionsAnswersRoutingModule
  ],
  declarations: [QuestionsAnswersComponent]
})
export class QuestionsAnswersModule { }
