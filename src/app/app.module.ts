import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MessageSubjectService } from './components/breadcrumb/message-subject.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    BreadcrumbComponent,
  ],
  providers: [MessageSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
