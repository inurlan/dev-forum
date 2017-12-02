import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from '../app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavTabsComponent} from '../shared/components/nav-tabs/nav-tabs.component';
import {QuestionPoolModule} from '../pages/questions/question-pool/modules/question-pool.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionPoolModule,
  ],
  declarations: [
    AppComponent,
    NavTabsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

