import { NgModule } from '@angular/core';

import { TagPoolRoutingModule } from './tag-pool-routing.module';
import { TagPoolComponent } from '../tag-pool.component';

@NgModule({
  imports: [
    TagPoolRoutingModule
  ],
  declarations: [TagPoolComponent]
})
export class TagPoolModule { }
