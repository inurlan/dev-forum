import { NgModule } from '@angular/core';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from '../ask.component';

@NgModule({
  imports: [
    AskRoutingModule
  ],
  declarations: [AskComponent]
})
export class AskModule { }
