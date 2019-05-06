import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './../components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
  ComponentsModule,
  RouterModule
  ],
  exports : [
    LayoutComponent
  ]

})
export class LayoutModule { }
