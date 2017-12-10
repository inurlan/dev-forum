import { NgModule } from '@angular/core';

import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from '../publish.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PublishRoutingModule
  ],
  declarations: [PublishComponent]
})
export class PublishModule { }
