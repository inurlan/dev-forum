import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from '../app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavTabsComponent} from '../shared/components/nav-tabs/nav-tabs.component';
import {QuestionPoolModule} from '../pages/questions/question-pool/modules/question-pool.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionPoolModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    NavTabsComponent,
  ],
  providers: [],
  exports: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}

