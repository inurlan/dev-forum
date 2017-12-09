import { NgModule } from '@angular/core';
import { QuestionPoolRoutingModule } from './question-pool-routing.module';
import { QuestionPoolComponent } from '../question-pool.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    QuestionPoolRoutingModule
  ],
  declarations: [QuestionPoolComponent]
})
export class QuestionPoolModule { }
