import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout-component/layout.component';
import { AuthGuard } from '../../core/common/auth.gaurd';

const routes: Routes = [
 {
    path:'',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'dashboard',
        loadChildren: () => 
          import('../dashboard/dashboard.module').then((m)=>m.DashboardModule),
      },
    ]
  }
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
