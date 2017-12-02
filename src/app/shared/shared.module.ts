import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {TagComponent} from './components/tag/tag.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CardComponent,
    TagComponent
  ],
  exports: [
    CardComponent,
    TagComponent
  ]
})
export class SharedModule {
}
