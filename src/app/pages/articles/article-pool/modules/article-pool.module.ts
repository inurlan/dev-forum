import { NgModule } from '@angular/core';

import { ArticlePoolRoutingModule } from './article-pool-routing.module';
import { ArticlePoolComponent } from '../article-pool.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ArticlePoolRoutingModule
  ],
  declarations: [ArticlePoolComponent]
})
export class ArticlePoolModule { }
