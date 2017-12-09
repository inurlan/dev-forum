import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {TagComponent} from './components/tag/tag.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuestionComponent } from './components/question/question.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { InfoComponent } from './components/info/info.component';
import {QuillModule} from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuillModule,
    ReactiveFormsModule
  ],
  declarations: [
    CardComponent,
    TagComponent,
    QuestionComponent,
    PaginatorComponent,
    InfoComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    CardComponent,
    TagComponent,
    QuestionComponent,
    PaginatorComponent,
    InfoComponent,
    QuillModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
