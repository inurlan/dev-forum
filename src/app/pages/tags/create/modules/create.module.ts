import { NgModule } from '@angular/core';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from '../create.component';

@NgModule({
  imports: [
    CreateRoutingModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }
