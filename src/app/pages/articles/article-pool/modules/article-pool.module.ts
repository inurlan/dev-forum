import { NgModule } from '@angular/core';

import { ArticlePoolRoutingModule } from './article-pool-routing.module';
import { ArticlePoolComponent } from '../article-pool.component';

@NgModule({
  imports: [
    ArticlePoolRoutingModule
  ],
  declarations: [ArticlePoolComponent]
})
export class ArticlePoolModule { }
