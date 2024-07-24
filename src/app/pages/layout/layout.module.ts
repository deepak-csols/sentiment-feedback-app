import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout-component/layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ]
})
export class LayoutModule { }
