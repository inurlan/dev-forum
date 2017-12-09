import { NgModule } from '@angular/core';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from '../ask.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AskRoutingModule
  ],
  declarations: [AskComponent]
})
export class AskModule { }
