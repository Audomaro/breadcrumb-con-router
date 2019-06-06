import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { DemoComponent } from './../components/demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [DemoComponent]
})
export class BetaModule { }