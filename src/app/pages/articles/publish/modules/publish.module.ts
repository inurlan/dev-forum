import { NgModule } from '@angular/core';

import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from '../publish.component';

@NgModule({
  imports: [
    PublishRoutingModule
  ],
  declarations: [PublishComponent]
})
export class PublishModule { }
